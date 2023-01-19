import React, { useEffect, useState } from "react";

// 1) React.memo, areEqual를 사용한 고착화 된 렌더링 제어
// 객체인 경우 완벽한 제어 가능..
const CounterA = React.memo(({count}) => {
    useEffect(() => {
        console.log(`count A ${count}`);
    });
    return <div>{count}</div>
});

const CounterB = ({obj}) => {
    useEffect(() => {
        console.log(`count B ${obj.count}`);
    });
    return <div>{obj.count}</div>
};
const areEqual = (prevProps, nextProps) => {
    if(prevProps.obj.count === nextProps.obj.count){
        return true;
    }
    return false;
};
const MemeizedCounterB = React.memo(CounterB, areEqual)

const OptimizeText = () => {
    const [count, setCount] = useState(1);
    const [obj, setObj] = useState({
        count: 1,
    });

    return (
        <div>
            OptimizeText
            <div>
                count A
                <CounterA count={count} />
                <button onClick={() => setCount(count)}>A button</button>
            </div>
            <div>
                <MemeizedCounterB obj={obj} />
                <button onClick={() => setObj({count: obj.count})}>B button</button>
            </div>
        </div>
    )
}
export default OptimizeText;

// 1) React.memo를 사용한 렌더링 제어
// const TextView = React.memo(({text}) => {
//     useEffect(() => {
//         console.log(`update text: ${text}`)
//     });
//     return <div>{text}</div>
// });

// const CountView = React.memo(({count}) => {
//     useEffect(() => {
//         console.log(`update count: ${count}`)
//     });
//     return <div>{count}</div>
// });

// const OptimizeText = () => {
//     const [count, setCount] = useState(1);
//     const [text, setText] = useState("");

//     return (
//         <div>
//             OptimizeText
//             <div>
//                 count
//                 <CountView count={count} />
//                 <button onClick={() => setCount(count+1)}>+</button>
//             </div>
//             <div>
//                 <TextView text={text} />
//                 <input type="text" onChange={(e) => setText(e.target.value)} />
//             </div>
//         </div>
//     )
// }
// export default OptimizeText;