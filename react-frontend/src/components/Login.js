import React from "react";
import "./Button.css";

export const Login = () => {
  return (
    <div>
      <br />
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Email
      </h2>
      <br />
      <form method="POST" action="/rest/login">
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
              <td>Username:&nbsp;</td>
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      <br />
      <a
        href="forgot"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Forgot your password?
      </a>
      <br />
      <br />
      <br />
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Create Account
      </h2>
      <br />
      <form method="POST" action="/rest/signup">
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
              <td>Username:&nbsp;</td>
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            className="btn btn-primary"
            type="submit"
            value="Create account"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
