import { Component } from "react";
import cookie from 'react-cookies';

class R085_cookieSave extends Component {
    componentDidMount() {
        const expires = new Date()
        expires.setMinutes(expires.getMinutes()+60)
        cookie.save('userid', "react200"
            , {
                path: '/',
                expires,
                // secure: true,
                // httpOnly: true
            }
        );
    }

    render() {
        return (
            <h2>R085_cookieSave</h2>
        )
    }
}

export default R085_cookieSave;