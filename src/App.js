import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

export default () => {
  return (
    <div className="container">
      <PostCreate />
      <h2>Posts</h2>
      <PostList />
    </div>
  );
};
