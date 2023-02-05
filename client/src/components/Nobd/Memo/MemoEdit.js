import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MemoStateContext } from "../../App";
import MemoEditor from "./MemoEditor";

const MemoEdit = () =>{
    const {id} = useParams();
    const [originData, setOriginData] = useState();
    const navigate = useNavigate();

    const memoList = useContext(MemoStateContext);

    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = `MEMO ${id} 수정`;
    },[id]);

    useEffect(() => {
        if(memoList.length >= 1){
            const targetMemo = memoList.find((it) => 
                parseInt(it.id) === parseInt(id)
            );
            
            if(targetMemo){
                setOriginData(targetMemo);
            }else{
                navigate("/memo", {replace: true});
            }
        }
    }, [id, memoList, navigate])

    return (
        <div>
            {originData && <MemoEditor isEdit={true} originData={originData} />}
        </div>
    )
}
export default MemoEdit;