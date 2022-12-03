// InputGroupAddon install 안됨

import React, { Component } from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';

class R045_ReactstrapInputGroup extends Component{
    render() {
        return(
            <>
                <InputGroup>
                    <Input placeholder="userId" />
                    <InputGroupAddon addonType="append">
                        <InputGroupText>text</InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <Button>btn</Button>
                    </InputGroupAddon>
                </InputGroup>
            </>
        )
    }
}

export default R045_ReactstrapInputGroup;