import React from 'react';
import './Dashboard.css';
import Overview from './Overview';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>My Dashboard</h1>
      
      <div className="stats-cards">
        <div className="card red">
          <p>Messages</p>
          <h2>52</h2>
        </div>
        <div className="card blue">
          <p>Views</p>
          <h2>99</h2>
        </div>
        <div className="card green">
          <p>Shares</p>
          <h2>23</h2>
        </div>
        <div className="card orange">
          <p>Users</p>
          <h2>50</h2>
        </div>
      </div>

      <Overview />
    </div>
  );
}

export default Dashboard;
