import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import postsReducer from './posts';
import commentReducer from './comments';

const rootReducer = combineReducers({
    posts: postsReducer,
    comments: commentReducer
})

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

