import React, {useEffect} from 'react'
import {selectPublicPostsArray, loadPosts} from '../../redux/posts'
import PostItem from "../PostItem/PostItem";
import {useDispatch, useSelector} from "react-redux";


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
                   <PostItem key={post.id} post={post}/>
                )
            })}
        </div>
    )
}

export default PostList;