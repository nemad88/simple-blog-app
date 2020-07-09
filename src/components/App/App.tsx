import React from 'react';
import './App.css';

import PostList from "../PostList/PostList";

const App: React.FC = () => {
  return (
    <div>
     <h1>App</h1>
        <PostList/>
    </div>
  );
}

export default App;
