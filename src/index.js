import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import reportWebVitals from './reportWebVitals';

import './index.css';

import Layout from './pages/layout.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Login from './pages/login.jsx';
import Signup from "./pages/signup.jsx";
import Dashboard from "./pages/dashboard.jsx";
import NextShop from './pages/nextShop';
// import { Grid } from "@material-ui/core";
// import Header from "./components/Header";
// import Content from "./components/nextShopContentDisplay";
import AddItemPage from './pages/AddItemPage';
import RemoveItemPage from './pages/RemoveItemPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<LandingPage />} />
          <Route path="landingpage" element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="additem" element={<AddItemPage />} />
          <Route path="removeitem" element={<RemoveItemPage />} />
          {/* <Route path="homepage" element={<Homepage />} /> */}
          <Route path="homepage" element={<LandingPage />} />

          {/* for a 404 page
          <Route path="*" element={<NoPage />} />
          */}

        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
