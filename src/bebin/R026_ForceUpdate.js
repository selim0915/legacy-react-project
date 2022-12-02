import { Component } from "react";

class R026_ForceUpdate extends Component {
    constructor(props){
        super(props);
        this.state = {
            StateString: "react"
        }
    }

    stateChange = (flag) => {
        this.state.StateString = '리액트1';
        this.forceUpdate();
    }

    render() {
        return(
            <div>
                <button onClick={(e)=> this.stateChange('direct' , e)}>direct</button>
                
                StateString : {this.state.StateString}
            </div>
        )
    }
}

export default R026_ForceUpdate;