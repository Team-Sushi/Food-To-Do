import React from 'react';
import {useEffect} from 'react';
import AddItemRequest from '../components/AddItemRequest.jsx';
import './AddItemPage.css';
import Navbar from "../components/navbar.jsx";
import '../components/navbar.css'

function AddItemPage() {
  useEffect(() => {
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1543353071-10c8ba85a904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')";
    document.body.style.backgroundSize = "cover";
    return () => {
      document.body.style.backgroundImage = 'none';
    };

  }, []);

  return (
    <div>
      <Navbar />
      <AddItemRequest />
    </div>
  );
}

export default AddItemPage;