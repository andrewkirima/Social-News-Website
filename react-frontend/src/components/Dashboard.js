import React, { Component } from "react";
import ArticleData from "./Articles/ArticleData";
import CommentData from "./Comments/CommentData";
import PostComment from "./Comments/PostComment";
import PostArticle from "./Articles/PostArticle";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <ArticleData />
        <PostArticle />
        <PostComment />
        <CommentData />
      </div>
    );
  }
}

export default Dashboard;
