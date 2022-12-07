import { Component } from "react";

class R015_Map extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var Map_Arr = [3,2,8,8]

        let Map_newArr = Map_Arr.map(x => x)
        console.log("1. Map_newArr: "+ Map_newArr);

        let Map_mulitiArr = Map_Arr.map(x => x*2);
        console.log('2. Map_mulitiArr: '+ Map_mulitiArr);

        var ObjArray = [{key: 'reacct', value: '200'},
                        {key: '리액트', vlaue: 'TwoHundred'}];

        let Map_ObjArr = ObjArray.map((obj, index) => {
            console.log((index+3)+ '. '+JSON.stringify(obj));

            var Obj ={};
            Obj[obj.key] = obj.value;
            return Obj;
        });
        console.log('5. Map_ObjArr'+JSON.stringify(Map_ObjArr));
    }

    render(){
        return(
            <h2>R015_Map</h2>
        )
    }
}

export default R015_Map;