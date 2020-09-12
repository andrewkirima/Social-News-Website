import React, { Component } from "react";
import CommentData from "./Comments/CommentData";
import PostComment from "./Comments/PostComment";

class CommentsPage extends Component {
  render() {
    return (
      <div>
        <PostComment />
        <CommentData />
      </div>
    );
  }
}

export default CommentsPage;
