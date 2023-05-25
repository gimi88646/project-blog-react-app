import React, { useEffect, useState } from "react";
import axios from "axios";
export default ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async (postId) => {
    console.log("fetching comments");
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    setComments(res.data);
    console.log(comments);
    console.log(res.data + "for postid = " + postId);
  };

  useEffect(() => {
    fetchComments(postId);
  }, []);

  const renderedComments = comments.map((Comment) => {
    return <li key={Comment.id}>{Comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};
