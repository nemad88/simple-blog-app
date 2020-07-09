import React from 'react';
import './App.css';

import PostList from "../PostList/PostList";
import { Switch, Route } from 'react-router-dom';
import PostItemDetails from "../PostItemDetails/PostItemDetails";
import Login from "../Login/Login";

const App: React.FC = () => {
    return (
        <>
            <div>HEADER</div>
            <Switch>
                <Route exact path="/" component={PostList}/>
                <Route exact path="/posts/:slug" component={PostItemDetails}/>
                <Route exact path="/login" component={Login}/>
            </Switch>
        </>
    );
}

export default App;
