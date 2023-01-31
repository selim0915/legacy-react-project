import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useRef, useState } from "react";
import Swal from 'sweetalert2';
import { DiaryDispatchContext, DiaryStateContext } from "../page/DiaryList";

const DiaryItem = ({
  id,
  author,
  content,
  emotion,
  createdAt,
}) => {
    // useEffect(() => {
    //     console.log(`${id}번째 렌더`);
    // });

    const diaryList = useContext(DiaryStateContext);
    console.log(diaryList); // 객체 가져올 수 있음 테스트

    const {onRemove, onEdit} = useContext(DiaryDispatchContext); 

    const [isEdit, setInEdit] = useState(false);
    const [localContent, setLocalContent] = useState(content);
    const localContentInput = useRef();

    const toggleIsEdit = () => {
        setInEdit(!isEdit);
    }

    const handleQuitEdit = () => {
        setInEdit(false);
        setLocalContent(content);
    }

    const handleRemove = () => {
        sweetalert('삭제 하시겠습니까?', function() {
            onRemove(id);
        }.bind());
    }

    const handleREdit = () => {
        if(localContent.length < 5){
            localContentInput.current.focus();
            return;
        }

        sweetalert(`${id}번\n수정 하시겠습니까?`, function() {
            onEdit(id, localContent);
            toggleIsEdit();
        }.bind());
    }

    const sweetalert = (title, callbackFunc) => {
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
                '완료',
                '처리 되었습니다.',
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
            <div className="p-3 mb-4 bg-white border" key={id}>
                <div className="d-flex justify-content-between">
                    <span className="text-primary">
                        <FontAwesomeIcon icon={faFaceSmile} className="me-1"/>
                        {emotion}
                    </span>
                    {isEdit
                        ? <div>
                            <button className="btn btn-sm btn-outline-primary" onClick={handleQuitEdit}>취소</button>
                            <button className="btn btn-sm btn-outline-primary" onClick={handleREdit}>저장</button>
                            </div>
                        : <div>
                            <button className="btn btn-sm btn-outline-primary" onClick={toggleIsEdit}>수정</button>
                            <button className="btn btn-sm btn-outline-primary" onClick={handleRemove}>삭제</button>
                        </div>}
                </div>
                <p className="lh-sm fs-5 text-break mb-0">
                    {isEdit 
                        ? <textarea 
                            className="form-control mt-2"
                            rows="3"
                            name="content"
                            ref={localContentInput}
                            value={localContent} 
                            onChange={(e) => setLocalContent(e.target.value)}
                            maxLength={500}></textarea> 
                        : content}
                </p>
                <div className="mt-1 text-black-50 font-italic">{author} | {new Date(createdAt).toLocaleString()}</div>
            </div>
        </div>
    )
}

export default React.memo(DiaryItem);