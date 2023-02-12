import { useEffect, useState } from "react";
import { TodoForm } from "../../common/TodoForm";
import { TodoList } from "../../common/TodoList";
import { todoDumpData } from "../../../utils/dumpData";

const Todo = () => {
    const [datas, setDatas] = useState([]);
    const [title, setTitle] = useState("");

    const handlerCreate = (e) => {
        e.preventDefault();

        let newData = {
            id: Date.now(),
            title: title,
            completed: false
        }

        setDatas(preData => [...preData, newData])
        setTitle("");
    }

    useEffect(() => {
        setDatas(todoDumpData);
    }, [])

    return (
        <div>
            <h1>Todo</h1>
            <TodoForm title={title} setTitle={setTitle} handlerCreate={handlerCreate}/>
            <TodoList datas={datas} setDatas={setDatas} />
        </div>
    )
}
export default Todo;