import React from "react";
import "./ArticleListings.css";

const ArticleList = (articleList) => {
  //functional component

  const renderList = ({ articleList }) => {
    if (articleList) {
      return articleList.map((data) => {
        return (
          <div className="rowCard">
            <div className="id">{data.id}</div>
            <div>
              <a href={data.link}>{data.title}</a>
            </div>
            <div>Posted by - {data.user}</div>
            <div>Upvotes {data.upvotes}</div>
          </div>
        );
      });
    }
  };
  return (
    <div className="container">
      <div className="rowCard">{renderList(articleList)}</div>
    </div>
  );
};

export default ArticleList;
