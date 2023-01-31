import { Axios } from "axios";
import React, { Component, useEffect, useState } from "react";

function LikeContent() {
    var [funcShow, setFuncShow] = useState(true);
    var [classShow, setClassShow] = useState(true);

    return (
        <>
            <h2>추천/비추천</h2>
            <button value="remove func"
                onClick={function(){
                    setFuncShow(false);
                }}>remove func
            </button>
            <button value="remove comp"
                onClick={function(){
                    setClassShow(false);
                }}>remove comp
            </button>
            {funcShow ? <NobdList initNumber={2}></NobdList> : null}
            {classShow ? <NobdListTwo initNumber={2}></NobdListTwo> : null}
        </>
    )
}
export default LikeContent;

var classStyle = 'color:red';
var classStyle2= 'color:green';
var funId = 0;

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
    componentWillUnmount(){
        // 자원해제, 컴포넌트 사라질때 타는 함수
        console.log("%c8. class => componentWillUnmount", classStyle);
    }

    render(){
        console.log("%c2.6. class => render", classStyle);
        return (
            <>
                <hr/>
                <p>{this.state.count}</p>
                <p>{this.state.data}</p>
                <button type="button" value="random"
                    onClick={function(){
                        this.setState(
                            {
                                count: Math.random()
                            }
                        )
                    }.bind(this)}>랜덤숫자
                </button>
                <button type="button" value="date"
                    onClick={function(){
                        this.setState(
                            {
                                data: (new Date()).toString()
                            }
                        )
                    }.bind(this)}>최근날짜
                </button>
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
    // const onClickOutside = () => {
    //     console.log("serim");
    // }
    //const ref = ClickOutside(onClickOutside);
    const name = UseInput("");
    //console.log("name", name);
    const {payload, loading, error} = Usefetch("https://www.tutorialkart.com/sample_image.jpg");

    useEffect(function(){
        // 보통 초기화 문법 작성
        // componentDidMount & componentDidUpdate 와 같은 시점에 조회된다 할 수 있음
        console.log("%cfunc => useEffect (componentDidMount) A"+(++funId), classStyle2);
        document.title = number;
        return function cleanup(){
            console.log("%cfunc => useEffect return (componentWillUnmount) A"+(++funId), classStyle2);
            // 보통 자원해제 문법 작성
        }
        // useEffect -> render3 -> useEffect return -> useEffect
        // useEffect에 return를 통해 코드를 입력하면 한번 들려갔다 옴, 보통 clean up 기능이라고 활용 함
    }, [number]); // 맨 처음 조회될떄만 호출되도록 하는 useEffect, 컴포넌트가 소멸될 때도 실행 됨

    useEffect(function(){
        console.log("%cfunc => useEffect number(componentDidMount & componentDidUpdate) A"+(++funId), classStyle2);
        document.title = number;
    }, [number]); // []에 적힌 값이 바뀔때만 useEffect 조회

    // useEffect 복수 입력 가능
    useEffect(function(){
        console.log("%cfunc => useEffect _date(componentDidMount & componentDidUpdate) B"+(++funId), classStyle2);
        document.title = _date;
    }, [_date]); // []에 적힌 값이 바뀔때만 useEffect 조회

    console.log("%cfunc => render"+(++funId), classStyle2);

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
                {!loading && payload && <img alt="img" src={payload.file}/>}
            </div>
            
            <hr/>

            <p>{number}</p>
            <p>{_date}</p>
            <button value="random"
                onClick={function(){
                    setNumber(Math.random());
                }}>랜덤숫자
            </button>
            <button value="date"
                onClick={function(){
                    setDate((new Date().toString()));
                }}>최신날짜
            </button>
            <button onClick={() => setNumber(number+1)}>추천</button>
            <button onClick={() => setNumber(number-1)}>비추천</button>
            <input placeholder="Email" value={email} onChange={updateEmail} />
        </>
    );
};

// function ClickOutside (fn) {
//     const ref = createRef();
//     const handleClick = e => {
//         //console.log(ref.current.contains(e.target));
//         if(!ref.current.contains(e.target)){
//             //console.log("clicked outside");
//             fn();
//         }
//     };

//     useEffect(() => {
//         document.addEventListener("click", handleClick);
//     }, [])

//     return ref;
// }

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