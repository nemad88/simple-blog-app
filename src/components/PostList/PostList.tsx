import React, {useEffect} from 'react'
import {loadPosts, selectPublicPostsArray} from '../../redux/posts'
import PostItem from "../PostItem/PostItem";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import "./PostList.scss"

const PostList: React.FC = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPublicPostsArray);
    useEffect(() => {
        dispatch(loadPosts());
    }, [dispatch]);

    return (
        <div className="post-list">

            {posts.map(post => {
                return (
                    <div key={post.id} >
                        <PostItem post={post}/>
                    </div>
                )
            })}
        </div>
    )
}

export default PostList;