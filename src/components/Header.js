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
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
      <div className="container-fluid">
      <div className="navbar-title">
      
          <span className="navbar-brand header-text">Arnold Schwarzenegger Movies</span>
        </div>
        <div className="navbar-buttons">
          <button className="nav-link" onClick={handleHomeClick}>Home</button>
          <button className="nav-link" onClick={() => setShowMovies(true)}>Movies</button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
