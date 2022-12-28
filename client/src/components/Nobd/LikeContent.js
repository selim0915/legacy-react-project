import { Axios } from "axios";
import React, { Component, createRef, useEffect, useState } from "react";

class LikeContent extends Component {
    render(){
        return (
            <>
                <h2>추천/비추천</h2>
                <NobdList initNumber={2}></NobdList>
                <NobdListTwo initNumber={2}></NobdListTwo>
            </>
        )
    }
}
export default LikeContent;

var classStyle = 'color:red';
class NobdListTwo extends Component {
    state = {
        count: this.props.initNumber,
        data: (new Date()).toString()
    }

    componentWillMount(){
        console.log("%c1. class => componentWillMount", classStyle);
    }
    componentDidMount(){
        console.log("%c3. class => componentDidMount", classStyle);
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("%c4. class => shouldComponentUpdate", classStyle);
        return true;
        // shouldComponentUpdate가 true면 render 호출
        // fasle 면 shouldComponentUpdate 내부 호출
        // 참고 client\src\components\Nobd\Content.js
    }
    componentWillUpdate(nextProps, nextState){
        console.log("%c5. class => componentWillUpdate", classStyle);
    }
    componentDidUpdate(nextProps, nextState){
        console.log("%c7. class => componentDidUpdate", classStyle);
    }
    render(){
        console.log("%c2.6. class => render", classStyle);
        return (
            <>
                <hr/>
                <p>{this.state.count}</p>
                <p>{this.state.data}</p>
                <input type="button" value="random"
                    onClick={function(){
                        this.setState(
                            {
                                count: Math.random()
                            }
                        )
                    }.bind(this)}>
                </input>
            </>
        )
    }
}

// **** React Hooks ****
const NobdList = (props) => { // 함수는 대문사 명시 필요.
    let numberState = useState(props.initNumber);
    let number = numberState[0];
    let setNumber = numberState[1];
    //let [number, setNumber] = useState(props.initNumber); // 위에 45, 46 라인과 같은 말

    let dateState = useState((new Date()).toString());
    let _date = dateState[0];
    let setDate = dateState[1];

    const [email, setEmail] = useState("");
    const updateEmail = e => {
        const {
            target : {value}
        } = e;
        setEmail(value);
    }
    const onClickOutside = () => {
        console.log("serim");
    }
    //const ref = ClickOutside(onClickOutside);
    const name = UseInput("");
    //console.log("name", name);
    const {payload, loading, error} = Usefetch("https://www.tutorialkart.com/sample_image.jpg");

    return (
        <>
            {/* <div ref={ref}>
                <h1>List</h1>
                <h2>popup</h2>
            </div> */}

            <div>
                <input {...name} placeholder="what your name" />
                <br/>
                {loading && <span>loding</span>}
                {!loading && error && <span>error</span>}
                {!loading && payload && <img src={payload.file}/>}
            </div>
            
            <hr/>
            <p>{number}</p>
            <p>{_date}</p>
            <button onClick={() => setNumber(number+1)}>추천</button>
            <button onClick={() => setNumber(number-1)}>비추천</button>
            <button 
                onClick={function(){
                    setDate((new Date().toString()));
                }.bind(this)}>최신날짜
            </button>
            <input placeholder="Email" value={email} onChange={updateEmail} />
        </>
    );
};

function ClickOutside (fn) {
    const ref = createRef();
    const handleClick = e => {
        //console.log(ref.current.contains(e.target));
        if(!ref.current.contains(e.target)){
            //console.log("clicked outside");
            fn();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);
    }, [])

    return ref;
}

function UseInput(defaultValue){
    const [value, setValue] = useState(defaultValue);

    const onChange = e => {
        const {
            target: {value}
        } = e;
        setValue(value);
    };

    return {value, onChange};
}

function Usefetch(url) {
    const [payload, setPayload] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const callUrl = async () => {
        try {
            const {data} = await Axios.get(url);
            //throw error
            setPayload(data);
        } catch {
            setError("error!");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        callUrl();
    }, []);

    return {payload, loading, error}
}


// **** React ****
// class nobdList extends Component {
// state = {
    //     count: 0
    // };
    
    // modify = n => {
        //     this.setState({
    //         count: n
    //     });
    // };

    // render(){
    //     const {count } = this.state;
    //     return (
    //         <div>
    //             <h2>공지사항</h2>
    //             <p>{count}</p>
    //             <button onClick={() => this.modify(count+1)}>btn</button>
    //         </div>
    //     )
    // }
//}
//export default nobdList;