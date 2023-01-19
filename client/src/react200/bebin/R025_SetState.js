import { Component } from "react";

class R025_SetState extends Component {
    constructor(props){
        super(props);
        this.state = {
            StateString: "react"
        }
    }

    stateChange = (flag) => {
        // this.state.StateString
        // 위 문법은 변수 값은 변경되지만 render()호출이 되지 않음으로 화면에는 이전 값인 것만 보인다
        if(flag == 'direct') this.state.StateString = '리액트1';
        if(flag == 'setstate') this.setState({StateString: '리액트2'});
    }

    render() {
        return(
            <div>
                <button onClick={(e)=> this.stateChange('direct' , e)}>direct</button>
                <button onClick={(e) => this.stateChange('setstate', e)}>setState</button>
                
                StateString : {this.state.StateString}
            </div>
        )
    }
}

export default R025_SetState;