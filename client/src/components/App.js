import React, { Component } from 'react';
import { Route } from "react-router-dom";
// import {connect} from 'react-redux';
import SoftwareList from './SoftwareToolsManage/SoftwareList';
import SoftwareView from './SoftwareToolsManage/SoftwareView';
//import '../App.css';
//import 'bootstrap/dist/css/bootstrap.css';

// css
import '../css/new.css';

// header
import HeaderAdmin from './Header/Header_admin';

// footer
import Footer from './Footer/Footer';

// login
import LoginForm from './LoginForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderAdmin />
        <Route exact path='/' component={LoginForm} />
        <Route path='/SoftwareList' component={SoftwareList} />
        <Route path='/SoftwareView/:swtcode' component={SoftwareView} />
        {/* <Route path='/floatingPopulationList' component={floatingPopulationList} /> */}
        <Footer />
      </div>
      // <div>
      //   <h1>react 시작</h1>
      //   <p>html 적용</p>
      //   {/* <span>{this.props.store.getState().data.str}</span><br/>
      //   <StrAddButton store={this.props.store}/> */}

      //   {/* <span>{this.props.str}</span><br/>
      //   <StrAddButton AppProp="200"/> */}
      // </div>
    );
  }
}

// let mapStateToProps = (state, props) => {
//   console.log("props from index.js : "+props.indexProp)
//   return {
//     str : state.data.str,
//   }
// }

// App = connect(mapStateToProps, null)(App);

export default App;