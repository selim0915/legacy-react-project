import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../componets/Card";

const ListPage = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        axios.get('http://localhost:3001/posts').then((res) => {
            setPosts(res.data);
        })
    }

    useEffect(() => {
        getPosts();
    }, []); // 처음실행할때, 삭제 될때만 사용되는 함수

    return(
        <>
            <h1>
                Blogs
            </h1>
            {posts.map((post) => {
                return (
                    <Card key={post.id} title={post.title} body={post.body}>
                        <button>btn</button>
                    </Card>
                );
            })}
        </>
    )
}
export default ListPage;