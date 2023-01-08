import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Card from "../componets/Card";
import LoadingSpinner from "../componets/LoadingSpinner";

const ListPage = () => {
    const history = useHistory();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPosts = () => {
        axios.get('http://localhost:3001/posts').then((res) => {
            setPosts(res.data);
            setLoading(false);
        });
    }

    const deleteBlog = (e, id) => {
        e.stopPropagation();

        axios.delete(`http://localhost:3001/posts/${id}`).then(() => {
            setPosts(PrevPosts => PrevPosts.filter(post => post.id !== id));
        });
    }

    const renderBlogList = () => {
        if(loading) {
            return (
                <LoadingSpinner />
            );
        }

        if(posts.length === 0){
            return (
                <div>데이터가 없습니다.</div>
            )
        }

        return posts.map((post) => {
            return (
                <Card
                    key={post.id} 
                    title={post.title} 
                    body={post.body} 
                    onClick={() => {history.push(`/blog/${post.id}`)}}>
                    <div>
                        <button 
                            className="btn btn-sm btn-danger"
                            onClick={(e) => {deleteBlog(e, post.id)}}
                        >삭제</button>
                    </div>
                </Card>
            )
        })
    }

    useEffect(() => {
        getPosts();
    }, []); // 처음실행할때, 삭제 될때만 사용되는 함수

    return(
        <>
            <div className="d-flex justify-content-between">
                <h1 className="mb-3">
                    Blogs
                </h1>
                <div>
                    <Link className="sch_bt2 wi_au" to="/blog/create">신규등록</Link>
                </div>
            </div>
            {renderBlogList()}
        </>
    )
}
export default ListPage;