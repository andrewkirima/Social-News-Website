import React from "react";
import "./ArticleListings.css";
import EditArticle from "./EditArticle";
import DeleteArticle from "./DeleteArticle";
import { Button } from "react-bootstrap";
import { render } from "@testing-library/react";
import Comments from "../Comments/Comments";
import Upvote from "../Upvote";
import Popup from "reactjs-popup";

const ArticleList = (articleList) => {
  //functional component

  // function handleEdit(id) {
  //   console.log(id);
  //   render(
  //     <div>
  //       <EditArticle userID={id} />
  //     </div>
  //   );
  // }

  function handleDelete(title) {
    render(
      <div>
        <DeleteArticle title={title} />
      </div>
    );
  }

  // function handleGet(title) {
  //   render(
  //     <div>
  //       <Comments title={title} />
  //     </div>
  //   );
  // }

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
              <Popup trigger={<Button> Update</Button>} position="right center">
                <div
                  style={{
                    paddingLeft: "0%",
                    top: "0%",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#DCD0FF",
                  }}
                >
                  <EditArticle title={data.title} link={data.link} user={data.user}/>
                </div>
              </Popup>
              {/* <Button onClick={() => handleEdit(data.id)}>Edit Post</Button> */}
              &nbsp;
              <Button onClick={() => handleDelete(data.title)}>
                Delete Post
              </Button>
              &nbsp;
              {/* <Button onClick={() => handleGet(data.title)}>Comments</Button> */}
              &nbsp;
              <Button onClick={() => handleUpvote(data.upvote)}>Upvote</Button>
              &nbsp;
              <Popup
                trigger={<Button> Comments </Button>}
                position="right center"
              >
                <div
                  style={{
                    paddingLeft: "0%",
                    top: "0%",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#DCD0FF",
                  }}
                >
                  <Comments title={data.title} />
                </div>
              </Popup>
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
