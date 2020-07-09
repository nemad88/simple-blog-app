import {Action} from 'redux';
import {RootState} from "./store";
import {ThunkAction} from "redux-thunk";
import {createSelector} from "reselect";


export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

interface CommentsState {
    comments: Comment[]
}


// LOAD COMMENTS INTERFACES

const LOAD_REQUEST = 'comments/load_request';

interface LoadRequestAction extends Action<typeof LOAD_REQUEST> {
}

const LOAD_SUCCESS = 'comments/load_success';

interface LoadSuccessAction extends Action<typeof LOAD_SUCCESS> {
    payload: {
        comments: Comment[]
    }
}

const LOAD_FAILURE = 'comments/load_failure';

interface LoadFailureAction extends Action<typeof LOAD_FAILURE> {
    error: string
}

// LOAD COMMENTS ACTION
export const loadComments = (): ThunkAction<void, RootState, undefined, LoadRequestAction | LoadSuccessAction | LoadFailureAction> => async (dispatch) => {
    dispatch({
        type: LOAD_REQUEST
    })


    try {
        const response = await fetch(`http://localhost:3001/comments`);
        const comments: Comment[] = await response.json();

        console.log('comments', comments)

        dispatch({
            type: LOAD_SUCCESS,
            payload: {comments}
        })
    } catch (e) {
        dispatch({
            type: LOAD_FAILURE,
            error: 'Failed to load posts'
        })
    }
}

// SELECTORS

export const selectCommentsState = (state: RootState): CommentsState => state.comments;

export const selectCommentsArray = createSelector(selectCommentsState, commentsState => commentsState.comments)

export const selectCommentsByPostId = (postId: number) => {
    return createSelector([selectCommentsArray], (comments) => {
        return comments.filter(comment => comment.postId === postId)
    });
};

// INITIAL STATE
const initialState: CommentsState = {
    comments: []
}

// REDUCER
const commentReducer = (state: CommentsState = initialState, action: | LoadRequestAction | LoadSuccessAction) => {
    switch (action.type) {
        case LOAD_SUCCESS:
            const {comments} = action.payload;
            return {
                ...state,
                comments
            }
        default:
            return state;
    }
}

export default commentReducer;