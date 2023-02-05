import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MemoDispatchContext } from "../../App";
import EmotionItem from "./EmotionItem";
import MemoButton from "./MemoButton";
import MemoHeader from "./MemoHeader";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const emotionList = [
    {
        emotion_id:1,
        emotion_img: process.env.PUBLIC_URL + `/assets/img/emotion1.png`,
        emotion_descript: '매우 좋음'
    },
    {
        emotion_id:2,
        emotion_img: process.env.PUBLIC_URL + `/assets/img/emotion2.png`,
        emotion_descript: '좋음'
    },
    {
        emotion_id:3,
        emotion_img: process.env.PUBLIC_URL + `/assets/img/emotion3.png`,
        emotion_descript: '보통'
    },
    {
        emotion_id:4,
        emotion_img: process.env.PUBLIC_URL + `/assets/img/emotion4.png`,
        emotion_descript: '나쁨'
    },
    {
        emotion_id:5,
        emotion_img: process.env.PUBLIC_URL + `/assets/img/emotion5.png`,
        emotion_descript: '매우 나쁨'
    }
]

const getStringDate = (date) => {
    return date.toISOString().slice(0, 10);
}

const MemoEditor = () => {
    const contentRef = useRef();
    const [content, setContent] = useState("");
    const [emotion, setEmotion] = useState(3);
    const [date, setDate] = useState(getStringDate(new Date()));
    const navigate = useNavigate();
    const {onCreate} = useContext(MemoDispatchContext);

    const handleClickEmote = (emotion) => {
        setEmotion(emotion);
    }

    const handleSubmit = () => {
        if(content.length < 1) {
            contentRef.current.focus();
            return
        }
        onCreate(date, content, emotion);
        navigate('/memo', {replace:true}) // 뒤로가기 하면 다시 못돌아오게
    }

    return (
        <div className="MemoEditor">
            <MemoHeader 
                headText={"새 메모"}
                leftChild={<MemoButton text="취소" type="positive" onClick={() => navigate(-1)}/>}
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