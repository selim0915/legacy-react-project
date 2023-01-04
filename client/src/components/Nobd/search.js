import React, { Component } from "react";

class Search extends Component {
    render() {
        return (
            <div className="li_top">
                <h2 className="s_tit1">
                    <a href="/AdminDataSourceList" onClick={function(e){
                        e.preventDefault();
                        this.props.onChangePage();
                    }.bind(this)}>{this.props.title}</a>
                </h2>
                <h6>
                    {this.props.sub}
                </h6>
            </div>
        )
    }
}

export default Search;