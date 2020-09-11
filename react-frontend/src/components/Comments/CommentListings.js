import React from "react";
// import './ArticleListings.css'

const CommentList = (commentList) => {
  //functional component

  const renderList = ({ commentList }) => {
    if (commentList) {
      return commentList.map((data) => {
        return (
          <div className="rowCard">
            <div className="id">{data.id}</div>
            <div>{data.user}</div>
            <div>Comment: {data.text}</div>
            <div>Upvotes {data.upvotes}</div>
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
