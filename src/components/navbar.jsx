import React from "react";
import logo from './foodToDoLogo.png';

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = { show: "none" };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        const newShow = this.state.show === "none" ? "block" : "none";
        this.setState({ show: newShow });
    }

    render() {

        return (
            <div className="ham-nav">
                <a href="/" className="nav-bar-logo"><img src={logo} alt="Food To Do" /></a>

                <a onClick={() => this.toggleNav()} className="ham-icon">
                    <span className="material-symbols-outlined">menu</span></a>

                <div style={{display: this.state.show}}>
                    <a href="/">Landing Page</a>
                    <a href="/dashboard">Dashboard</a>
                    <a href="/login">Login</a>
                    <a href="/signup">Register</a>
                </div>


            </div>
        );
    }
}
// eslint-disable-next-line
export default Navbar;