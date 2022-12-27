import React, { Component } from "react";

class CreatContent extends Component {
    render() {
        return (
            <div>
                <h2>CreatContent</h2>
                <form action="/create_process" method="post" 
                    onSubmit={function(e){
                        e.preventDefault();
                        this.props.onSubmit(
                            e.target.title.value,
                            e.target.desc.value,
                        );
                    }.bind(this)}
                >
                    <p>
                        <b>title</b>
                        <input type="text" name="title" placeholder="title"></input>
                    </p>
                    <p>
                        <b>title</b>
                        <textarea name="desc" placeholder="description"></textarea>
                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>
                </form>
            </div>
        )
    }
}

export default CreatContent;