import React from "react";
import { Home } from "../pages/Home";
import { ItemPage } from "../pages/ItemPage";
import { CreateProduct } from "../pages/CreateProduct";
import { ShoppingCart } from "../pages/ShoppingCart";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../index.css";

export default function Navbar ({ user }) {
  return (
    <nav>
      {!user && (
        <>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </>
      )}
      {user && (
        <>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/create" element={<CreateProduct />} />
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/itempage/:id" element={<ItemPage />} />
          </Routes>
          <Footer />
        </div>
        </>
      )}
    </nav>
  );
};
