import React from "react";
import DeleteComment from "./DeleteComment";
import EditComment from "./EditComment";
import { render } from "@testing-library/react";
import { Button } from "react-bootstrap";
import Popup from "reactjs-popup";
import PostComment from "./PostComment";
// import './ArticleListings.css'

const CommentList = ({commentList, postTitle}) => {
  //functional component

  // function handleEdit(id) {
  //   console.log(id);
  //   render(
  //     <div>
  //       <EditComment userID={id} />
  //     </div>
  //   );
  // }

  function handleDelete(comment_uuid) {
    render(
      <div>
        <DeleteComment uuid={comment_uuid} />
      </div>
    );
  }

  const renderList = () => {
    if (commentList) {
      return commentList.map((data) => {
        return (
          <div className="rowCard">
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
                  <EditComment uuid={data.uuid} />
                </div>
              </Popup>
              &nbsp;
              {/* <Button onClick={() => handleEdit(data.id)}>Update</Button>&nbsp; */}
              <Button onClick={() => handleDelete(data.uuid)}>
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
      <div className="rowCard">
        {renderList(commentList)}
        <div>
          <PostComment postTitle = { postTitle }/>
        </div>
      </div>
    </div>
  );
};

export default CommentList;
