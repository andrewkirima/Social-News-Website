import React, { Component } from 'react';
import Signup from '../Signup/Signup';
import { Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { Redirect } from "react-router-dom";

const url = 'http://localhost:8080'  //change this to new REST endpoint

class Login extends Component { // Class -> Stateful Component
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            found: 0,
        };
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);

       // this.setState({ found: this.state.found+1}); to test if routing works

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'mode': 'no-cors' },
          body: JSON.stringify(this.state)
      };
      fetch(url,requestOptions)
        .then(response => {
          return response.json();
        })
        .then(data =>  {
          this.setState({ found: data.found});
          this.props.handleLogin();
        })
        .catch(function(error) {
          console.log('Request failed', error)
        });
    }
    
    render() {
        const {email, password, found} = this.state;
        if(found == 0) {
        return (
            <div>
                <Navbar/>
            <div>Login</div>
            <div>
                <form  onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input type="text" name="email" required value={email} onChange={this.handleChange}/>
                    <label>Password</label>
                    <input type="password" name="password" required value={password} onChange={this.handleChange}/>
                    <div className="lower">
                        <input type="submit" value="Login"/>
                    </div> 
                </form>
            </div>
            <Signup />
            </div>
          
            )
        }
        if(found == 2) {
            return (
                <div>     
                     <Navbar/>         
                 <div> Invalid Credentials </div>
                <div>Login</div>
                <div className="container">
                    <form  onSubmit={this.handleSubmit}>
                        <label>Email</label>
                        <input type="text" name="email" value={email} onChange={this.handleChange}/>
                        <label>Password</label>
                        <input type="password" name="password" value={password} onChange={this.handleChange}/>
                        <div className="lower">
                            <input type="submit" value="Login"/>
                        </div> 
                    </form>
                </div>
                </div>
                )
            }
        if(found == 1)
        {
            return(
                // <div>SEND TO DASHBOARD</div>
                <Redirect to={{
                    pathname: '/dashboard',   
                    state: { email: email }
                }}/>
            )
        }
    }
}

export default Login;