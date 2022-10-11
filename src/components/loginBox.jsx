import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

class LoginBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/user/login', {
                email: this.state.email,
                password: this.state.password
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
                }
                
            })
            .catch((err) => {
                console.log(err);
            })
    }

    componentDidMount() {
        document.body.style.backgroundImage = "url('background1.jpg')";
    }

    componentWillUnmount() {
        document.body.style.backgroundImage = 'none';
    }

    render() {
        return (
            <div className='login-signup-box'>
                <div className="login-signup-button">
                    <button>
                        <a href="/signup">Sign Up</a>
                        <span> | </span>
                        <a href="/login" style={{ fontWeight: "bold", textDecoration: "underline" }}>Login</a>
                    </button>
                </div>
                <form onSubmit={this.handleSubmit} className="form">
                    <span className="form-fields">
                        <label htmlFor="email">
                            <i className="material-symbols-outlined">mail</i>Email
                        </label>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </span>

                    <span className="form-fields">
                        <label htmlFor="password">
                            <i className="material-symbols-outlined">lock</i>Password
                        </label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
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