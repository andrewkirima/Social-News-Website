import React, { Component } from "react";
import ArticleData from "./Articles/ArticleData";
import CommentData from "./Comments/CommentData";
import PostComment from "./Comments/PostComment";
import PostArticle from "./Articles/PostArticle";
import EditArticle from "./Articles/EditArticle";
import DeleteArticle from "./Articles/DeleteArticle";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <ArticleData />
        <EditArticle />
        <PostArticle />
        <CommentData />
        <PostComment />
      </div>
    );
  }
}
export default Dashboard;
