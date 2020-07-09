import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import postsReducer from './posts';

const rootReducer = combineReducers({
    posts: postsReducer
})

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

