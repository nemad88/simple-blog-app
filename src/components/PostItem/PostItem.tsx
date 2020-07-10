import React from "react";
import {Post} from "../../redux/posts";
import './PostItem.scss'
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectIsLoggedIn} from "../../redux/auth";

interface Props {
    post: Post;
}

const PostItem: React.FC<Props> = ({post}) => {
    const {slug} = useParams();
    const isLoggedIn = useSelector(selectIsLoggedIn)

    return (
        <div className="post-list-item">
            <h1> {post.title}</h1>
            <p>
                {slug? post.body : `${post.body.slice(0, 400)}...`}

            </p>

            {slug ? <Link to={'/'}>Back to post list</Link> : <Link to={`/posts/${post.id}`}>Read more....</Link> }
            {isLoggedIn ? <Link to={`/posts/${post.id}/edit`}>Edit</Link> : null}


        </div>
    )
}

export default PostItem;