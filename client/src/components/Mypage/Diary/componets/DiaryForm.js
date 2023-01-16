import { useState, useRef } from "react";
import prototypes from "prop-types";

const Diary = ({ onCreate }) =>{
    const authorInput = useRef(); // DOM요소를 current로 지정함.
    const contentInput = useRef(); // DOM요소를 current로 지정함.

    const [authorError, setAuthorError] = useState(false);
    const [contentError, setContentError] = useState(false);

    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 3,
        authorError: false,
        contentError: false,
    });

    const validateForm = () => {
        let vaildated = true;

        // CSS
        if(state.author.length < 1){
            setAuthorError(true);
            vaildated = false;
        }
        if(state.content.length < 5){
            setContentError(true);
            vaildated = false;
        }

        // Focus
        if(authorError){
            authorInput.current.focus();
            return;
        }
        if(contentError){
            contentInput.current.focus();
            return;
        }

        return vaildated;
    }

    const handleChangeSate = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = () => {
        setAuthorError(false);
        setContentError(false);

        if(validateForm()){
            onCreate(state.author, state.content, state.emotion);
            setState({
                author: "",
                content: "",
                emotion: 3,
            })
        }
    }

    return (
        <div>
            <div className="mb-3">
                <label className="form-label">점수</label><span>*</span>
                <select
                    className="form-select"
                    name="emotion"
                    value={state.emotion}
                    onChange={handleChangeSate}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">내용</label><span>*</span>
                <textarea 
                    className={`form-control ${contentError ? 'border-danger' : ''}`} 
                    rows="10"
                    name="content"
                    ref={contentInput}
                    value={state.content}
                    onChange={handleChangeSate}
                    placeholder="내용을 입력하세요. "
                    maxLength={500} />
                {contentError && <div className="text-danger">내용을 5자 이상 입력하세요.</div>}
            </div>
            <div className="mb-3">
                <label className="form-label">작성자</label><span>*</span>
                <input 
                    className={`form-control ${authorError ? 'border-danger' : ''}`} 
                    type="text"
                    name="author"
                    ref={authorInput}
                    value={state.author} 
                    onChange={handleChangeSate}
                    placeholder="작성자를 입력하세요."
                    maxLength={10} />
                {authorError && <div className="text-danger">작성자를 입력하세요.</div>}
            </div>
            <div className="mt-5">
                <button 
                    className="btn btn-primary btn-lg"
                    onClick={handleSubmit}>저장
                </button>
            </div>
        </div>
    )
}

Diary.prototypes = {
    onCreate: prototypes.func,
}

Diary.defaultProps = {
    onCreate: () => {},
}

export default Diary;