import { useEffect, useState } from "react";

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
        handlerTodoList();
    }

    const handlerRemove = (pId) => {
        setDatas(
            datas.filter((v, i) => v.id !== pId)
        )
    }

    const handlerCheck = (pId) => {
        const newData = datas.map((item) => {
            if(item.id === pId){
                item.completed = !item.completed;
            }
            return item;
        })
        
        setDatas(newData)
    }

    const handlerTodoList = () => {
        return datas.map((item) => {
            return (
                <div key={item.id} style={item.completed ? getStyle : getStyle2}>
                    <input 
                        type="checkbox" 
                        defaultChecked={item.completed}
                        onClick={() => handlerCheck(item.id)} />
                    <span className="ms-2">{item.title}</span>
                    <button type="button" style={btnStyle} onClick={() => handlerRemove(item.id)}>X</button>
                </div>
            )
        })
    }

    useEffect(() => {
        const todoData = [
            {
                id: "1",
                title: "공부하기",
                completed: true
            },
            {
                id: "2",
                title: "청소하기",
                completed: false
            }
        ]

        setDatas(todoData);
    }, [])

    const btnStyle = {
        color: "#fff",
        border: "none",
        padding: "2px 14px",
        borderRadius: "50%",
        cursor: "painter",
        float: "right"
    }

    const getStyle = {
        padding: "10px",
        borderBottom: "1px #ccc dotted",
        textDecoration: "line-through"
    }

    const getStyle2 = {
        padding: "10px",
        borderBottom: "1px #ccc dotted",
        textDecoration: "none"
    }

    return (
        <div>
            <h1>Todo</h1>

            <form>
                <div className="d-flex justify-content-between">
                    <input 
                        type="text"
                        name="value"
                        className="form-control"
                        placeholder="content..."
                        value={title}
                        onChange={(e) => {setTitle(e.target.value)}}/>
                    <button
                        type="submit"
                        className="btn btn-primary ms-3"
                        onClick={(e) => handlerCreate(e)}>등록</button>
                </div>
            </form>

            {handlerTodoList()}
        </div>
    )
}
export default Todo;