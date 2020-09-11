import React from "react";
// import './ArticleListings.css'

const CommentList = (commentList) => {
  //functional component

  const renderList = ({ commentList }) => {
    if (commentList) {
      return commentList.map((data) => {
        return (
          <div className="rowCard">
            <div
              className="id"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {data.id}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {data.user}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Comment: {data.text}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Upvotes: {data.upvotes}
            </div>
            <br />
          </div>
        );
      });
    }
  };
  return (
    <div className="container">
      <div className="rowCard">{renderList(commentList)}</div>
    </div>
  );
};

export default CommentList;
