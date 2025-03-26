import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img
          className="avatar"
          src="/components/w3school/avatar2.png"
        />
        <div className="header-text">
          <h2>Welcome, Mike</h2>
          <div className="header-icons">
           
          </div>
        </div>
      </div>

      <ul className="menu">
        <li>Overview</li>
        <li>Views</li>
        <li>Traffic</li>
        <li>Geo</li>
        <li>Orders</li>
        <li>News</li>
        <li>General</li>
        <li>History</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
