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
        <span className="navbar-brand header-text">Arnold Schwarzenegger Movies</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="nav-link" onClick={handleHomeClick}>Home</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => setShowMovies(true)}>Movies</button>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
