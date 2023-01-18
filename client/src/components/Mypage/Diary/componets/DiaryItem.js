import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

const DiaryItem = ({
  id,
  author,
  content,
  emotion,
  createdAt,
  onRemove,
  onEdit,
}) => {
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
        onRemove(id);
    }

    const handleREdit = () => {
        if(localContent.length < 5){
            localContentInput.current.focus();
            return;
        }

        if(window.confirm(`${id}번째 일기를 수정 하시겠습니까?`)){
            onEdit(id, localContent);
            toggleIsEdit();
        }
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
                            class="form-control mt-2"
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

export default DiaryItem;