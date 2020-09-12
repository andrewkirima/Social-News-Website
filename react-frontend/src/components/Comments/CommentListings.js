import React from "react";
import DeleteComment from "./DeleteComment";
import EditComment from "./EditComment";
import { render } from "@testing-library/react";
import { Button } from "react-bootstrap";
// import './ArticleListings.css'

const CommentList = (commentList) => {
  //functional component

  function handleEdit(id) {
    console.log(id);
    render(
      <div>
        <EditComment userID={id} />
      </div>
    );
  }

  function handleDelete(user, text) {
    render(
      <div>
        <DeleteComment user={user} text={text} />
      </div>
    );
  }

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
              Hello {data.post_title}
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button onClick={() => handleEdit(data.id)}>Update</Button>&nbsp;
              <Button onClick={() => handleDelete(data.user, data.text)}>
                Delete
              </Button>
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
