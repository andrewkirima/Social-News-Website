import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { MenuItem } from "./MenuItem";
import { Button } from "../Button";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <Link className="link-item" to="/">
          <h1 className="navbar-logo">
            <i className="fas fa-newspaper"></i> Q-Insight
          </h1>
        </Link>
        <Link className="link-item-center" to="/articlespage">
          &nbsp;&nbsp;<Button id="articleButton">Articles</Button>&nbsp;
        </Link>
        <Link className="link-item" to="/commentspage">
          <Button>Comments</Button>&nbsp;
        </Link>
        <Link className="link-item-right" to="/login">
          <Button>Log-in</Button>&nbsp;
        </Link>
      </nav>
    );
  }
}

export default Navbar;
