import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar.tsx"; 
import "../style/Home.css";
interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="home-container">
      <Navbar />

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