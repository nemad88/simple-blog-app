import React from "react";
import {Post} from "../../redux/posts";

interface Props {
    post: Post;
}

const PostItem: React.FC<Props> = ({post}) => {
    return (
        <div>
            <h2> {post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

export default PostItem;