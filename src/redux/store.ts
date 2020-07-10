import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import postsReducer from "./posts";
import commentReducer from "./comments";
import authReducer from "./auth";

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
