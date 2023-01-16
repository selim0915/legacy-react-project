import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faFaceSmile } from "@fortawesome/free-solid-svg-icons";

const DiaryItem = ({id, author, content, emotion, createdAt}) => {
    return (
        <div className="p-3 mb-4 bg-white border">
            <span className="text-primary">
                <FontAwesomeIcon icon={faFaceSmile} className="me-1"/>
                {emotion}
            </span>
            <p className="lh-sm fs-5 text-break mb-0">{content}</p>
            <div className="mt-1 text-black-50 font-italic">{author} | {new Date(createdAt).toLocaleString()}</div>
        </div>
    )
}

export default DiaryItem;