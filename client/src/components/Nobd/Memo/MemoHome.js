import React, { useContext, useEffect, useState } from "react";
import { MemoStateContext } from "../../App";
import MemoButton from "./MemoButton";
import MemoHeader from "./MemoHeader";
import MemoList from "./MemoList";

const MemoHome = () =>{
    const memoList = useContext(MemoStateContext);

    const [data, setData] = useState([]);
    const [curDate, setCurDate] = useState(new Date());
    const headText = `${curDate.getFullYear()}년 ${curDate.getMonth()+1}월`;

    useEffect(()=>{
        if(memoList.length >= 1) {
            const firstDay = new Date(
                curDate.getFullYear(),
                curDate.getMonth(),
                1
            ).getTime();

            const lastDay = new Date(
                curDate.getFullYear(),
                curDate.getMonth() + 1,
                0,
                23,
                59,
                59
            ).getTime();

            setData(memoList.filter((it) => firstDay <= it.date && it.date <= lastDay))
        } else {
            setData([]);
        }
    },[memoList, curDate])

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