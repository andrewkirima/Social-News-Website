import React, { Component } from "react";
const url = "http://localhost:8080/add/comment";

class PostComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      text: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    var formData = new FormData();
    formData.append("user", this.state.user);
    formData.append("text", this.state.link);

    fetch(url, {
      method: "PUT",
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
    const { user, text } = this.state;
    return (
      <div>
        <h2>Post a Comment</h2>
        <br />
        <form onSubmit={this.submitHandler}>
          <table border="0">
            <tbody>
              <tr>
                <td>User Name:</td>
                <td>
                  <input
                    type="text"
                    name="user"
                    value={user}
                    onChange={this.changeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>Comment:</td>
                <td>
                  <input
                    type="text"
                    name="text"
                    value={text}
                    onChange={this.changeHandler}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <button className="btn btn-primary" type="submit">
            Post
          </button>
          <br />
          <br />
          <br />
        </form>
      </div>
    );
  }
}

export default PostComment;
