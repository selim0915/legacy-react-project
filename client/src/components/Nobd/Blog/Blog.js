import React, { Component, Fragment, useState } from "react";

function Blog() {
    const [number, setNumber] = useState(1);

    const double = () => {
        //const doubleNumber = number * 2;

        // 이전 값을 활용하여 값을 세팅하는 방법
        setNumber((number) => number * 2); // 1줄작성
        setNumber((number) => { // 2줄작성
            return number * 2
        });
    };

    return (
        // <Fragment></Fragment>와 <></>는 같다
        <>
            <div>{number}</div>
            <button className="btn btn-primary" onClick={double}>submit</button>
        </>
    )
}

export default Blog;