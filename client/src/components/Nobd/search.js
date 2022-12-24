import React, { Component } from "react";

class Search extends Component {
    render() {
        return (
            <>
                <h2 className="s_tit1">
                    <a href="/AdminDataSourceList" onClick={function(e){
                        e.preventDefault();
                        this.props.onChangePage();
                    }.bind(this)}>{this.props.title}</a>
                </h2>
                {this.props.sub}
            </>
        )
    }
}

export default Search;