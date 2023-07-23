import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ showMovies, setShowMovies, setShowSeries }) => { 
  const handleHomeClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setShowMovies(false);
    setShowSeries(false); 
  };

  return (
    <header className="header" style={{ backgroundColor: "#333", padding: "20px", color: "#fff" }}>
      <div className="header-title" style={{ fontSize: "24px", fontWeight: "bold" }}>
        Arnold Schwarzenegger Movies and Series
      </div>
      <nav className="header-nav" style={{ display: "flex" }}>
       
        <Link className="header-link" style={{ marginLeft: "10px", color: "#fff", textDecoration: "none" }} to="/home">
          Home
        </Link>
        <Link to="/movies" className="header-link" style={{ marginLeft: "10px", color: "#fff", textDecoration: "none", background: "none", border: "none" }} onClick={() => { setShowMovies(true); setShowSeries(false); }}>
          Movies
        </Link>
        <Link to="/series" className="header-link" style={{ marginLeft: "10px", color: "#fff", textDecoration: "none", background: "none", border: "none" }} onClick={() => { setShowMovies(false); setShowSeries(true); }}>
          Series
        </Link> 
      </nav>
    </header>
  );
}

export default Header;
