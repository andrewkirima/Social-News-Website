import React, { Component } from "react";

const url = "http://localhost:8080/add/upvotes";

class Upvote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      upvotes: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    var formData = new FormData();
    formData.append("upvotes", this.state.upvotes);

    fetch(url, {
      method: "GET",
      body: formData,
    })
      .then((response) => {
        response.json();
      })

      .catch((error) => {
        console.log("Error: ", error);
      })
      .then((response) => console.log("Success: ", JSON.stringify(response)));
  };

  render() {
    return <div></div>;
    //   Logic missing
  }
}

export default Upvote;
