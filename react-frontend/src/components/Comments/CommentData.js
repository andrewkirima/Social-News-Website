import React from "react";
import Comments from "./Comments";

class CommentData extends React.Component {
  render() {
    return (
      <div class="containerArticle">
        <div>
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Comments List
          </h1>
          <Comments />
        </div>
      </div>
    );
  }
}

export default CommentData;

//npm i -g json-server
//
