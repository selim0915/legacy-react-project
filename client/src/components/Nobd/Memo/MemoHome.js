import React, { useEffect, useState } from "react";
import MemoButton from "./MemoButton";
import MemoHeader from "./MemoHeader";
import MemoList from "./MemoList";

const dumpData = [
    {
        id:1,
        emotion:1,
        content:"오늘의일기1",
        date: 1675264716343,
    },
    {
        id:2,
        emotion:2,
        content:"오늘의일기2",
        date: 1675264716344,
    },
    {
        id:3,
        emotion:3,
        content:"오늘의일기3",
        date: 1675264716345,
    },
    {
        id:4,
        emotion:4,
        content:"오늘의일기4",
        date: 1675264716346,
    },
    {
        id:5,
        emotion:5,
        content:"오늘의일기5",
        date: 1675264716347,
    }
]

const MemoHome = () =>{
    const [data, setData] = useState([]);
    const [curDate, setCurDate] = useState(new Date());
    const headText = `${curDate.getFullYear()}년 ${curDate.getMonth()+1}월`;
    const memoList = dumpData;

    useEffect(()=>{
        if(memoList.length >= 1) {
            const firstDay = new Date(
                curDate.getFullYear(),
                curDate.getMonth(),
                1
            ).getTime();

            const lastDay = new Date(
                curDate.getFullYear(),
                curDate.getMonth()+1,
                0
            ).getTime();

            setData(memoList.filter((it=>firstDay <= it.date && it.date <= lastDay)))
        }
    },[curDate, memoList])

    const increaseMonth = () => {
        setCurDate(new Date(curDate.getFullYear(), curDate.getMonth()+1, curDate.getDate()));
    }

    const decreaseMonth = () => {
        setCurDate(new Date(curDate.getFullYear(), curDate.getMonth()-1, curDate.getDate()));
    }

    return (
        <div>
            <MemoHeader 
                headText={headText} 
                leftChild={<MemoButton text="<" onClick={decreaseMonth}/>}
                rightChild={<MemoButton text=">" onClick={increaseMonth}/>}/>

            <MemoList memoList={data} />
        </div>
    )
}
export default MemoHome;