import axios from "axios";
import React, { Component } from "react";

class R061_AxiosGet extends Component{
    componentDidMount() {
        axios.get('http://date.jsontest.com/').then(response => {alert(response.data.date)})
    } 

    render() {
        return(
            <>
                <h2>R061_AxiosGet</h2>
            </>
        )
    }
}

export default R061_AxiosGet;