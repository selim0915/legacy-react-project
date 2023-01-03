import { Component } from "react";
// import { Redux } from 'redux';
import { Redux } from 'https://cdnjs.cloudflare.com/ajax/libs/redux/4.2.0/redux.js';

class ReduxEx extends Component {
    render(){
        const cssContainer = {
            border: "5px solid black",
            padding: "10px",
            margin: "10px"
        }

        function reducer(state, action){
            if (state === undefined) {
                return { color: 'yellow' }
            }
            var newState;
            if (action.type === 'CHANGE_COLOR') {
                newState = Object.assign({}, state, {color:action.color});
            }
            return newState;
        }
        var store = Redux.createStore(reducer);

        function red(){
            var state = store.getState();

            document.querySelector("#red").innerHTML =
                `<div style={cssContainer} id="componet_red" style="background-color:${state.color}>
                    <h1>red</h1>
                    <input type="button" value="fire" onClick="store.dispatch({type:'CHANGE_COLOR', color:'red'});"
                </div>`;
        }
        store.subscribe(red);
        red();

        function blue(){
            var state = store.getState();

            document.querySelector("#red").innerHTML =
                `<div style={cssContainer} id="componet_blue" style="background-color:${state.color}>
                    <h1>blue</h1>
                    <input type="button" value="fire" onClick="store.dispatch({type:'CHANGE_COLOR', color:'blue'});"
                </div>`;
        }
        store.subscribe(blue);
        blue();

        function green(){
            var state = store.getState();

            document.querySelector("#red").innerHTML =
                `<div style={cssContainer} id="componet_green" style="background-color:${state.color}>
                    <h1>green</h1>
                    <input type="button" value="fire" onClick="store.dispatch({type:'CHANGE_COLOR', color:'green'});"
                </div>`;
        }
        store.subscribe(green);
        green();

        return(
            <div>
                <div id="red"></div>
                <div id="blue"></div>
            </div>
        )
    }
}
export default ReduxEx;