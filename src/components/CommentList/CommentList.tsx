import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadComments, selectCommentsByPostId } from "../../redux/comments";
import CommentItem from "../CommentItem/CommentItem";
import "./CommentList.scss";

const CommentList: React.FC = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const comments = useSelector(selectCommentsByPostId(parseInt(slug)));

  useEffect(() => {
    dispatch(loadComments());
  }, []);

  return (
    <div className="comment-list">
      <h2>Comments</h2>
      {comments ? (
        comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))
      ) : (
        <div>Loading Comments</div>
      )}
    </div>
  );
};

export default CommentList;
