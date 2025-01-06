import React from 'react';
import { Link } from 'react-router-dom';
import "../style/Navbar.css";
const Navbar: React.FC = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          {/* LOGO */}
         
          <span className="logo-text">ShopEazy</span>
        </div>
        <ul className="navbar-links">
          <li><Link to="/home">Accueil</Link></li>
          <li><Link to="/profile">Profil</Link></li>
          <li><Link to="/settings">Paramètres</Link></li>
          <li><Link to="/">Quitter</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;