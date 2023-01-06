import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";

const CreatePage = () => {
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const onSubmit = () => {
        console.log(title, body);
        axios.post('http://localhost:3001/posts', {
            title, // title: title,
            body //body: body
        }).then(() => history.push('/Blog'));
    };

    return (
        <>
            <h2>
                Blog
            </h2>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input className="form-control" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Body</label>
                <textarea 
                    className="form-control"
                    rows="10"
                    value={body} 
                    onChange={(e) => {setBody(e.target.value)}}
                />
            </div>
            <div>
                <button 
                    className="btn btn-primary"
                    onClick={onSubmit}>Post</button>
            </div>
        </>
    );
}
export default CreatePage;