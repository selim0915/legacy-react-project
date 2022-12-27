import React, { Component } from "react";

class Content2 extends Component {
    render() {
        return (
            <div>
                <h2 className="s_tit1">
                    <a href="/AdminDataSourceList">{this.props.title}</a>
                </h2>
                {this.props.desc}
            </div>
        )
    }
}

export default Content2;