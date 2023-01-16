import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faFaceSmile } from "@fortawesome/free-solid-svg-icons";

const DiaryItem = ({ diaryList, onRemove }) => {
    const handleRemove = () => {
        //onRemove(item.id);
    }

    return (
        <div>
            <div className="text-secondary mb-2">전체 {diaryList.length}건</div>
            {diaryList.map((item, idx) => (
                <div className="p-3 mb-4 bg-white border" key={item.id}>
                    <div className="d-flex justify-content-between">
                        <span className="text-primary">
                            <FontAwesomeIcon icon={faFaceSmile} className="me-1"/>
                            {item.emotion}
                        </span>
                        <div>
                            <button className="btn btn-sm btn-outline-primary" onClick={() => {onRemove(item.id)}}>삭제</button>
                        </div>
                    </div>
                    <p className="lh-sm fs-5 text-break mb-0">{item.content}</p>
                    <div className="mt-1 text-black-50 font-italic">{item.author} | {new Date(item.createdAt).toLocaleString()}</div>
                </div>
            ))}
        </div>
    )
}

export default DiaryItem;