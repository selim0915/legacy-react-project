import React, { Component } from "react";
import { Alert, UncontrolledAlert } from 'reactstrap';
 
class R034_ReactstrapAlert extends Component{
    render() {
        return(
            <div>
                <Alert>
                    Simple Alert [color: light]
                </Alert>
                <UncontrolledAlert>
                    Uncontrolled Alert [color: warning]
                </UncontrolledAlert>
            </div>
        )
    }
}

export default R034_ReactstrapAlert;