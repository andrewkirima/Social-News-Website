import React from "react";
import "./ArticleListings.css";
// import EditArticle from "./EditArticle";
// import DeleteArticle from "./DeleteArticle";
import { Button } from "react-bootstrap";
const ArticleList = (articleList) => {
  //functional component
  // const handleChange = (userID) => {
  //     <EditArticle />
  //     <DeleteArticle />
  // }
  const renderList = ({ articleList }) => {
    if (articleList) {
      return articleList.map((data) => {
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
              <a href={data.link}>{data.title}</a>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Posted by: {data.user}
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
            <Button>Edit Post</Button>
            <Button>Delete Post</Button>
            <br />
            <br />
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
