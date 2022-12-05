import { Component } from "react";

class R068_onMouseMove extends Component{
    MouseMove(tag) {
        console.log('TAG:'+tag);
    }

    render() {
        return(
            <>
                <div onMouseMove={e => this.MouseMove("div")}>
                    <h3>R068_onMouseMove</h3>
                </div>

                <input type="text" onMouseDown={e => this.MouseMove("input")}/>
                <select onMouseDown={e => this.MouseMove("select")}>
                    <option value="resct">resct</option>
                    <option value="200">200</option>
                </select>
            </>
        )
    }
}

export default R068_onMouseMove;