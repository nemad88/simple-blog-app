import React from "react";
import {Comment} from "../../redux/comments";

interface Props {
    comment: Comment;
}

const CommentItem: React.FC<Props> = ({comment}) => {
    return (
        <div>
            <div>
                <h4>{comment.name}</h4>
                <p>{comment.body}</p>
                <div>{comment.postId}</div>
            </div>
        </div>
    )
}

export default CommentItem;