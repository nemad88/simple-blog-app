import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts, selectPostById, updatePost } from "../../redux/posts";
import "./EditPost.scss";
import { selectIsLoggedIn } from "../../redux/auth";

const EditPost: React.FC = () => {
  const [title, setTitle] = useState("");
  const [visibility, setVisibility] = useState("public");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState();

  const dispatch = useDispatch();

  const { slug } = useParams();
  const history = useHistory();
  const post = useSelector(selectPostById(parseInt(slug)));
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      history.push("/");
    }

    dispatch(loadPosts());
  }, []);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setVisibility(post.visibility);
      setBody(post.body);
      setUserId(post.userId);
    }
  }, [post]);

  const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  const onBodyChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setBody(event.target.value);
  };

  const onSavePost = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(
      updatePost({
        body: body,
        visibility: visibility,
        id: slug,
        title: title,
        userId: userId,
      })
    );
    dispatch(loadPosts());
    history.push("/");
  };

  return (
    <div className="edit-post">
      <form className="edit-form" onSubmit={onSavePost}>
        <input
          id="title"
          className="edit-form-title"
          type="text"
          value={title}
          onChange={onTitleChange}
        />
        <select
          className="custom-select"
          value={visibility}
          onChange={(event) => setVisibility(event.target.value)}
        >
          <option value={"draft"}>Draft</option>
          <option value={"public"}>Public</option>
        </select>
        <textarea
          className="edit-form-body"
          value={body}
          onChange={onBodyChange}
        />
        <div className="button-box">
          <Link to={"/"}>Back to list</Link>
          <button type="submit" value="save">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
