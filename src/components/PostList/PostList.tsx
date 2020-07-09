import React, {useEffect} from 'react'
import {loadPosts, selectPublicPostsArray} from '../../redux/posts'
import PostItem from "../PostItem/PostItem";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";


const PostList: React.FC = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPublicPostsArray);
    useEffect(() => {
        dispatch(loadPosts());
    }, []);

    return (
        <div>
            PostList
            {posts.map(post => {
                return (
                    <div key={post.id} >
                        <PostItem post={post}/>
                        <Link to={`/posts/${post.id}`}>More</Link>
                        <Link to={`/posts/${post.id}/edit`}>Edit</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default PostList;