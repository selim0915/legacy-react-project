import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MemoButton from "./MemoButton";
import MemoItem from "./MemoItem";

const sortOptionList = [
    {value:"lastst", name:"최신순"},
    {value:"oldest", name:"오래된순"},
]

const filterOptionList = [
    {value:"all",   name:"전체"},
    {value:"good",  name:"좋은날"},
    {value:"bad",   name:"나쁜날"},
]

const ControlMenu = React.memo(({ value, onChange, optionList }) => { // 고착컴포넌트 prop가 값이 바뀌지 않으면 렌더링 되지 않게 해줌
    return (
        <select className="memoControlMenu" value={value} onChange={(e) => onChange(e.target.value)}>
            {optionList.map((it, idx) => <option key={idx} value={it.value}>{it.name}</option>)}
        </select>
    )
});

const MemoList = ({ memoList }) => {
    const navigate = useNavigate();
    const [sortType, setSortType] = useState('lastst');
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = 'MEMO 목록';
    },[]);

    const getProcessMemoList = () => {
        const filterCallback = (item) => {
            if(filter === "good"){
                return parseInt(item.emotion) <= 3;
            }else{
                return parseInt(item.emotion) > 3;
            }
        }
        const compare = (a,b) => {
            if(sortType === "lastst"){
                return parseInt(b.date) - parseInt(a.date);
            }else{
                return parseInt(a.date) - parseInt(b.date);
            }
        }
        const copyList = JSON.parse(JSON.stringify(memoList));
        const filteredList = filter === 'all' ? copyList : copyList.filter((it) => filterCallback(it));
        const sortedList = filteredList.sort(compare);

        return sortedList;
    }

    return (
        <div className="MemoList">
            <div className="menu-warpper">
                <div className="left_col">
                    <ControlMenu value={sortType} onChange={setSortType} optionList={sortOptionList} />
                    <ControlMenu value={filter} onChange={setFilter} optionList={filterOptionList} />
                </div>
                <div className="right_col">
                    <MemoButton type="positive" text={"새 메모"} onClick={() => navigate("/memo/new")} />
                </div>
            </div>

            {getProcessMemoList().map((it) => <MemoItem key={it.id} {...it}/>)}
        </div>
    )
}

MemoList.defaultProps = {
    memoList: [],
}

export default MemoList;