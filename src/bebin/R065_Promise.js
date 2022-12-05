import React, { Component } from "react";

class R065_Promise extends Component{
    componentDidMount(){
        new Promise((resolve, reject) => {
            reject(Error("Error Info"));
        })
        .then(result => console.log("then: "+result))
        .catch(result => console.log("catch: "+result));
    }

    render() {
        return(
            <>
                <h2>R065_Promise</h2>
            </>
        )
    }
}

export default R065_Promise;