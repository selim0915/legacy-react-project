import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

class R048_ReactstrapModal extends Component{
    constructor(props) {
        super(props);
        this.state = {
            modal:false
        }
    }

    toggle = () => {
        this.setState({modal: !this.state.modal})
    }

    render() {
        return(
            <>
                <Button onClick={this.toggle}>btn</Button>

                <Modal isOpen={this.state.modal} fade={true} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>header</ModalHeader>
                    <ModalBody>boby</ModalBody>
                    <ModalFooter>
                        <Button onClick={this.toggle}>ok</Button>
                        <Button onClick={this.toggle}>close</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default R048_ReactstrapModal;