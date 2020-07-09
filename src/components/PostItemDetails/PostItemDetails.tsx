import React, {useEffect} from "react";
import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {loadPosts, selectPostById} from "../../redux/posts";
import PostItem from "../PostItem/PostItem";
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
            <Link to={`/posts/${slug}/edit`}>Edit</Link>
            {post ? (
                <PostItem post={post}/>
            ) : <div>loading</div>}
            <Link to={'/'}>Back to post list</Link>
            <CommentList/>
        </>
    )
}

export default PostItemDetails;