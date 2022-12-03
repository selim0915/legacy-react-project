import React, { Component } from "react";
import { UncontrolledCarousel } from 'reactstrap';

const item = [
    {
        src: 'http://www.test.com',
        altText: 'text1',
        caption: 'caption1',
        header: 'header1'
    },
    {
        src: 'http://www.test.com',
        altText: 'text2',
        caption: 'caption2',
        header: 'header2'
    },
    {
        src: 'http://www.test.com',
        altText: 'text3',
        caption: 'caption3',
        header: 'header3'
    }
]

class R041_ReactstrapCarouse extends Component{
    render() {
        return(
            <UncontrolledCarousel items={item} />
        )
    }
}

export default R041_ReactstrapCarouse;