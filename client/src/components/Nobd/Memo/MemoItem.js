import React from "react";
import { useNavigate } from "react-router-dom";
import MemoButton from "./MemoButton";

const MemoItem = ({ id, emotion, content, date }) => {
    const navigate = useNavigate();

    const env = process.env;
    env.PUBLIC_URL = env.PUBLIC_URL || "";
    
    const strDate = new Date(parseInt(date)).toLocaleDateString();

    const goDetail = () => {
        navigate(`/memo/${id}`);
    }

    const goEdit = () => {
        navigate(`/memo/edit/${id}`);
    }

    return (
        <div className="MemoItem">
            <div 
                className={["emotion_img_wrapper", `emotion_img_wrapper_${emotion}`].join(" ")}
                onClick={goDetail}>
                <img src={process.env.PUBLIC_URL + `/assets/png/emotion${emotion}.png`} alt={`emotion${emotion}.png`} />
            </div>
            <div className="info_wrapper" onClick={goDetail}>
                <div className="memo_date">{strDate}</div>
                <div className="memo_content_preview">{content.slice(0, 25)}</div>
            </div>
            <div className="btn_wrapper" onClick={goEdit}>
                <MemoButton type="positive" text={"수정"} />
            </div>
        </div>
    )
}
export default React.memo(MemoItem);