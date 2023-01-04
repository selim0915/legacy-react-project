import axios from "axios";
import { useState, useEffect } from "react";

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
            <h2>
                ListPage
            </h2>
        </>
    )
}
export default ListPage;