import React, {useEffect} from "react";
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {loadPosts, selectPostById} from "../../redux/posts";
import PostItem from "../PostItem/PostItem";
import CommentList from "../CommentList/CommentList";
import "./PostItemDetails.scss"

const PostItemDetails: React.FC = () => {

    const dispatch = useDispatch();
    const {slug} = useParams();
    const post = useSelector(selectPostById(parseInt(slug)));

    useEffect(() => {
        dispatch(loadPosts());
    }, []);

    return (
        <div className="post-item-details">
            {post ? (
                <PostItem post={post}/>
            ) : <div>loading</div>}
            <CommentList/>
        </div>
    )
}

export default PostItemDetails;