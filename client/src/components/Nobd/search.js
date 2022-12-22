import React, { Component } from "react";

class Search extends Component {
    render() {
        return (
            <>
                <h2 className="s_tit1">
                    {this.props.title}
                </h2>
                {this.props.sub}
            </>
        )
    }
}

export default Search;