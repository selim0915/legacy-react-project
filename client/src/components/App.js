import React, { Component } from 'react';
import { Route } from "react-router-dom";
import cookie from 'react-cookies';
import axios from "axios";

import SoftwareList from './SoftwareToolsManage/SoftwareList';
import SoftwareView from './SoftwareToolsManage/SoftwareView';
import floatingPopulationList from './Floating_population/floatingPopulationList';
import Register from './Register/Register';

// css
//import '../App.css';
//import 'bootstrap/dist/css/bootstrap.css';
import '../css/new.css';

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
    if(window.location.hash != 'nocookie'){
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
        <Route path='/SoftwareList' component={SoftwareList} />
        <Route path='/SoftwareView/:swtcode' component={SoftwareView} />
        <Route path='/floatingPopulationList' component={floatingPopulationList} />
        <Route path='/register' component={Register} />
        <Footer />
      </div>
    );
  }
}

export default App;