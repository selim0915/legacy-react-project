import React, { Component } from "react";

class R005_LifecycleEx extends Component {
    constructor(props) {
        super(props);
        this.atate = {};
        console.log("1. constructor");
    }

    render() {
        console.log("3. render call (5)");
        return (
            <h2>R005_LifecycleEx</h2>
        )
    }
}

export default R005_LifecycleEx;