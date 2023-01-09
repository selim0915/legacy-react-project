import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingSpinner from "../componets/LoadingSpinner";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ShowPage = () => {
    const { id } = useParams();

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const getPost = (id) => {
        axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
            setPost(res.data);
            setLoading(false);
        });
    };

    const printDate = (timestamp) => {
        return new Date(timestamp).toLocaleString("sv-SE");
    }

    useEffect(() => {
        getPost(id);
    },[]);

    if(loading){
        return <LoadingSpinner />
    }

    return(
        <>
            <div className="d-flex">
                <h2 className="flex-grow-1">
                    {post.title}
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