import React from 'react';
import {useEffect} from 'react';
import LoginBox from '../components/loginBox';
import Navbar from "../components/navbar.jsx";
import './loginSignUp.css';
import '../components/navbar.css'

function Login() {
  useEffect(() => {
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80')";
    document.body.style.backgroundSize = "cover";
    return () => {
      document.body.style.backgroundImage = 'none';
    };

  }, []);

  return (
    <div>
      <Navbar />
      <LoginBox />
    </div>
  );
}

export default Login;
