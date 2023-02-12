export const TodoForm = ({ title , setTitle, handlerCreate }) => {
    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    return (
        <form>
            <div className="d-flex justify-content-between">
                <input 
                    type="text"
                    name="value"
                    className="form-control"
                    placeholder="content..."
                    value={title}
                    onChange={handleChange}/>
                <button
                    type="submit"
                    className="btn btn-primary ms-3"
                    onClick={(e) => handlerCreate(e)}>등록</button>
            </div>
        </form>
    )
    }