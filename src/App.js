import React, { Component } from 'react';
import PostForm from "./PostForm.js";
import AllPost from "./AllPost";

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <PostForm />
        <AllPost />
      </div>
    );
  }
}

export default App;
