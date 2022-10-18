import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginBox() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios
        // https://ftd-server.herokuapp.com/user/login
        // http://localhost:3012/user/login
            .post('https://ftd-server.herokuapp.com/user/login', {
                email: email,
                password: password
            }, {
                withCredentials: true
            })
            .then((response) => {
                if (response.data === false) {
                    console.log(response.status);
                    alert(`Incorrect credentials, please try again!`);
                }
                else {
                    console.log(response);
                    alert(`You've logged in successfully, ${response.data.firstName}!`);
                    navigate("/dashboard");
                }
                
            })
            .catch((err) => {
                console.log(err);
            })
    }
 
    return (
        <div className='login-signup-box'>
            <div className="login-signup-button">
                <button>
                    <a href="/signup">Sign Up</a>
                    <span> | </span>
                    <a href="/login" style={{ fontWeight: "bold", textDecoration: "underline" }}>Login</a>
                </button>
            </div>
            <form onSubmit={handleSubmit} className="form">
                <span className="form-fields">
                    <label htmlFor="email">
                        <i className="material-symbols-outlined">mail</i>Email
                    </label>
                    <input type="email" name="email" value={email} onChange={handleEmail} />
                </span>

                <span className="form-fields">
                    <label htmlFor="password">
                        <i className="material-symbols-outlined">lock</i>Password
                    </label>
                    <input type="password" name="password" value={password} onChange={handlePassword} />
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

export default LoginBox;