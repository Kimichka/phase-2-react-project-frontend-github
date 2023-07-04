import React from 'react';

const Header = ({ showMovies, setShowMovies }) => {
  const handleHomeClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setShowMovies(false);
  };

  return (
    <header className="header" style={{ backgroundColor: "#333", padding: "20px", color: "#fff" }}>
      <div className="header-title" style={{ fontSize: "24px", fontWeight: "bold" }}>
        Arnold Schwarzenegger Movies
      </div>
      <nav className="header-nav" style={{ display: "flex" }}>
        <a href="#" className="header-link" style={{ marginLeft: "10px", color: "#fff", textDecoration: "none" }} onClick={handleHomeClick}>
          Home
        </a>
        <a href="#" className="header-link" style={{ marginLeft: "10px", color: "#fff", textDecoration: "none" }} onClick={() => setShowMovies(true)}>
          Movies
        </a>
      </nav>
    </header>
  );
}

export default Header;
