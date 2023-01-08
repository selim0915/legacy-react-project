import axios from "axios";
import { bool } from "prop-types";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Card from "../componets/Card";
import LoadingSpinner from "../componets/LoadingSpinner";

const BlogList = ({ isAdmin }) => {
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

    useEffect(() => {
        getPosts();
    }, []); // 처음실행할때, 삭제 될때만 사용되는 함수

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

        return posts.filter((post) => {
            return isAdmin || post.publish // true 인것만 보이게
        }).map((post) => {
            return (
                <Card
                    key={post.id} 
                    title={post.title} 
                    body={post.body}
                    onClick={() => {history.push(`/blog/${post.id}`)}}>
                    {isAdmin ? (<div>
                        <button 
                            className="btn btn-sm btn-danger"
                            onClick={(e) => {deleteBlog(e, post.id)}}
                        >삭제</button>
                    </div>) : null}
                </Card>
            )
        })
    }

    return (
        <div>
            {renderBlogList()}
        </div>
    );
}

BlogList.propTypes = {
    isAdmin: bool,
}

BlogList.defaultProps = {
    isAdmin: false,
}

export default BlogList;