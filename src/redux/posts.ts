import {Action} from "redux";
import {RootState} from './store';

import {ThunkAction} from "redux-thunk";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface PostsState {
    posts: Post[]
}

const initialState: PostsState = {
    posts: []
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