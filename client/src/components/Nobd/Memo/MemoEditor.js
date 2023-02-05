import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getStringDate } from "../../../utils/date";
import { emotionList } from "../../../utils/emotion";
import { MemoDispatchContext } from "../../App";
import EmotionItem from "./EmotionItem";
import MemoButton from "./MemoButton";
import MemoHeader from "./MemoHeader";

const MemoEditor = ({ isEdit, originData }) => {
    const contentRef = useRef();
    const [date, setDate] = useState(getStringDate(new Date()));
    const [emotion, setEmotion] = useState(3);
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    const {onCreate, onEdit} = useContext(MemoDispatchContext);

    const handleClickEmote = (emotion) => {
        setEmotion(emotion);
    }

    const handleSubmit = () => {
        if(content.length < 1) {
            contentRef.current.focus();
            return
        }
        
        if(isEdit){ // 수정
            onEdit(originData.id, date, content, emotion);
            navigate(`/memo/${originData.id}`);
        }else{
            onCreate(date, content, emotion);
            navigate('/memo', {replace:true}) // 뒤로가기 하면 다시 못돌아오게
        }
    }

    useEffect(() => {
        if(isEdit){ // 수정
            setDate(getStringDate(new Date(parseInt(originData.date))));
            setEmotion(originData.emotion);
            setContent(originData.content);
        }
    }, [isEdit, originData])

    return (
        <div className="MemoEditor">
            <MemoHeader 
                headText={isEdit ? "메모 수정" : "메모 신규등록"}
                leftChild={<MemoButton text="뒤로" type="positive" onClick={() => navigate(-1)}/>}
            />
            <div>
                <section>
                    <h4>일자</h4>
                    <div className="input_box">
                        <input 
                            type="date"
                            className="input_date"
                            value={date} 
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                </section>
                <section>
                    <h4>감정</h4>
                    <div className="input_box emotion_list_wrapper">
                        {emotionList.map((it) => (
                            <EmotionItem 
                                key={it.emotion_id} 
                                {...it}
                                onClick={handleClickEmote} 
                                isSelected={it.emotion_id === emotion}
                            />
                        ))}
                    </div>
                </section>
                <section>
                    <h4>내용</h4>
                    <div className="input_box text_wrapper">
                        <textarea 
                            ref={contentRef}
                            value={content}
                            onChange={(e) => {setContent(e.target.value)}}
                            placeholder="내용을 입력하세요." />
                    </div>
                </section>
                <section>
                    <div className="control_box">
                        <MemoButton text={"취소"} type="positive" onClick={() => navigate(-1)} />
                        <MemoButton text={"저장"} onClick={() => handleSubmit()} />
                    </div>
                </section>
            </div>
        </div>
    )
}
export default MemoEditor;