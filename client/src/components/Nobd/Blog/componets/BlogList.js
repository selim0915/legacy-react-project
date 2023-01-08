import axios from "axios";
import { bool } from "prop-types";
import { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import Card from "../componets/Card";
import LoadingSpinner from "../componets/LoadingSpinner";
import Pagination from "../componets/Pagination";

const BlogList = ({ isAdmin }) => {
    const history = useHistory();
    const location = useLocation(); // url ? 뒤에 있는 파라미터를 가져올 수 있음
    const params = new URLSearchParams(location.search); // 뒤에 있는 값을 키, 값으로 가져올 수 있음
    const pageParam = params.get("page");
    const limit = 3; // 한번에 보여줄 게시글 갯수

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfPosts, setNumberOfPosts] = useState(0);
    const [numberOfPages, setNumberOfPages] = useState(0);
    
    useEffect(() => {
        setNumberOfPages(Math.ceil(numberOfPosts/limit));
    }, [numberOfPosts]); // [numberOfPosts] : 해당 변수가 바뀔떄 마다 호출되는 함수

    const onClickPageButton = (page) => {
        history.push(`${location.pathname}?page=${page}`)
    };

    const getPosts = useCallback((page=1) => { // page 값 없으면 1
        setCurrentPage(page);

        let params = {
            _page: page,
            _limit: limit,
            _sort: 'id',
            _order: 'desc'
        }

        if(!isAdmin){
            params = {...params, publish: true}
        }

        // axios.get(`http://localhost:3001/posts?_page=${page}&_limit=5&_sort=id&_order=desc`, {
        axios.get(`http://localhost:3001/posts`, {
            params // params: params 키, 값 명이 같으면 생략 가능!
        }).then((res) => {
            setPosts(res.data);
            setLoading(false);
            setNumberOfPosts(res.headers['x-total-count']);
        });
    }, [isAdmin]); // []안에 값이 바뀔때 함수가 호출되게 ... useCallback 일반 함수에서 []를 사용할 수 있게 해줌
    
    useEffect(() => {
        setCurrentPage(parseInt(pageParam) || 1);
        getPosts(parseInt(pageParam) || 1);
    }, [pageParam, getPosts]); // [] : 처음실행할때, 삭제 될때만 호출되는 함수

    const deleteBlog = (e, id) => {
        e.stopPropagation();

        axios.delete(`http://localhost:3001/posts/${id}`).then(() => {
            setPosts(PrevPosts => PrevPosts.filter(post => post.id !== id));
        });
    }
    
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

    const renderBlogList = () => {
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
            {numberOfPages > 1 && <Pagination 
                currentPage={currentPage} 
                numberOfPages={numberOfPages} 
                onClick={onClickPageButton}/>
            }
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