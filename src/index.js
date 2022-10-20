import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom"
import './index.css';

import Layout from './pages/layout.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Login from './pages/login.jsx';
import Signup from "./pages/signup.jsx";
import Dashboard from "./pages/dashboard.jsx";
import AddItemPage from './pages/AddItemPage';
import RemoveItemPage from './pages/RemoveItemPage';
import AllItems from './pages/allItems';
import TestItem from './pages/testItem';
import NextShop from './pages/nextShop';
import RecentlyPurchased from './pages/recentlyPurchased';
import Favorites from './pages/favorites';
import Category from './pages/category';

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
          <Route path="nextshop" element={<NextShop />} />
          <Route path="recentlypurchased" element={<RecentlyPurchased />} />
          <Route path="favourites" element={<Favorites />} />
          <Route path="allitems" element={<AllItems />} />

          {/* <Route path="test-item" element={<TestItem />} /> */}

          <Route path="/item/:id" element={<TestItem />} />

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

