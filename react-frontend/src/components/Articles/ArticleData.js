import React from "react";
import Articles from "./Articles";

class ArticleData extends React.Component {
  render() {
    return (
      <div class="containerArticle">
        <div>
          <h1>Article List</h1>
          <Articles />
        </div>
      </div>
    );
  }
}

export default ArticleData;

//npm i -g json-server
//
