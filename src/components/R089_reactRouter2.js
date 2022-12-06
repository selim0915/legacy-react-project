import React, { Component } from 'react';
import {Link} from "react-router-dom";

class R089_reactRouter2 extends Component {
  render() {
    return (
      <>
        <h1>path='/reactRouter2'</h1>
        <h3>R090_reactRouter</h3>
        <Link to={'/reactRouter2'}>R089_reactRouter2</Link>
      </>
    )
  }
}

export default R089_reactRouter2;