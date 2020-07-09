import React, {useEffect, useState} from "react";
import {Link, useParams, useHistory } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loadPosts, selectPostById, updatePost} from "../../redux/posts";
import './EditPost.css'

const EditPost: React.FC = () => {

    const [title, setTitle] = useState('');
    const [visibility, setVisibility] = useState('public');
    const [body, setBody] = useState('')
    const [userId, setUserId] = useState()

    const dispatch = useDispatch();

    const {slug} = useParams();
    const history = useHistory();
    const post = useSelector(selectPostById(parseInt(slug)));

    useEffect(() => {
        dispatch(loadPosts());
    }, []);

    useEffect(()=> {
        if(post) {
            setTitle(post.title)
            setVisibility(post.visibility);
            setBody(post.body);
            setUserId(post.userId);
        }
    }, [post])

    const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
        setTitle(event.target.value);
    }

    const onBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>):void => {
        setBody(event.target.value);
    }

    const onSavePost = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        dispatch(updatePost({
            body: body,
            visibility: visibility,
            id: slug,
            title: title,
            userId: userId
        }))
        history.push('/');
    }

    return (
        <div >
            <form className='edit-form' action="" onSubmit={onSavePost}>
                <input id='title' className="edit-form-title" type="text" value={title} onChange={onTitleChange}/>
                <textarea className="edit-form-body" value={body} onChange={onBodyChange}/>
                <h1>Edit</h1>
                <Link to={"/"}>Back to list</Link>
                <button type="submit" value="save">SAVE</button>
            </form>

        </div>
    )
}

export default EditPost;