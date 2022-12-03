import React, { Component } from "react";
import { Spinner } from "reactstrap";

class R053_ReactstrapSpinner extends Component{
    render() {
        return(
            <>
                <Spinner color="secondary"/>
                <Spinner colr="success" />
                <Spinner type="grow" color="dark" />
                <Spinner type="grow" color="info" />
                <Spinner size="sm" color="primary" />
                <Spinner style={{wdith: '10rem', height: '0.5rem'}} color="dark"/>
                <Spinner style={{wdith: '10rem', height: '10rem'}} color="secondary"/>
                <Spinner style={{wdith: '3rem', height: '0.5rem'}} color="primary"/>
            </>
        )
    }
}

export default R053_ReactstrapSpinner;