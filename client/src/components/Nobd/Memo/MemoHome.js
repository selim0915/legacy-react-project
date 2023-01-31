import { Link } from "react-router-dom";

const MemoHome = () =>{
    return (
        <div>
            <h1>MemoHome</h1>

            <Link to={'/memo'}>MemoHome</Link>
            <Link to={'/memo/new'}>MemoNew</Link>
            <Link to={'/memo/edit'}>MemoEdit</Link>
            <Link to={'/memo/1'}>Memo</Link>
        </div>
    )
}
export default MemoHome;