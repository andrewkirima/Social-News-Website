import React, { Component } from "react";

const url = "http://localhost:8080/delete/1";

class DeleteArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = (title) => {
    console.log(title);
    const requestOptions = {
      method: "DELETE",
    };

    fetch(url + title, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log("successful delete");
      });
  };

  render() {
    return <div>{this.handleClick(this.props.title)}</div>;
  }
}

export default DeleteArticle;
