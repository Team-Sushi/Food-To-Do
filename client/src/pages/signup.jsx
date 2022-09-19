import React from 'react';
import SignUpBox from '../components/signUpBox';
import Navbar from "../components/navbar.jsx";
import './loginSignUp.css';
import '../components/navbar.css'

function signup() {
  return (
    <div>
      <Navbar />
      <SignUpBox />
    </div>
  );
}

export default signup;
