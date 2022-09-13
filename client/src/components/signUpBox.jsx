import React from "react";

class SignUpBox extends React.Component {

    render() {
        return (
            <div className='login-signup-box'>
                <div class="login-signup-button">
                    <button>
                        <a href="/signup" style={{fontWeight: "bold", textDecoration: "underline"}}>Sign Up</a>
                        <span> | </span>
                        <a href="/login">Login</a>
                    </button>
                </div>
                <form action="signup" method="POST" className="form">
                    <span className="form-fields">
                        <label for="firstname">
                            <i className="material-symbols-outlined">person</i>First Name
                        </label>
                        <input type="text" name="firstname" />
                    </span>

                    <span className="form-fields">
                        <label for="familyname">
                            <i className="material-symbols-outlined">person</i>Family Name
                        </label>
                        <input type="text" name="familyname" />
                    </span>

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

                    
                    <input id="submit-button" type="submit" value="Register" />
                </form>
            </div>
        );
    }
}

export default SignUpBox;