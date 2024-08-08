import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/sylani-logo.png" alt="Saylani Logo" className="logo" />
      </div>
      <nav className="nav">
        <Link to="/login" className="login-button">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
