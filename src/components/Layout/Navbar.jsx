import React from 'react';
import './Navbar.css';
import ToggleSwitch from './ToggleSwitch';

const Navbar = ({ toggleSidebar, toggleDarkMode }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button onClick={toggleSidebar} className="menu-button">☰</button>
        <img src="logo.png" alt="Dompet" className="logo" />
      </div>
      <div className="navbar-right">
        <input type="text" placeholder="Search here..." className="search-input" />
        <div className="navbar-icons">
          <ToggleSwitch toggleDarkMode={toggleDarkMode} />
          <span className="icon">🔔</span>
          <span className="icon">📚</span>
          <span className="icon">✉️</span>
          <button className="generate-report-btn">Generate Report</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;






