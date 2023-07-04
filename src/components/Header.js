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
        <button className="header-link" style={{ marginLeft: "10px", color: "#fff", textDecoration: "none", background: "none", border: "none" }} onClick={handleHomeClick}>
          Home
        </button>
        <button className="header-link" style={{ marginLeft: "10px", color: "#fff", textDecoration: "none", background: "none", border: "none" }} onClick={() => setShowMovies(true)}>
          Movies
        </button>
      </nav>
    </header>
  );
}

export default Header;
