import axios from "axios";
import React, { Component } from "react";

class R062_AxiosPost extends Component{
    componentDidMount() {
        axios.get('http://date.jsontest.com/', {
            a: "react", b:200
        }).then(response => {alert(response.data.date)})
    } 

    render() {
        return(
            <>
                <h2>R062_AxiosPost</h2>
            </>
        )
    }
}

export default R062_AxiosPost;