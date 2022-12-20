import React, { Component, useState } from "react";

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

    return (
        <>
            <p>{count}</p>
            <hr/>
            <button onClick={() => setCount(count+1)}>추천</button>
            <button onClick={() => setCount(count-1)}>비추천</button>
            <input placeholder="Email" value={email} onChange={updateEmail} />
        </>
    );
};
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