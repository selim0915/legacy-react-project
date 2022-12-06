import React, { Component } from 'react';
// import {connect} from 'react-redux';
// import StrAddButton from '../StrAddButton';
import { Route, Routes } from "react-router-dom";
import reactRouter from './R089_reactRouter'
import reactRouter2 from './R089_reactRouter2'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

// css
import '../css/new.css';

// header
import HeaderAdmin from './Header/Header_admin';

// footer
import Footer from './Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderAdmin />
        <Route exact path='/' component={reactRouter} />
        <Route exact path='/reactRouter2' component={reactRouter2} />
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