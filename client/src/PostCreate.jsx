import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {

    const [title, setTitle] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        await axios.post('http://localhost:/3002/posts', {
            title
        });

    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input onChange={e => setTitle(e.target.value)} value={title} className="form-control" />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default PostCreate
