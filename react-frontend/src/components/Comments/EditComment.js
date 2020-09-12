import React, { Component } from "react";

const url = "http://localhost:8080/add/comment";

class EditComment extends Component {
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
    formData.append("post_title", this.state.post_title);

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
        <br />
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Update a Comment
        </h1>
        <br />
        <form onSubmit={this.submitHandler}>
          <table
            border="0"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <tbody>
              <tr>
                <td>User:</td>
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
                <td>Post Title:</td>
                <td>
                  <input
                    type="text"
                    name="text"
                    value={text}
                    onChange={this.changeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>Comment:&nbsp;</td>
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
          <br />
          <br />
          <br />
        </form>
      </div>
    );
  }
}

export default EditComment;
