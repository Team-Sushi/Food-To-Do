import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function SignUpBox() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleFirstName(e) {
        setFirstName(e.target.value);
    }

    function handleLastName(e) {
        setLastName(e.target.value);
    }
    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios
        // https://ftd-server.herokuapp.com/user/register
            .post('http://localhost:3012/user/register', {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            })
            .then((response) => {
                console.log(response.status);
                console.log(response.data);
                alert(`Thank you for registering with us, ${response.data.firstName}!`);
                navigate("/login")
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <div className='login-signup-box'>
            <div className="login-signup-button">
                <button>
                    <a href="/signup" style={{ fontWeight: "bold", textDecoration: "underline" }}>Sign Up</a>
                    <span> | </span>
                    <a href="/login">Login</a>
                </button>
            </div>
            <form onSubmit={handleSubmit} className="form">
                <span className="form-fields">
                    <label for="firstName">
                        <i className="material-symbols-outlined">person</i>First Name
                    </label>
                    <input type="text" name="firstName" value={firstName} onChange={handleFirstName} />
                </span>

                <span className="form-fields">
                    <label for="lastName">
                        <i className="material-symbols-outlined">person</i>Family Name
                    </label>
                    <input type="text" name="lastName" value={lastName} onChange={handleLastName} />
                </span>

                <span className="form-fields">
                    <label for="email">
                        <i className="material-symbols-outlined">mail</i>Email
                    </label>
                    <input type="email" name="email" value={email} onChange={handleEmail} />
                </span>

                <span className="form-fields">
                    <label for="password">
                        <i className="material-symbols-outlined">lock</i>Password
                    </label>
                    <input type="password" name="password" value={password} onChange={handlePassword} />
                </span>


                <input id="submit-button" type="submit" value="Register" />
            </form>
        </div>
    );
    

}

export default SignUpBox;