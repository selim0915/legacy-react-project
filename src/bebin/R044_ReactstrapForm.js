import React, { Component } from "react";
import { Form, Label, Input, Row, Col, FormGroup } from 'reactstrap';

class R044_ReactstrapForm extends Component{
    render() {
        return(
            <Form>
                <Label for="exampleGender">gender</Label>
                <Input type="select" bsSize="sm">
                        <option>x</option>
                        <option>y</option>
                        <option>z</option>
                </Input>

                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleAddress">address</Label>
                            <Input type="text" name="address" id="address"/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="exampleMobile">mobile</Label>
                            <Input type="text" name="mobile" id="mobile"/>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label fpr="exampleAge">age</Label>
                            <Input type="text" name="age" id="age" />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default R044_ReactstrapForm;