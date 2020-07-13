import { Action } from "redux";
import { RootState } from "./store";

import { ThunkAction } from "redux-thunk";
import { createSelector } from "reselect";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  visibility: string;
}

interface PostsState {
  posts: Post[];
}

// LOAD POSTS INTERFACES

const LOAD_REQUEST = "posts/load_request";
const LOAD_SUCCESS = "posts/load_success";
const LOAD_FAILURE = "posts/load_failure";

interface LoadRequestAction extends Action<typeof LOAD_REQUEST> {}
interface LoadSuccessAction extends Action<typeof LOAD_SUCCESS> {
  payload: {
    posts: Post[];
  };
}
interface LoadFailureAction extends Action<typeof LOAD_FAILURE> {
  error: string;
}

// LOAD POSTS ACTION
export const loadPosts = (): ThunkAction<
  void,
  RootState,
  undefined,
  LoadRequestAction | LoadSuccessAction | LoadFailureAction
> => async (dispatch) => {
  dispatch({
    type: LOAD_REQUEST,
  });

  try {
    const response = await fetch(`http://localhost:3001/posts`);
    const posts: Post[] = await response.json();
    dispatch({
      type: LOAD_SUCCESS,
      payload: { posts },
    });
  } catch (e) {
    dispatch({
      type: LOAD_FAILURE,
      error: "Failed to load posts",
    });
  }
};

// UPDATE POST ACTION

const UPDATE_REQUEST = "posts/update_request";
const UPDATE_SUCCESS = "posts/update_success";
const UPDATE_FAILURE = "posts/update_failure";

interface UpdateRequestAction extends Action<typeof UPDATE_REQUEST> {}
interface UpdateSuccessAction extends Action<typeof UPDATE_SUCCESS> {
  payload: { post: Post };
}
interface UpdateFailureAction extends Action<typeof UPDATE_FAILURE> {}

export const updatePost = (
  post: Post
): ThunkAction<
  Promise<void>,
  RootState,
  undefined,
  UpdateRequestAction | UpdateSuccessAction | UpdateFailureAction
> => async (dispatch) => {
  dispatch({
    type: UPDATE_REQUEST,
  });

  try {
    const response = await fetch(`http://localhost:3001/posts/${post.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    const updatedPost: Post = await response.json();

    dispatch({ type: UPDATE_SUCCESS, payload: { post: updatedPost } });
  } catch (e) {
    dispatch({
      type: UPDATE_FAILURE,
    });
  }
};

// SELECTORS

export const selectPostsState = (state: RootState): PostsState => state.posts;

export const selectPublicPostsArray = createSelector(
  selectPostsState,
  (postsState) =>
    postsState.posts.filter((post) => post.visibility === "public")
);

export const selectAllPostsArray = createSelector(
  selectPostsState,
  (postsState) => postsState.posts
);

export const selectPostById = (id: number) => {
  return createSelector([selectAllPostsArray], (posts) => {
    return posts.find((post) => post.id === id);
  });
};

// INITIAL STATE
const initialState: PostsState = {
  posts: [],
};

// REDUCER
const postReducer = (
  state: PostsState = initialState,
  action: LoadRequestAction | LoadSuccessAction | UpdateSuccessAction
) => {
  switch (action.type) {
    case LOAD_SUCCESS:
      const { posts } = action.payload;
      return {
        ...state,
        posts,
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default postReducer;
