import React, { Component, useState } from "react";

// **** React Hooks ****
const NobdList = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            {count}
            <button onClick={() => setCount(count+1)}>btn</button>
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