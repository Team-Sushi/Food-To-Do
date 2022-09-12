import React from "react";

class LoginBox extends React.Component {

    render() {
        return (
            <div className='login'>
                <div class="login-signup-button">
                    <button>
                        <a href="/signup">Sign Up</a>
                        <span> | </span>
                        <a href="/login">Login</a>
                    </button>
                </div>
                <form action="login" method="POST" className="login-form">
                    <span>
                        <label for="email">
                            <i class="material-symbols-outlined">mail</i>Emails
                        </label>
                        <input className="login-fields" type="email" name="email" />
                    </span>

                    <span>
                        <label for="password">
                            <i class="material-symbols-outlined">lock</i>Password
                        </label>
                        <input className="login-fields" type="password" name="password" />
                    </span>

                    <span className="keep-signedin">
                        <label>Keep me signed in</label>
                        <input type='checkbox' name="signed-in" value="required" />
                    </span>

                    <input id="submit-button" type="submit" value="Login" />
                </form>
            </div>
        );
    }
}

export default LoginBox;