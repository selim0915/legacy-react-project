import { Component } from "react";

class R013_ArrowFunction extends Component{
    constructor(props){
        super(props);
        this.state = {
            arrowFuc: 'react200',
            num: 3
        };
    }

    componentDidMount() {
        Function1(1);
        this.Function2(1,1);
        this.Function3(1,3);
        this.Function4();
        this.Function5(0,2,3);

        // es5
        function Function1(num1) {
            return console.log('1. '+ num1);
        }
    }

    // new
    Function2 = (num1, num2) => {
        let num3 = num1 + num2;
        console.log('2. '+ num3 + ', '+this.state.arrowFuc);
    }

    Function3() {
        var this_bind = this;
        setTimeout(function() {
            console.log('3. '+this_bind.state.num);
            console.log('3. '+this.state.arrowFuc);
        }, 100);
    }

    Function4() {
        setTimeout(function(){
            console.log('4. '+this.state.arrowFuc);
        }.bind(this), 100);
    }

    Function5 = (num1, num2, num3) => {
        const num4 = num1+num2+num3;
        setTimeout(() => {
            console.log('5. '+num4+','+ this.state.arrowFuc);
        }, 100);
    }

    render(){
        return(
            <h2>R013_ArrowFunction</h2>
        )
    }
}

export default R013_ArrowFunction;