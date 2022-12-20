import { Axios } from "axios";
import { ReactDOM } from "react";
import React, { Component, createRef, useEffect, useState } from "react";

// **** React Hooks ****
const NobdList = () => { // 함수는 대문사 명시 필요.
    const [count, setCount] = useState(0);
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
    console.log("name", name);
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
            
            <p>{count}</p>
            <hr/>
            <button onClick={() => setCount(count+1)}>추천</button>
            <button onClick={() => setCount(count-1)}>비추천</button>
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
        } catch (error) {
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

export default NobdList;

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