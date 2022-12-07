import React, { Component } from "react";

class R064_Promise extends Component{
    componentDidMount(){
        new Promise(resolve => {
            setTimeout(function() {
                resolve('react');
            }, 1500);
        })
        .then(function(result){
            console.log(result);
            return result+200;
        })
        .then(result => {
            console.log(result);
        })
    }

    render() {
        return(
            <>
                <h2>R064_Promise</h2>
            </>
        )
    }
}

export default R064_Promise;