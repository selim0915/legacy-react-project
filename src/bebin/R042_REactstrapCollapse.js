import React, { Component } from "react";
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

class R042_REactstrapCollapse extends Component{
    render() {
        return(
            <div>
                <Button id="toggle">
                    펼치기/접기
                </Button>

                <UncontrolledCollapse toggler="#toggle">
                    <Card>
                        <CardBody>
                            REACT 
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </div>
        )
    }
}

export default R042_REactstrapCollapse;