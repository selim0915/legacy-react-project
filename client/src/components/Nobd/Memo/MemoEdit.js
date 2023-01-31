import { useSearchParams, useNavigate } from "react-router-dom";

const MemoEdit = () =>{
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const id = searchParams.get("id");
    const mode = searchParams.get("mode");

    return (
        <div>
            MemoEdit
            {id}
            {mode}
            <button onClick={()=>setSearchParams({who: "srwoo"})}>바꾸기</button>
            <button onClick={()=>navigate("/")}>메인으로 보내기</button>
            <button onClick={()=>navigate(-1)}>뒤로 보내기</button>
        </div>
    )
}
export default MemoEdit;