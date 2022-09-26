import React from 'react';
import LoginBox from '../components/loginBox';
import Navbar from "../components/navbar.jsx";
import './loginSignUp.css';
import '../components/navbar.css'

function login() {
  return (
    <div>
      <Navbar />
      <LoginBox />
    </div>
  );
}

export default login;
