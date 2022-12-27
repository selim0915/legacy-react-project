import React, { Component } from "react";

class Control extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href="/create" onClick={function(e){
                        e.preventDefault();
                        this.props.onChangeMode('create');
                    }.bind(this)}>create</a></li>
                    <li><a href="/update" onClick={function(e){
                        e.preventDefault();
                        this.props.onChangeMode('update');
                    }.bind(this)}>update</a></li>
                    <li><input type="button" value="delete" onClick={function(e){
                        e.preventDefault();
                        this.props.onChangeMode('delete');
                    }.bind(this)}></input></li>
                    {/* 삭제 같은 경우는 링크보다 버튼으로 하는 것이 좋다.. 이유는 링크는 로딩시 예외상황이 많아서 .. */}
                </ul>
            </div>
        )
    }
}

export default Control;