import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login";
// import Dashboard from "./components/Dashboard";
import ArticlesPage from "./components/ArticlesPage";
import CommentsPage from "./components/CommentsPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/login" component={Login} />
        <Route path="/articlespage" component={ArticlesPage} />
        <Route path="/commentspage" component={CommentsPage} />
      </div>
    </Router>
  );
}

export default App;
