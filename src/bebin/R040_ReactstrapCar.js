import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
 
class R040_ReactstrapCar extends Component{
    render() {
        return(
            <div>
                <Card>
                    <CardImg top height="200px" src="http://bitly.kr/4KkfRxZfR" alt="card img" />

                    <CardBody>
                        <CardTitle>title</CardTitle>
                        <CardSubtitle>sub tile</CardSubtitle>
                        <CardText>content</CardText>
                        <Button>btn</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default R040_ReactstrapCar;