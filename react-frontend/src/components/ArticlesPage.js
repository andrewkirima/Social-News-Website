import React, { Component } from "react";
import ArticleData from "./Articles/ArticleData";
import PostArticle from "./Articles/PostArticle";

class ArticlesPage extends Component {
  render() {
    return (
      <div>
        <PostArticle />
        <ArticleData />
      </div>
    );
  }
}

export default ArticlesPage;
