import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getStringDate } from "../../../utils/date";
import { MemoStateContext } from "../../App";
import LoadingSpinner from "../Blog/componets/LoadingSpinner";
import MemoButton from "./MemoButton";
import MemoHeader from "./MemoHeader";
import { emotionList } from "../../../utils/emotion";

const MemoView = () =>{
    const {id} = useParams();
    const [data, setData] = useState();
    const navigate = useNavigate();
    const memoList = useContext(MemoStateContext);

    useEffect(()=> {
        if(memoList.length > 0){
            const targetMemo = memoList.find(
                (it) => parseInt(it.id) === parseInt(id)
            );

            if(targetMemo){
                setData(targetMemo);
            }else{
                alert('없는 아이디 입니다.');
                navigate("/memo", {replace: true});
            }
        }
    },[id, memoList, navigate]);

    if(!data){
        return <LoadingSpinner />
    }else{
        const curEnotionData = emotionList.find(
            (it) => parseInt(it.emotion_id) === parseInt(data.emotion)
        );
        console.log(curEnotionData)
        
        return (
            <div className="MemoView">
                <MemoHeader 
                    headText={`${getStringDate(new Date(data.date))} 상세`}
                    leftChild={<MemoButton type="positive" text="뒤로" onClick={() => navigate(-1)} />}
                    rightChild={<MemoButton type="positive" text="수정" onClick={() => navigate(`/memo/edit/${id}`)} />}
                />
                <article>
                    <section>
                        <h4 className="mt-5">감정</h4>
                        <div className={["memo_img_wrapper", `memo_img_wrapper_${data.emotion}`].join(" ")}>
                            <img src={curEnotionData.emotion_img} alt="img" />
                            <div className="emotion_descript">
                                {curEnotionData.emotion_descript}
                            </div>
                        </div>
                    </section>
                    <section>
                        <h4>내용</h4>
                        <div className="memo_content_wrapper">
                            <p>{data.content}</p>
                        </div>
                    </section>
                </article>
            </div>
        )
    }
}
export default MemoView;