import React, { Component } from "react";
const url = "/rest/submit/post";

class PostArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      link: "",
      user: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    var formData = new FormData();
    formData.append("title", this.state.title);
    formData.append("link", this.state.link);
    formData.append("user", this.state.user);

    fetch(url, {
      method: "POST",
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
    const { title, link, user } = this.state;
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
          Post an Article
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
                <td>Title of Article:&nbsp;</td>
                <td>
                  <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={this.changeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>Article Link:</td>
                <td>
                  <input
                    type="text"
                    name="link"
                    value={link}
                    onChange={this.changeHandler}
                  />
                </td>
              </tr>
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

export default PostArticle;
