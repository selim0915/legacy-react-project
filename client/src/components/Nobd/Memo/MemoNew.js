import { useEffect } from "react";
import MemoEditor from "./MemoEditor";

const MemoNew = () =>{
    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = 'MEMO 신규등록';
    },[]);

    return (
        <MemoEditor />
    )
}
export default MemoNew;