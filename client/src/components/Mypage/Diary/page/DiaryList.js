import { useEffect, useMemo, useRef, useState } from "react";
import Swal from 'sweetalert2';
import DiaryForm from "../componets/DiaryForm";
import DiaryItem from "../componets/DiaryItem";
// https://jsonplaceholder.typicode.com/comments

const DiaryList = () => {
    const [data, setData] = useState([]);
    const dataId = useRef(0);

    const getData = async() => {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => {
            return response.json();
        }).catch();

        const initData = res.slice(0,20).map((item)=>{
            return {
                author: item.email,
                content: item.body,
                emotion: Math.floor(Math.random()*5)+1,
                createdAt: new Date().getTime(),
                id: dataId.current++,
            }
        })
        setData(initData);
    };

    useEffect(() => {
        getData();
    }, [])

    const onCreate = (author, content, emotion) => {
        const createdAt = new Date().getTime();

        const newItem = {
            id: dataId.current,
            author,
            content,
            emotion,
            createdAt,
        };
        dataId.current += 1;
        setData([newItem, ...data]);
    }

    const onRemove = (targetId) => {
        sweetalertDelete('삭제 하시겠습니까?', function() {
            const newDiaryList = data.filter((item) => item.id !== targetId);
            setData(newDiaryList);
        }.bind());
    }

    const onEdit = (targetId, newContent) => {
        setData(
            data.map((item) => item.id === targetId ? {...item, content: newContent} : item)
        )
    }

    const sweetalertDelete = (title, callbackFunc) => {
        Swal.fire({
            title: title,
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                'Deleted!',
                '삭제되었습니다.',
                'success'
                )
        }else{
            return false;
        }
        callbackFunc()
        })
    }

    const getDiaryAnalysis = useMemo(() => {
        const goodCount = data.filter((v) => v.emotion >= 3).length;
        const badCount = data.length - goodCount;
        const goodRatio = Math.round((goodCount/data.length)*100,2);

        return{goodCount, badCount, goodRatio};
    }, [data.length]); // [] 값이 바뀔때만 함수가 실행되게 됨 ... 길이가 바뀌지 않으면 계산식 실행되지 않음
    const {goodCount, badCount, goodRatio} = getDiaryAnalysis;

    return (
        <div>
            <h2 className="s_tit1">다이어리</h2>
            <div className="row">
                <div className="col" style={{"maxWidth": "400px"}}>
                    <DiaryForm onCreate={onCreate}/>
                </div>
                <div className="col" style={{"height": "640px", "overflowY": "auto"}}>
                    <div className="d-flex justify-content-between">
                        <div className="text-secondary mb-2">
                            전체 {data.length} 건
                        </div>
                        <div className="text-secondary mb-2">
                            3이상 {goodCount} 건, 3미만 {badCount} 건 ({goodRatio}/100%)
                        </div>
                    </div>
                    {data.map((item) => (
                            <DiaryItem key={item.id} {...item} onRemove={onRemove} onEdit={onEdit} />
                    ))}
                </div>
            </div>
        </div>
    )
}



export default DiaryList;