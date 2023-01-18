import { useRef, useState } from "react";
import Swal from 'sweetalert2';
import DiaryForm from "../componets/DiaryForm";
import DiaryItem from "../componets/DiaryItem";

const DiaryList = () => {
    const [data, setData] = useState([]);
    const dataId = useRef(0);

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

    return (
        <div>
            <h2 className="s_tit1">다이어리</h2>
            <div className="row">
                <div className="col" style={{"maxWidth": "400px"}}>
                    <DiaryForm onCreate={onCreate}/>
                </div>
                <div className="col" style={{"height": "640px", "overflowY": "auto"}}>
                    <div className="text-secondary mb-2">전체 {data.length}건</div>
                    {data.map((item) => (
                            <DiaryItem key={item.id} {...item} onRemove={onRemove} onEdit={onEdit} />
                    ))}
                </div>
            </div>
        </div>
    )
}



export default DiaryList;