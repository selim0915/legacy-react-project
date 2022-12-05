import React, { Component } from "react";

class R059_FetchGet extends Component{
    componentDidMount = async () => {
        const response = await fetch('http://date.jsontest.com/');
        const body = await response.json();
        alert(body.date)
    }

    render() {
        return(
            <>
                <h2>R059_FetchGet</h2>
            </>
        )
    }
}

export default R059_FetchGet;