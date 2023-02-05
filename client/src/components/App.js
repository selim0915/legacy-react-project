import axios from "axios";
import React, { useEffect, useReducer, useRef, useState } from 'react';
import cookie from 'react-cookies';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation } from "react-router-dom";
import useToast from '../hooks/toast';
import ProtectedRoute from '../ProtectedRoute';
import routes from '../routes';
import { login } from '../store/authSlice';
import { emotionDumpData } from "../utils/emotion";

// css, js
import '../css/new.css';
import '../css/memo.css';
import '../css/snow.css';
import '../js/snow.js';

// compoents
import Footer from './Footer/Footer';
import HeaderAdmin from './Header/Header_admin';
import LoadingSpinner from './Nobd/Blog/componets/LoadingSpinner';
import Navbar from './Nobd/Blog/componets/Navbar';
import Toast from './Nobd/Blog/componets/Toast';

const reducer = (state, action) => {
    let newState = [];

    switch(action.type){
        case 'INIT' : {
            return action.data;
        }
        case 'CREATE' : {
            newState = [action.data, ...state];
            break;
        }
        case 'REMOVE' : {
            newState = state.filter((item)=>item.id !== action.targetId);
            break;
        }
        case 'EDIT' : {
            newState = state.map((item)=>item.id === action.data.id ? {...action.data} : item);
            break;
        }
        default : 
            return state;
    }

    localStorage.setItem("memo", JSON.stringify(newState));
    return newState;
}

export const MemoStateContext = React.createContext();
export const MemoDispatchContext = React.createContext();


function App() {
  const location = useLocation();
  const pathname = location.pathname;

  const toasts = useSelector((state) => state.toast.toasts);
  const [, deleteToast] = useToast();
  const loginDispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const dataId = useRef(6);
  const [memoDumpData, dispatch] = useReducer(reducer, emotionDumpData); // [] 기본값

  const onCreate = (date, content, emotion)=>{
        dispatch({
            type:"CREATE", 
            data: {
                id:dataId.current, 
                date: new Date(date).getTime(), 
                content, 
                emotion
            }
        });
        dataId.current += 1;
    }

    const onRemove = (targetId) => {
        dispatch({type:"REMOVE", targetId});
    }

    const onEdit = (targetId, date, content, emotion) => {
        dispatch({
            type:"EDIT", 
            data: {
                id: targetId,
                date: new Date(date).getTime(),
                content,
                emotion,
            }
        });
    }

  useEffect(() => {
    const localData = localStorage.getItem('memo');
    if(localData){
      const memoList = JSON.parse(localData).sort((a,b) => parseInt(b.id) - parseInt(a.id));
      dataId.current = parseInt(memoList[0].id)+1;

      dispatch({type: "INIT", data: memoList});
    }
  },[])
  
  useEffect(() => {
      if(localStorage.getItem('isLoginIn')){  // isLoginIn라는 값이 있으면
          loginDispatch(login())
      }
      setLoading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    axios.post('/api/LoginForm?type=SessionConfirm', {
      token1 : cookie.load('userid'),
      token2 : cookie.load('username') 
    })
    .then( response => {
        let password = cookie.load('userpassword')

        if(password !== undefined){
          axios.post('/api/LoginForm?type=SessionSignin', {
            is_Email: response.data.token1,
            is_Token : password
          })
          .then( response => {
            if(response.data.json[0].useremail === undefined){
              noPermission()
            }
          })
          .catch( error => {
            noPermission()
          });
        }else{
          noPermission()
        }
    })
    .catch( response => noPermission());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const noPermission = (e) => {
    if(window.location.hash !== 'nocookie'){
      remove_cookie();

      setTimeout(function() {
          window.location.href = '/login/#nocookie';
      },1000);
    }
  };

  const remove_cookie = (e) => {
    cookie.remove('userid', { path: '/'});
    cookie.remove('username', { path: '/'});
    cookie.remove('userpassword', { path: '/'});
  }

  if(loading) {
      return (
          <LoadingSpinner />
      );
  }

  return (
    <MemoStateContext.Provider value={memoDumpData}>
      <MemoDispatchContext.Provider value={{onCreate, onEdit, onRemove}}>
        <div className="App">
          <HeaderAdmin />
          <div className="container">
              {/* blog url 에서만 보여주는 화면 */}
              {pathname.includes('/blog') ? <Navbar /> : null}
              {pathname.includes('/blog') ? <Toast toasts={toasts} deleteToast={deleteToast} /> : null}

              <section className="sub_wrap">
                  <article className="s_cnt mp_pro_li ct1 mp_pro_li_admin">
                      <Routes>
                          {/* exact : 정확하게 매치되야 보여준다는 옵션 */}
                          {routes.map((route) => {
                              return <Route 
                                          key={route.path} 
                                          path={route.path} 
                                          element={route.auth ? <ProtectedRoute 
                                                                      key={route.path} 
                                                                      path={route.path}
                                                                      element={route.element}
                                                                      exact="true"
                                                                  /> : route.element} 
                                          exact="true"
                                      />
                          })}
                      </Routes>
                  </article>
              </section>
          </div>
          <Footer />
        </div>
        </MemoDispatchContext.Provider>
    </MemoStateContext.Provider>
  );
}

export default App;