import React, { Component } from 'react';
import { Route } from "react-router-dom";
import cookie from 'react-cookies';
import axios from "axios";

import RoutePage from './RoutePage';
import SoftwareList from './Syst/Sw/SoftwareList';
import SoftwareView from './Syst/Sw/SoftwareView';
import floatingPopulationList from './Syst/Bus/floatingPopulationList';

// css
import '../css/new.css';
import '../css/snow.css';

// js
import '../js/snow.js'

// header
import HeaderAdmin from './Header/Header_admin';

// footer
import Footer from './Footer/Footer';

// login
import LoginForm from './LoginForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    axios.post('/api/LoginForm?type=SessionConfirm', {
      token1 : cookie.load('userid'),
      token2 : cookie.load('username') 
    })
    .then( response => {
        this.state.userid = response.data.token1
        let password = cookie.load('userpassword')

        if(password !== undefined){
          axios.post('/api/LoginForm?type=SessionSignin', {
            is_Email: this.state.userid,
            is_Token : password
          })
          .then( response => {
            if(response.data.json[0].useremail === undefined){
              this.noPermission()
            }
          })
          .catch( error => {
            this.noPermission()
          });
        }else{
          this.noPermission()
        }
    })
    .catch( response => this.noPermission());
  }

  noPermission = (e) => {
    if(window.location.hash !== 'nocookie'){
      this.remove_cookie();

      setTimeout(function() {
          window.location.href = '/login/#nocookie';
      }.bind(this),1000);
    }
  };

  remove_cookie = (e) => {
    cookie.remove('userid', { path: '/'});
    cookie.remove('username', { path: '/'});
    cookie.remove('userpassword', { path: '/'});
  }

  render() {
    return (
      <div className="App">
        <HeaderAdmin />
        <Route exact path='/' component={LoginForm} />
        <Route path='/login' component={LoginForm} />
        <Route path='/mypage/diary' component={RoutePage} /> {/* 내정보>다이어리 */}
        <Route path='/blog' component={RoutePage} /> {/* 게시판>블로그 */}
        <Route path='/prac' component={RoutePage} /> {/* 게시판>자유게시판 */}
        <Route path='/user/admin' component={RoutePage} /> {/* 사용자관리 */}
        <Route path='/SoftwareList' component={SoftwareList} /> {/* 시스템관리 */}
        <Route path='/SoftwareView/:swtcode' component={SoftwareView} /> {/* 시스템관리 */}
        <Route path='/floatingPopulationList' component={floatingPopulationList} /> {/* 시스템관리>버스정류장 */}
        <Footer />
      </div>
    );
  }
}

export default App;