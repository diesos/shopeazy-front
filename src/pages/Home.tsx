import React from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="./style/images/logo.png" alt="Logo" className="logo" />
          <span className="logo-text">ShopEazy</span>
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <h1>Bienvenue sur votre Liste de Courses</h1>
        <p>Gérez vos courses facilement et efficacement!</p>
        <Link to="/list" className="btn-primary">Commencer</Link>
      </div>

      
    </div>
  );
};

export default Home;