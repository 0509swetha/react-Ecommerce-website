import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="categories">
      <Link to="/"> Shop </Link>
      <Link to="/men">Men</Link>
      <Link to="/women">Women</Link>
      
    </div>
      <div className="links">
        
        <Link to="/contact"> Contact </Link>
        <Link to="/Register"> Register </Link>
        <Link to="/SignIn">SignIn</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
      
    </div>
  );
};
