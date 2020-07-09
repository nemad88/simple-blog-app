import React, {useEffect} from "react";
import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {loadPosts, selectPostById} from "../../redux/posts";
import CommentList from "../CommentList/CommentList";

const PostItemDetails: React.FC = () => {

    const dispatch = useDispatch();
    const {slug} = useParams();
    const post = useSelector(selectPostById(parseInt(slug)));

    useEffect(() => {
        dispatch(loadPosts());
    }, []);

    return (
        <>
            <div>POST DETAIL</div>
            {post ? (
                <div>
                    <h2> {post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ) : <div>loading</div>}
            <Link to={'/'}>Back to post list</Link>

            <CommentList/>
        </>
    )
}

export default PostItemDetails;