import React, { Component } from "react";
import { Button, PopoverBody, PopoverHeader, UncontrolledPopover } from "reactstrap";

class R051_ReactstrapPopover extends Component{
    render() {
        return(
            <>
                <Button id="Popover_id" type="button">
                    btn
                </Button>

                <UncontrolledPopover placement="right" target="Popover_id">
                    <PopoverHeader>React 200</PopoverHeader>
                    <PopoverBody>
                        body
                    </PopoverBody>
                </UncontrolledPopover>
            </>
        )
    }
}

export default R051_ReactstrapPopover;