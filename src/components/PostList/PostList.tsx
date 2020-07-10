import React, { useEffect } from "react";
import {
  loadPosts,
  selectAllPostsArray,
  selectPublicPostsArray,
} from "../../redux/posts";
import PostItem from "../PostItem/PostItem";
import { useDispatch, useSelector } from "react-redux";
import "./PostList.scss";
import { selectIsLoggedIn } from "../../redux/auth";

const PostList: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPublicPostsArray);
  const allPost = useSelector(selectAllPostsArray);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <div className="post-list">
      {isLoggedIn
        ? allPost.map((post) => {
            return (
              <div key={post.id}>
                <PostItem post={post} />
              </div>
            );
          })
        : posts.map((post) => {
            return (
              <div key={post.id}>
                <PostItem post={post} />
              </div>
            );
          })}
    </div>
  );
};

export default PostList;
