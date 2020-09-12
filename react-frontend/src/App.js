// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Signinpg from './components/Signinpg'
// import Navbar from './components/Navbar/Navbar'
// import Dasboard from './components/Dashbaord/Dashboard'
// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashbaord/Dashboard';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Notfound from './Notfound';
import './App.css';
import { Navbar } from 'react-bootstrap';

class App extends Component { 
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    }
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin() {
    console.log("in handle login:  ")
    this.setState({
      isLoggedIn: true     
    });
  }

  render() {
  return (
    <Router>  
    <Switch>
      <Route exact path={"/"}
            render={props => (
              <Login
                {...props}
                isLoggedIn={this.state.isLoggedIn}
                handleLogin={this.handleLogin}
              />
            )}
      />
      {/* <Route exact path="/signup" component={Signup} />
      {this.state.isLoggedIn &&  */}
      <Route exact path="/dashboard" component={Dashboard} />
      {/* } */}
      <Route component={Notfound}/>
    </Switch>
  </Router>
 
  );
  }
}


export default App;







// <Navbar />
      {/* <Signinpg/> */}
      // <Dasboard />