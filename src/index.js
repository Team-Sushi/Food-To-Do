import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom"
import axios from "axios";
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
import RecentlyPurchased from './pages/recentlyPurchased';
import AllItems from './pages/allItems';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<LandingPage />} />
          <Route path="landingpage" element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
<<<<<<< HEAD
          <Route path="nextshoppinglist" element={<NextShop />} />
          <Route path="recentlypurchased" element={<RecentlyPurchased />} />
          <Route path="items" element={<AllItems />} />
          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="additem"
            element={
              <RequireAuth>
                <AddItemPage />
              </RequireAuth>
            }
          />
          <Route
            path="removeitem"
            element={
              <RequireAuth>
                <RemoveItemPage />
              </RequireAuth>
            }
          />
=======
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="additem" element={<AddItemPage />} />
          <Route path="removeitem" element={<RemoveItemPage />} />
>>>>>>> main

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

