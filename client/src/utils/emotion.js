const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

export const emotionDumpData = [
    {
        id:1,
        emotion:1,
        content:"오늘의일기1",
        date: 1675264716343,
    },
    {
        id:2,
        emotion:2,
        content:"오늘의일기2",
        date: 1675264716344,
    },
    {
        id:3,
        emotion:3,
        content:"오늘의일기3",
        date: 1675264716345,
    },
    {
        id:4,
        emotion:4,
        content:"오늘의일기4",
        date: 1675264716346,
    },
    {
        id:5,
        emotion:5,
        content:"오늘의일기5",
        date: 1675264716347,
    }
]

export const emotionList = [
    {
        emotion_id:1,
        emotion_img: process.env.PUBLIC_URL + `/assets/png/emotion1.png`,
        emotion_descript: '매우 좋음'
    },
    {
        emotion_id:2,
        emotion_img: process.env.PUBLIC_URL + `/assets/png/emotion2.png`,
        emotion_descript: '좋음'
    },
    {
        emotion_id:3,
        emotion_img: process.env.PUBLIC_URL + `/assets/png/emotion3.png`,
        emotion_descript: '보통'
    },
    {
        emotion_id:4,
        emotion_img: process.env.PUBLIC_URL + `/assets/png/emotion4.png`,
        emotion_descript: '나쁨'
    },
    {
        emotion_id:5,
        emotion_img: process.env.PUBLIC_URL + `/assets/png/emotion5.png`,
        emotion_descript: '매우 나쁨'
    }
]