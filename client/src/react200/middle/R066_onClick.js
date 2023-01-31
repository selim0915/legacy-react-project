import { Component } from "react";

class R066_onClick extends Component{
    buttonClick = (param) => {
        if(typeof param !== 'string') param = "Click a"
        console.log('param : '+param);
    }

    render() {
        return(
            <>
                <button onClick={e => this.buttonClick("Click button")}>btn</button>

                <div onClick={e => this.buttonClick("Click div")}>click div</div>

                <a href="javascript:" onClick={this.buttonClick}>click a</a>
            </>
        )
    }
}

export default R066_onClick;