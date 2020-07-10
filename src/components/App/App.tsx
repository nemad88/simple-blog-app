import React from "react";
import "./App.css";

import PostList from "../PostList/PostList";
import { Switch, Route, Redirect } from "react-router-dom";
import PostItemDetails from "../PostItemDetails/PostItemDetails";
import Login from "../Login/Login";
import EditPost from "../EditPost/EditPost";
import Header from "../Header/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route exact path="/posts/:slug" component={PostItemDetails} />
        <Route exact path="/posts/:slug/edit" component={EditPost} />
        <Route exact path="/login" component={Login} />
        <Route path="*">
          <Redirect to={"/"} />
        </Route>
      </Switch>
    </>
  );
};

export default App;
