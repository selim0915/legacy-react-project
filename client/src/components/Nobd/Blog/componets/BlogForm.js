import axios from "axios";
import prototypes from "prop-types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import useToast from "../../../../hooks/toast";
import LoadingSpinner from "./LoadingSpinner";

const BlogForm = ({ editing }) => {
    const [addToast] = useToast(); // const [addToast, ] = useToast();
    const navigate = useNavigate();
    const { id } = useParams();

    const [title, setTitle] = useState('');
    const [originalTitle, setoOiginalTitle] = useState('');
    const [body, setBody] = useState('');
    const [originalBody, setOiginalBody] = useState('');
    const [publish, setPublish] = useState(true);
    const [originalPublish, setOiginalPublish] = useState(false);
    const [titleError, setTitleError] = useState(false);
    const [bodyError, setBodyError] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const isEdited = () => {
        return title !== originalTitle || body !== originalBody || publish !== originalPublish;
    };

    const goBack = () => {
        if(editing){ // 수정
            navigate(`/blog/${id}`);
        }else{
            navigate('/blog');
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
                    navigate(`/blog/${id}`);
                    //setoOiginalTitle(res.data.title);
                    //setOiginalBody(res.data.body);
                }).catch((e) => {
                    setError('not DB connection');
                    addToast({
                        text: "수정시 오류가 발생하였습니다.",
                        type: "danger"
                    });
                    setLoading(false);
                });
            }else{ // 신규등록
                axios.post('http://localhost:3001/posts', {
                    title, // title: title,
                    body, //body: body
                    publish,
                    createdAt: Date.now(),
                    updatedAt: Date.now(),
                }).then(() => {
                    addToast({
                        text: "등록 되었습니다.",
                        type: "success"
                    });
                    navigate('/blog/admin')
                }).catch((e) => {
                    setError('not DB connection');
                    addToast({
                        text: "등록시 오류가 발생하였습니다.",
                        type: "danger"
                    });
                    setLoading(false);
                });;
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
            setLoading(false);
        }else{
            setLoading(false);
        }
    }, [id, editing]); // []: 디펜져싱

    if(loading) {
        return (
            <LoadingSpinner />
        );
    }
    
    if(error){
        return <div>error</div>
    }

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