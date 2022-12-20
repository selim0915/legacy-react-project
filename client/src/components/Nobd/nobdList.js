import { Component } from "react";

class nobdList extends Component {
    state = {
        count: 0
    };

    modify = n => {
        this.setState({
            count: n
        });
    };

    render(){
        const {count } = this.state;
        return (
            <div>
                <h2>공지사항</h2>
                <p>{count}</p>
                <button onClick={() => this.modify(count+1)}>btn</button>
            </div>
        )
    }
}

export default nobdList;