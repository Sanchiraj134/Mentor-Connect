import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  const location = useLocation();
  const authPages= ["/login", "/register", "/mentors", "/dashboard"];
  const isColoredNavbar = authPages.includes(location.pathname);

return(
  <nav className={`navbar ${isColoredNavbar ? "auth-navbar" : ""}`}>
    <div className="left-links">
      <Link to="/">Home</Link>
      <Link to="/mentors">Mentors</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
    <div className="right-links">
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  </nav>
);
};

export default Navbar;
