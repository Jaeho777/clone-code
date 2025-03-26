import React from 'react';
import './Dashboard.css';

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

      <div className="content-row">
        {/* 왼쪽: 간단한 월드맵 또는 지역 분포 이미지(데모) */}
        <div className="map-section">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e6/BlankMap-World-v2.png"
            alt="World Map"
            style={{ width: '100%' }}
          />
        </div>
        {/* 오른쪽: Feeds 리스트 */}
        <div className="feeds-section">
          <ul>
            <li>
              <span>New record, over 90 views.</span> <small>10 mins</small>
            </li>
            <li>
              <span>Database error.</span> <small>15 mins</small>
            </li>
            <li>
              <span>New record, over 40 users.</span> <small>17 mins</small>
            </li>
            <li>
              <span>New comments.</span> <small>25 mins</small>
            </li>
            <li>
              <span>Check transactions.</span> <small>28 mins</small>
            </li>
            <li>
              <span>CPU overload.</span> <small>35 mins</small>
            </li>
            <li>
              <span>New shares.</span> <small>39 mins</small>
            </li>
          </ul>
        </div>
      </div>

      <div className="general-stats">
        <h3>General Stats</h3>
        <div className="stat-bar">
          <span>New Visitors</span>
          <div className="bar">
            <div className="bar-filled" style={{ width: '25%' }}>+25%</div>
          </div>
        </div>
        {/* 추가 지표들... */}
      </div>
    </div>
  );
}

export default Dashboard;
