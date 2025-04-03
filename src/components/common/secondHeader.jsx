import React from 'react';
import { useNavigate } from 'react-router';



const Navbar = () => {

    const navigate = useNavigate()

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <div className="logo" onClick={() => navigate('/')}>
            <span className="logo-text">◈TrackMaster</span>
          </div>
          
          <div className="nav-buttons">
            <button className="login-button">Log in</button>
            <button className="trial-button">Start Free Trial</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;