import React from "react";
import {Post} from "../../redux/posts";
import {Link} from "react-router-dom";

interface Props {
    post: Post;
}

const PostItem: React.FC<Props> = ({post}) => {
    return (
        <div>
            <h2> {post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`}>More</Link>
        </div>
    )
}

export default PostItem;