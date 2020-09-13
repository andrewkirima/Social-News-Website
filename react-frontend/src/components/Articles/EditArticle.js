import React, { Component } from "react";

const url = "/rest/submit/post";

class EditArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      link: "",
      oldTitle: "",
      oldLink: "",
      user: "",
    };
  }

  componentDidMount() {
    this.setState({ oldTitle: this.props.title });
    this.setState({ oldLink: this.props.link});
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    var formData = new FormData();
    if(this.state.title != "") {formData.append("new_title", this.state.title);}
    formData.append("title", this.props.title);
    this.state.link == "" ? formData.append("link", this.props.link) : formData.append("link", this.state.link);

    fetch(url, {
      //userid stores the id of the post user wanted to update
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
          Update a Post
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
                <td>New Title:&nbsp;</td>
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
                <td>New Link:</td>
                <td>
                  <input
                    type="text"
                    name="link"
                    value={link}
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
              Update
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
export default EditArticle;
