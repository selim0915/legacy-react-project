import { Component } from "react";
import datatype from 'prop-types';

class R020_PropsObjVal extends Component{
    render() {
        let {
            ObjectJson
        } = this.props
        return (
            <div>
                {JSON.stringify(ObjectJson)}
            </div>
        )
    }
}

R020_PropsObjVal.protoTypes = {
    ObjectJson : datatype.shape({
        react: datatype.string,
        twohundred: datatype.number
    })
}

export default R020_PropsObjVal;