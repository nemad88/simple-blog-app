import React from "react";
import {Comment} from "../../redux/comments";
import "./CommentItem.scss"

interface Props {
    comment: Comment;
}

const CommentItem: React.FC<Props> = ({comment}) => {
    return (
        <div className='comment-item'>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
        </div>
    )
}

export default CommentItem;