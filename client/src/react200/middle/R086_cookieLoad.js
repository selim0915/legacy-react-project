import { Component } from "react";
import cookie from 'react-cookies';

class R086_cookieLoad extends Component {
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
        setTimeout(function() {
            alert(cookie.load('userid'))
        },1000)
    }

    render() {
        return (
            <h2>R086_cookieLoad</h2>
        )
    }
}

export default R086_cookieLoad;