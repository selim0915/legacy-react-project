import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingSpinner from "../componets/LoadingSpinner";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useToast from "../../../../hooks/toast";

const ShowPage = () => {
    const [addToast] = useToast();
    const { id } = useParams();

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [timer, setTimer] = useState(true);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const [error, setError] = useState('');

    const getPost = (id) => {
        axios.get(`http://localhost:3001/posts/${id}`)
        .then((res) => {
            setPost(res.data);
            setLoading(false);
        }).catch((e) => {
            setError('not DB connection');
            addToast({
                text: '1건 조회 디비 연결 오류', 
                type: 'danger'
            });
            setLoading(false);
        });
    };

    const printDate = (timestamp) => {
        return new Date(timestamp).toLocaleString("sv-SE");
    }

    useEffect(() => {
        getPost(id);
    },[]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prev => prev+1)
        }, 1000);

        return () => { // 마지막에 나갈때 
            clearInterval(interval);
        }
    },[]);

    if(loading){
        return <LoadingSpinner />
    }

    if(error){
        return <div>error</div>
    }

    return(
        <>
            <div className="d-flex">
                <h2 className="flex-grow-1">
                    {post.title} ({timer > 1 ? timer : 1}초)
                </h2>
                <div>
                    {/* // TODO 목록버튼 만들기 */}
                    {!isLoggedIn && <Link className="btn btn-primary" to={`/blog/${id}/edit`}>수정</Link>}
                </div>
            </div>
            <p>
                {post.body}
            </p>
            <hr />
            <small className="text-muted me-5">
                등록일시 {printDate(post.createdAt)}
            </small>
            <small className="text-muted">
                수정일시 {printDate(post.updatedAt)}
            </small>
        </>
    )
};

export default ShowPage;