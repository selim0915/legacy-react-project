import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
        <footer className="footer">
            <ul>
              <li className="priv"><a href="#n">이용약관</a></li>
              <li className="em_bt"><a href="#n">고객센터</a></li>
              <li className="em_bt"><a href="#n">&copy; 우세림</a></li>
            </ul>
        </footer>
    );
  }
}

export default Footer;