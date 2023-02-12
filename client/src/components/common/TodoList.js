export const TodoList = ({ datas, setDatas }) => {
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

    const btnStyle = {
        color: "#fff",
        border: "none",
        padding: "2px 14px",
        borderRadius: "50%",
        cursor: "painter",
        float: "right"
    }

    return (
        datas.map((item) => {
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
    )
}