import React, { Component } from "react";
import { Button, PopoverBody, PopoverHeader, Progress, UncontrolledPopover } from "reactstrap";

class R052_ReactstrapProgress extends Component{
    constructor(props) {
        super(props);
        this.state = {progress:0}
    }

    componentDidMount(){
        this.progress()
    }

    progress = () => {
        console.log("1.progress");
        if(this.state.progress !== 100){
            console.log("2 .progress if");
            setTimeout(function() {
                console.log("3. time ", this.state.progress);
                this.setState({progress: this.state.progress+1});
                this.progress();
            }.bind(this), 100);
        }else if(this.state.progress === 100){
            setTimeout(function() {
                console.log("4. 초기화 ", this.state.progress);
                this.setState({progress: 0});
                this.progress();
            }.bind(this), 100);
        }
    }

    render() {
        return(
            <>
                <Progress color="info" value={this.state.progress}>
                    {this.state.progress}%
                </Progress>
                <br/>
                <Progress multi>
                    <Progress bar color="warning" value="25">25%</Progress>
                    <Progress bar color="success" value="35">35</Progress>
                    <Progress bar value="15">Meh</Progress>
                    <Progress bar color="danger" value="25">Look out</Progress>
                </Progress>
            </>
        )
    }
}

export default R052_ReactstrapProgress;