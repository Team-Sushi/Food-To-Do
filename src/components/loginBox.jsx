import React from "react";

class LoginBox extends React.Component {

    render() {
        return (
            <div className='login-signup-box'>
                <div class="login-signup-button">
                    <button>
                        <a href="/signup">Sign Up</a>
                        <span> | </span>
                        <a href="/login" style={{fontWeight: "bold", textDecoration: "underline"}}>Login</a>
                    </button>
                </div>
                <form action="login" method="POST" className="form">
                    <span className="form-fields">
                        <label for="email">
                            <i className="material-symbols-outlined">mail</i>Email
                        </label>
                        <input type="email" name="email" />
                    </span>

                    <span className="form-fields">
                        <label for="password">
                            <i className="material-symbols-outlined">lock</i>Password
                        </label>
                        <input type="password" name="password" />
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