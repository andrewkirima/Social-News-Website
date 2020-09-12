import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login";
// import Dashboard from "./components/Dashboard/Dashboard";
import ArticlesPage from "./components/ArticlesPage";
// import CommentsPage from "./components/CommentsPage";
import Notfound from "./Notfound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    console.log("in handle login:  ");
    this.setState({
      isLoggedIn: true,
    });
  }

  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            <Navbar />
            <div>
              <Route
                exact
                path={"/"}
                render={(props) => (
                  <Login
                    {...props}
                    isLoggedIn={this.state.isLoggedIn}
                    handleLogin={this.handleLogin}
                  />
                )}
              />
              <Route path="/login" component={Login} />
              <Route path="/articlespage" component={ArticlesPage} />
              {/* <Route path="/commentspage" component={CommentsPage} /> */}
              {/* <Route exact path="/dashboard" component={Dashboard} /> */}
              <Route component={Notfound} />
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
