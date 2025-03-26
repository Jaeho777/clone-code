import React from "react";
import "../styles/main.css"; // Import the stylesheet

function App() {
  return (
    <div className="dashboard-container">
      {/* Top Header */}
      <header className="header">
        <div className="header-left">Logo</div>
        <div className="header-right"></div>
      </header>

      {/* Main Wrapper: Sidebar + Content */}
      <div className="main-wrapper">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="profile-section">
            <img
              className="profile-img"
              src="https://via.placeholder.com/50"
              alt="Profile"
            />
            <div className="profile-info">
              <span>Welcome, Mike</span>
            </div>
            <div className="profile-icons">
              <i className="fa fa-envelope" />
              <i className="fa fa-user" />
              <i className="fa fa-cog" />
            </div>
          </div>
          <nav className="nav-menu">
            <ul>
              <li className="active"><i className="fa fa-home" /> Overview</li>
              <li><i className="fa fa-eye" /> Views</li>
              <li><i className="fa fa-chart-line" /> Traffic</li>
              <li><i className="fa fa-globe" /> Geo</li>
              <li><i className="fa fa-shopping-cart" /> Orders</li>
              <li><i className="fa fa-newspaper" /> News</li>
              <li><i className="fa fa-building" /> General</li>
              <li><i className="fa fa-history" /> History</li>
              <li><i className="fa fa-cogs" /> Settings</li>
            </ul>
          </nav>
        </aside>

        {/* Main Content Area */}
        <section className="content">
          <h2 className="dashboard-title">My Dashboard</h2>
          <div className="cards-row">
            <div className="info-card red">
              <h3>Messages</h3>
              <span className="number">52</span>
            </div>
            <div className="info-card blue">
              <h3>Views</h3>
              <span className="number">99</span>
            </div>
            <div className="info-card teal">
              <h3>Shares</h3>
              <span className="number">23</span>
            </div>
            <div className="info-card orange">
              <h3>Users</h3>
              <span className="number">50</span>
            </div>
          </div>

          {/* Regions & Feeds Row */}
          <div className="row">
            {/* Regions (Map) */}
            <div className="regions">
              <h3>Regions</h3>
              <img
                src="https://via.placeholder.com/400x200/cccccc?text=Map+Placeholder"
                alt="Map"
                className="map"
              />
            </div>

            {/* Feeds */}
            <div className="feeds">
              <h3>Feeds</h3>
              <ul>
                <li>
                  <i className="fa fa-user" /> New record, over 90 views.
                  <span className="time">10 mins</span>
                </li>
                <li>
                  <i className="fa fa-bell" /> Database error.
                  <span className="time">15 mins</span>
                </li>
                <li>
                  <i className="fa fa-users" /> New record, over 40 users.
                  <span className="time">17 mins</span>
                </li>
                <li>
                  <i className="fa fa-comment" /> New comments.
                  <span className="time">25 mins</span>
                </li>
                <li>
                  <i className="fa fa-bookmark" /> Check transactions.
                  <span className="time">28 mins</span>
                </li>
                <li>
                  <i className="fa fa-desktop" /> CPU overload.
                  <span className="time">35 mins</span>
                </li>
                <li>
                  <i className="fa fa-share-alt" /> New shares.
                  <span className="time">39 mins</span>
                </li>
              </ul>
            </div>
          </div>

          {/* General Stats */}
          <div className="general-stats">
            <h3>General Stats</h3>
            <div className="stat-item">
              <div className="stat-label">New Visitors</div>
              <div className="stat-bar">
                <div className="progress" style={{ width: "25%" }}>
                  +25%
                </div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-label">New Users</div>
              <div className="stat-bar">
                <div className="progress" style={{ width: "40%" }}>
                  +40%
                </div>
              </div>
            </div>
            {/* Add more stats as needed */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
