import {Action} from "redux";
import {RootState} from './store';

import {ThunkAction} from "redux-thunk";
import {createSelector} from "reselect";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
    draft: boolean;
}

interface PostsState {
    posts: Post[]
}


// LOAD POSTS INTERFACES

const LOAD_REQUEST = 'posts/load_request';

interface LoadRequestAction extends Action<typeof LOAD_REQUEST> {
}

const LOAD_SUCCESS = 'posts/load_success';

interface LoadSuccessAction extends Action<typeof LOAD_SUCCESS> {
    payload: {
        posts: Post[]
    }
}

const LOAD_FAILURE = 'posts/load_failure';

interface LoadFailureAction extends Action<typeof LOAD_FAILURE> {
    error: string
}

// LOAD POSTS ACTION
export const loadPosts = (): ThunkAction<void, RootState, undefined, LoadRequestAction | LoadSuccessAction | LoadFailureAction> => async (dispatch) => {
    dispatch({
        type: LOAD_REQUEST
    })


    try {
        const response = await fetch(`http://localhost:3001/posts`);
        const posts: Post[] = await response.json();

        console.log(posts)

        dispatch({
            type: LOAD_SUCCESS,
            payload: {posts}
        })
    } catch (e) {
        dispatch({
            type: LOAD_FAILURE,
            error: 'Failed to load posts'
        })
    }
}

// SELECTORS

export const selectPostsState = (state: RootState): PostsState => state.posts;

export const selectPublicPostsArray = createSelector(
    selectPostsState,
    postsState => postsState.posts.filter(post => !post.draft)
)

export const selectAllPostsArray = createSelector(
    selectPostsState,
    postsState => postsState.posts
)

export const selectPostById = (id: number) => {
    return createSelector([selectPublicPostsArray], (posts) => {
        return posts.find(post => post.id == id)
    });
};


// INITIAL STATE
const initialState: PostsState = {
    posts: []
}

// REDUCER
const postReducer = (state: PostsState = initialState, action: | LoadRequestAction | LoadSuccessAction) => {
    switch (action.type) {
        case LOAD_SUCCESS:
            const {posts} = action.payload;
            return {
                ...state,
                posts
            }
        default:
            return state;
    }
}

export default postReducer;