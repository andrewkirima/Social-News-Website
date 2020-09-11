import React, { Component } from "react";
import CommentList from "./CommentListings";

const url = "http://localhost:6800/comments"; //temp url hosting on json server

class Comments extends Component {
  //class component
  constructor() {
    //initialized the component
    super();
    this.state = {
      //state
      comments: "",
    };
  }
  componentDidMount() {
    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          comments: data,
        });
      });
  }
  render() {
    console.log(this.state.comments);
    return (
      <div>
        <CommentList commentList={this.state.comments} />
      </div>
    );
  }
}

export default Comments;

// json-server --watch db3.json --port 6800
