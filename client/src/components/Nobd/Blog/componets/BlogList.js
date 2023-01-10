import axios from "axios";
import prototypes from "prop-types";
import { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import Card from "../componets/Card";
import LoadingSpinner from "../componets/LoadingSpinner";
import Pagination from "../componets/Pagination";
import useToast from "../../../../hooks/toast";

const BlogList = ({ isAdmin }) => {
    const [addToast] = useToast(); // const [addToast, ] = useToast();
    const history = useHistory();
    const location = useLocation(); // url ? 뒤에 있는 파라미터를 가져올 수 있음
    const params = new URLSearchParams(location.search); // 뒤에 있는 값을 키, 값으로 가져올 수 있음
    const pageParam = params.get("page");
    const limit = 5; // 한번에 보여줄 게시글 갯수

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfPosts, setNumberOfPosts] = useState(0);
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [searchText, setSearchText] = useState('');
    const [error, setError] = useState('');
    
    useEffect(() => {
        setNumberOfPages(Math.ceil(numberOfPosts/limit));
    }, [numberOfPosts]); // [numberOfPosts] : 해당 변수가 바뀔떄 마다 호출되는 함수

    const onClickPageButton = (page) => {
        history.push(`${location.pathname}?page=${page}`)
        setCurrentPage(page);
        getPosts(page);
    };
    
    const getPosts = useCallback((page=1) => { // page 값 없으면 1
        let params = {
            _page: page,
            _limit: limit,
            _sort: 'id',
            _order: 'desc',
            title_like: searchText,
        }

        if(!isAdmin){
            params = {...params, publish: true}
        }

        // axios.get(`http://localhost:3001/posts?_page=${page}&_limit=5&_sort=id&_order=desc`, {
        axios.get(`http://localhost:3001/posts`, {
            params // params: params 키, 값 명이 같으면 생략 가능!
        }).then((res) => {
            setPosts(res.data);
            setNumberOfPosts(res.headers['x-total-count']);
            setLoading(false);
        }).catch((e) => {
            setError('not DB connection');
            addToast({
                text: '전체 조회 디비 연결 오류', 
                type: 'danger'
            });
            setLoading(false);
        });
    }, [isAdmin, searchText, addToast]); // []안에 값이 바뀔때 함수가 호출되게 ... useCallback 일반 함수에서 []를 사용할 수 있게 해줌
    
    useEffect(() => {
        setCurrentPage(parseInt(pageParam) || 1);
        getPosts(parseInt(pageParam) || 1);
    }, []); // [] : 처음실행할때, 삭제 될때만 호출되는 함수

    const deleteBlog = (e, id) => {
        e.stopPropagation();

        axios.delete(`http://localhost:3001/posts/${id}`)
        .then(() => {
            setPosts(PrevPosts => PrevPosts.filter(post => post.id !== id));
            addToast({
                text: '삭제 되었습니다.', 
                type: 'success'
            });
        }).catch((e) => {
            addToast({
                text: '삭제시 오류가 발생하였습니다.', 
                type: 'danger'
            });
        });
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
            );
        })
    }

    const onSearch = (e) => {
        if(e.key === "Enter"){
            history.push(`${location.pathname}?page=1`)
            setCurrentPage(1);
            getPosts(1);
        }
    }

    if(loading) {
        return (
            <LoadingSpinner />
        );
    }
    
    if(error){
        return <div>error</div>
    }

    return (
        <div> 
            <input 
                type="text"
                placeholder="검색어를 입력하세요."
                className="form-control"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyUp={onSearch}
            />
            <hr/>
            {posts.length === 0 
                ? <div>데이터가 없습니다.</div>
                : <>
                    {renderBlogList()}
                    {numberOfPages > 1 && <Pagination 
                    currentPage={currentPage} 
                    numberOfPages={numberOfPages} 
                    onClick={onClickPageButton}/>}
                </>
            }
            
        </div>
    );
}

BlogList.prototypes = {
    isAdmin: prototypes.bool,
}

BlogList.defaultProps = {
    isAdmin: false,
}

export default BlogList;