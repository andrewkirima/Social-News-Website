import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "./MenuItem";
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
        <Link to="/">
            <h1 className="navbar-logo">
              <i className="fas fa-newspaper"></i> Q-Insight
            </h1>
        </Link>
        <Link to="/login">
            <Button>Log-in</Button>
        </Link>
      </nav>
    );
  }
}

export default Navbar;

//<div className="menu-icon" onClick={this.handleClick}>
//          <i
//            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
//          ></i>
//        </div>
//        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
//          {MenuItem.map((item, index) => {
//            return (
//              <li key={index}>
//                <a className={item.cName} href={item.url}>
//                  {item.title}
//                </a>
//              </li>
//            );
//          })}
//        </ul>
//        <Button>Sign Up</Button>
