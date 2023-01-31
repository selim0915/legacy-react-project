import { useParams } from "react-router-dom";

const Memo = () =>{
    const {id} = useParams();

    return (
        <div>
            <h1>Memo</h1>
            {id}
        </div>
    )
}
export default Memo;