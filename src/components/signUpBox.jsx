import React from "react";
import axios from "axios";


class SignUpBox extends React.Component {
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
            .post('https://ftd-server.herokuapp.com/user/register', {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            })
            .then((response) => {
                console.log(response.status);
                console.log(response.data);
                alert(`Thank you for registering with us, ${response.data.firstName}!`);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div className='login-signup-box'>
                <div className="login-signup-button">
                    <button>
                        <a href="/signup" style={{ fontWeight: "bold", textDecoration: "underline" }}>Sign Up</a>
                        <span> | </span>
                        <a href="/login">Login</a>
                    </button>
                </div>
                <form onSubmit={this.handleSubmit} className="form">
                    <span className="form-fields">
                        <label for="firstName">
                            <i className="material-symbols-outlined">person</i>First Name
                        </label>
                        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                    </span>

                    <span className="form-fields">
                        <label for="lastName">
                            <i className="material-symbols-outlined">person</i>Family Name
                        </label>
                        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                    </span>

                    <span className="form-fields">
                        <label for="email">
                            <i className="material-symbols-outlined">mail</i>Email
                        </label>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </span>

                    <span className="form-fields">
                        <label for="password">
                            <i className="material-symbols-outlined">lock</i>Password
                        </label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </span>


                    <input id="submit-button" type="submit" value="Register" />
                </form>
            </div>
        );
    }

}

export default SignUpBox;