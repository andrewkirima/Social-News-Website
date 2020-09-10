import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
