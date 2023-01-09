import axios from "axios";
import prototypes from "prop-types";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router";

const BlogForm = ({ editing }) => {
    const history = useHistory();
    const { id } = useParams();

    const [title, setTitle] = useState('');
    const [originalTitle, setoOiginalTitle] = useState('');
    const [body, setBody] = useState('');
    const [originalBody, setOiginalBody] = useState('');
    const [publish, setPublish] = useState(true);
    const [originalPublish, setOiginalPublish] = useState(false);
    const [titleError, setTitleError] = useState(false);
    const [bodyError, setBodyError] = useState(false);

    const isEdited = () => {
        return title !== originalTitle || body !== originalBody || publish !== originalPublish;
    };

    const goBack = () => {
        if(editing){ // 수정
            history.push(`/blog/${id}`);
        }else{
            history.push('/blog');
        }
    }

    const onChangePublish = (e) => {
        setPublish(e.target.checked);
    }

    const validateForm = () => {
        let vaildated =true;

        if(title === ''){
            setTitleError(true);
            vaildated = false;
        }

        if(body === ''){
            setBodyError(true);
            vaildated = false;
        }

        return vaildated;
    }

    const onSubmit = () => {
        setTitleError(false);
        setBodyError(false);

        if(validateForm()){
            if(editing){ // 수정
                axios.patch(`http://localhost:3001/posts/${id}`, {
                    title, // title: title, // 변수명이 같으면 생략 가능
                    body, //body: body
                    publish,
                    updatedAt: Date.now()
                }).then((res) => {
                    history.push(`/blog/${id}`);
                    //setoOiginalTitle(res.data.title);
                    //setOiginalBody(res.data.body);
                });
            }else{ // 신규등록
                axios.post('http://localhost:3001/posts', {
                    title, // title: title,
                    body, //body: body
                    publish,
                    createdAt: Date.now(),
                    updatedAt: Date.now(),
                }).then(() => history.push('/blog/admin'));
            }
        }
    };

    useEffect(() => {
        if(editing){ // 수정
            axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
                setTitle(res.data.title);
                setoOiginalTitle(res.data.title);
                setBody(res.data.body);
                setOiginalBody(res.data.body);
                setPublish(res.data.publish);
                setOiginalPublish(res.data.publish);
            });
        }
    }, [id, editing]); // []: 디펜져싱
    return (
        <>
            <h1 className="mb-5">
                {editing ? 'Blog 수정' : 'Blog 신규등록'}
            </h1>
            <div className="mb-3">
                <label className="form-label">제목</label>
                <input 
                    className={`form-control ${titleError ? 'border-danger' : ''}`}
                    value={title} 
                    onChange={(e) => {setTitle(e.target.value)}}/>
            </div>
            {titleError && <div className="text-danger">
                제목을 입력하세요.
            </div>}
            <div className="mb-3">
                <label className="form-label">내용</label>
                <textarea 
                    className={`form-control ${bodyError ? 'border-danger' : ''}`}
                    rows="5"
                    value={body} 
                    onChange={(e) => {setBody(e.target.value)}}
                />
            </div>
            {bodyError && <div className="text-danger">
                내용을 입력하세요.
            </div>}
            <div className="form-check mb-3">
                <input
                    id="is_publish" 
                    className="form-check-input"                                                                   
                    type="checkbox"
                    checked={publish}
                    onChange={onChangePublish}
                />
                <label htmlFor="is_publish" className="form-check-label">
                    publish
                </label>
            </div>
            <div>
                <button 
                    className="btn btn-primary"
                    onClick={goBack}
                >취소
                </button>
                <button 
                    className="btn btn-primary"
                    onClick={onSubmit}
                    disabled={editing && !isEdited()}
                >저장
                </button>
            </div>
        </>
    );
}

BlogForm.prototypes = {
    editing: prototypes.bool,
}

BlogForm.defaultProps = {
    editing: false,
}

export default BlogForm;