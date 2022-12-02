import { Component } from "react";

class R019_propsBoolean extends Component{
    render() {
        let {
            BooleanTrueFalse
        } = this.props
        return(
            <div>
                {BooleanTrueFalse ? '2. ' : '1. '}
                {BooleanTrueFalse.toString()}
            </div>
        )
    }
}

export default R019_propsBoolean;