import { Component } from "react";

class R009_Es6 extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var jsString1 = '자바스크립트';
        var jsString2 = '입니다.\n다음줄';
        console.log(jsString1 + '추가문자' + jsString2 + '~');

        var es6String1 = 'ES6';
        var es6String2 = '입니다';
        console.log(`${es6String1} 문자열 ${es6String2} !! ____
다음줄`);

        var LongString = "ES6에 추가된 String 함수";
        console.log('startsWith: ' + LongString.startsWith("ES6에 추가"));
        console.log('endsWith: ' + LongString.endsWith("추가된"));
        console.log('includes: ' + LongString.includes("함수"));
    }

    render() {
        return (
            <h2>R009_Es6</h2>
        )
    }
}

export default R009_Es6;