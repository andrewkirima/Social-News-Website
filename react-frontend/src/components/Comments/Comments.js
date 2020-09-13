import React, { Component } from "react";
import CommentList from "./CommentListings";

const url = "/rest/comments/"; //temp url hosting on json server

class Comments extends Component {
  //class component
  constructor(props) {
    //initialized the component
    super(props);
    this.state = {
      //state
      comments: "",
    };
  }

  componentDidMount() {
    var title = this.props.title;
    fetch(url + title, { method: "GET" })
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
        <CommentList commentList={this.state.comments} postTitle={this.props.title} />
      </div>
    );
  }
}

export default Comments;

// json-server --watch db3.json --port 6800
