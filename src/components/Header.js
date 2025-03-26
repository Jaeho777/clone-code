import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header-bar">
      <div className="logo">Logo</div>
      <div className="header-right">
        <span className="icon">🔔</span>
        <span className="icon">📧</span>
        <span className="icon">⚙️</span>
      </div>
    </header>
  );
}

export default Header;
