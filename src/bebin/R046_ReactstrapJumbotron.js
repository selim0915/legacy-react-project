// Jumboton install 안됨

import React, { Component } from "react";
import { Jumboton, Button } from 'reactstrap';

class R046_ReactstrapJumbotron extends Component{
    render() {
        return(
            <>
                <Jumboton>
                    <h1 className="displai-4">react 200</h1>
                    <p className="h4">content</p>
                    <hr/>
                    <p>content2</p>
                    <p>
                        <Button color="danger"></Button>
                    </p>
                </Jumboton>
            </>
        )
    }
}

export default R046_ReactstrapJumbotron;