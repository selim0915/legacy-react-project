import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import cookie from 'react-cookies';
import axios from "axios";
import ProtectedRoute from '../ProtectedRoute';
import useToast from '../hooks/toast';
import LoadingSpinner from './Nobd/Blog/componets/LoadingSpinner';
import Navbar from './Nobd/Blog/componets/Navbar';
import Toast from './Nobd/Blog/componets/Toast';
import { login } from '../store/authSlice';
import routes from '../routes';

// css
import '../css/new.css';
import '../css/snow.css';

// js
import '../js/snow.js'

// header
import HeaderAdmin from './Header/Header_admin';

// footer
import Footer from './Footer/Footer';

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  const toasts = useSelector((state) => state.toast.toasts);
  const [, deleteToast] = useToast();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
      if(localStorage.getItem('isLoginIn')){  // isLoginIn라는 값이 있으면
          dispatch(login())
      }
      setLoading(false);
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
  }, []);

  const noPermission = (e) => {
    if(window.location.hash !== 'nocookie'){
      remove_cookie();

      setTimeout(function() {
          window.location.href = '/login/#nocookie';
      }.bind(this),1000);
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
  );
}

export default App;