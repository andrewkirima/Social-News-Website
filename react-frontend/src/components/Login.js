import React, { Component } from "react";

const url = '/rest/login'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            account: {},
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmitLogin = (e) => {
        e.preventDefault();
        var formData = new FormData();
        formData.append('email', this.state.email);
        formData.append('password', this.state.password);

        const requestOptions = {
            method: 'POST',
            body: formData
        };

        fetch('/rest/login', requestOptions)
            .then(response => {
                console.log(response.status);
                console.log(response.data);
                this.setState({account: response.data});
                return response.json();
            })
            .catch(function(error) {
                console.log('Request failed', error)
            });
    }

    handleSubmitSignup = (e) => {
        e.preventDefault();
        var formData = new FormData();
        formData.append('email', this.state.email);
        formData.append('password', this.state.password);

        const requestOptions = {
            method: 'POST',
            body: formData
        };

        fetch('/rest/signup', requestOptions)
            .then(response => {
                console.log(response.status);
                console.log(response.data);
                this.setState({account: response.data});
                return response.json();
            })
            .catch(function(error) {
                console.log('Request failed', error)
            });
    }

    render() {
     const email = this.state.email;
     const password = this.state.password;
     return (  <div>
            <b>Email</b>
            <br/>
            <br/>
            <form onSubmit={this.handleSubmitLogin}>
                <table border="0">
                    <tbody>
                        <tr>
                            <td>username:</td>
                            <td>
                                <input type="email" name="email" size="20" autocorrect="off" spellcheck="false"
                                       autocapitalize="off" value={email} onChange={this.handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>password:</td>
                            <td>
                                <input type="password" name="password" size="20"
                                       required value={password} onChange={this.handleChange}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <input type="submit" value="login"/>
            </form>
            <a href="forgot">Forgot your password?</a>
            <br/>
            <br/>
            <b>Create Account</b>
            <br/>
            <br/>
            <form onSubmit={this.handleSubmitSignup}>
                <table border="0">
                    <tbody>
                        <tr>
                            <td>username:</td>
                            <td>
                                <input type="email" name="email" size="20" autocorrect="off" spellcheck="false"
                                       autocapitalize="off" value={email} onChange={this.handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>password:</td>
                            <td>
                                <input type="password" name="password" size="20"
                                       required value={password} onChange={this.handleChange}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <input type="submit" value="create account"/>
            </form>
        </div>);
    }
}

export default Login;
