import React from "react";
import "./Button.css";

export const Login = () => {
  return (
    <div>
      <h2>Email</h2>
      <br />
      <form method="post" action="/rest/login">
        <table border="0">
          <tbody>
            <tr>
              <td>Username:</td>
              <td>
                <input
                  type="email"
                  name="email"
                  size="20"
                  autocorrect="off"
                  spellcheck="false"
                  autocapitalize="off"
                  autofocus="true"
                />
              </td>
            </tr>
            <tr>
              <td>Password:</td>
              <td>
                <input type="password" name="password" size="20" />
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <input className="btn btn-primary" type="submit" value="Login" />
      </form>
      <br />
      <a href="forgot">Forgot your password?</a>
      <br />
      <br />
      <br />
      <br />
      <h2>Create Account</h2>
      <br />
      <form method="post" action="/rest/signup">
        <table border="0">
          <tbody>
            <tr>
              <td>Username:</td>
              <td>
                <input
                  type="email"
                  name="email"
                  size="20"
                  autocorrect="off"
                  spellcheck="false"
                  autocapitalize="off"
                />
              </td>
            </tr>
            <tr>
              <td>Password:</td>
              <td>
                <input type="password" name="password" size="20" />
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <input
          className="btn btn-primary"
          type="submit"
          value="Create account"
        />
      </form>
    </div>
  );
};

export default Login;
