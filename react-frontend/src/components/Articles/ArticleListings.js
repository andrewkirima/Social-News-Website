import React from "react";
import "./ArticleListings.css";
import EditArticle from "./EditArticle";
import DeleteArticle from "./DeleteArticle";
import { Button } from "react-bootstrap";
import { render } from "@testing-library/react";
import Comments from "../Comments/Comments";
import Upvote from "../Upvote";

const ArticleList = (articleList) => {
  //functional component

  function handleEdit(id) {
    console.log(id);
    render(
      <div>
        <EditArticle userID={id} />
      </div>
    );
  }

  function handleDelete(title) {
    render(
      <div>
        <DeleteArticle title={title} />
      </div>
    );
  }

  function handleGet(title) {
    render(
      <div>
        <Comments title={title} />
      </div>
    );
  }

  function handleUpvote(upvote) {
    render(
      <div>
        <Upvote upvote={upvote} />
      </div>
    );
  }

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
              <a href={data.link} className="article-link">
                {data.title}
              </a>
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button onClick={() => handleEdit(data.id)}>Edit Post</Button>
              &nbsp;
              <Button onClick={() => handleDelete(data.title)}>
                Delete Post
              </Button>
              &nbsp;
              <Button onClick={() => handleGet(data.title)}>Comments</Button>
              &nbsp;
              <Button onClick={() => handleUpvote(data.upvote)}>Upvote</Button>
            </div>
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
