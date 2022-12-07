import React, { Component } from "react";

class R006_LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state){
        console.log('2. getDerivedStateFromProps ' + props.prop_value);
        return {};
    }

    constructor(props){
        super(props);
        this.state = {};
        console.log('1. constructor call');
    }

    render() {
        console.log('3. render call');
        return (
            <h2>R006_LifecycleEx</h2>
        )
    }
}

export default R006_LifecycleEx;