import React from "react";

export const Login = () => {
  return (
    <div>
        <b>Email</b>
        <br/>
        <br/>
        <form method="post" action="login">
            <table border="0">
                <tbody>
                    <tr>
                        <td>username:</td>
                        <td>
                            <input type="email" name="email" size="20" autocorrect="off" spellcheck="false" autocapitalize="off" autofocus="true"/>
                        </td>
                    </tr>
                    <tr>
                        <td>password:</td>
                        <td>
                            <input type="password" name="password" size="20"/>
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
        <form method="post" action="login">
            <table border="0">
                <tbody>
                    <tr>
                        <td>username:</td>
                        <td>
                            <input type="email" name="email" size="20" autocorrect="off" spellcheck="false" autocapitalize="off"/>
                        </td>
                    </tr>
                    <tr>
                        <td>password:</td>
                        <td>
                            <input type="password" name="password" size="20"/>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <input type="submit" value="create account"/>
        </form>
    </div>
  );
};

export default Login;
