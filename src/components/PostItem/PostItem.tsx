import React from "react";
import {Post} from "../../redux/posts";
import './PostItem.css'

interface Props {
    post: Post;
}

const PostItem: React.FC<Props> = ({post}) => {
    return (
        <div className="post-item">
            <h2> {post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

export default PostItem;