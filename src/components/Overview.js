import React from "react"
import "./Overview.css"

function Overview() {
  const recentUsers = [
    { id: 1, name: "Mike", avatar: "/components/w3school/avatar2.png" },
    { id: 2, name: "Jill", avatar: "/components/w3school/avatar5.png" },
    { id: 3, name: "Jane", avatar: "/components/w3school/avatar6.png" }
  ]
  const recentComments = [
    {
      id: 1,
      name: "John",
      date: "Sep 29, 2014, 9:12 PM",
      avatar: "/components/w3school/avatar3.png",
      text: "Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet..."
    },
    {
      id: 2,
      name: "Bo",
      date: "Sep 28, 2014, 10:15 PM",
      avatar: "/components/w3school/avatar1.png",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
    }
  ]
  return (
    <div className="overview-container">
      <div className="bars-section">
        <div className="bar-block">
          <label>New Users</label>
          <div className="bar green">
            <div className="bar-fill" style={{ width: "25%" }}>25%</div>
          </div>
        </div>
        <div className="bar-block">
          <label>New Users</label>
          <div className="bar orange">
            <div className="bar-fill" style={{ width: "50%" }}>50%</div>
          </div>
        </div>
        <div className="bar-block">
          <label>Bounce Rate</label>
          <div className="bar red">
            <div className="bar-fill" style={{ width: "75%" }}>75%</div>
          </div>
        </div>
      </div>
      <div className="dashboard-main">
        <div className="dashboard-regions">
          <h2>Regions</h2>
          <img src="/components/w3school/region.jpg" alt="Map" className="regions-map" />
        </div>
        <div className="dashboard-feeds">
          <h2>Feeds</h2>
          <div className="feed-item">
            <span className="feed-icon">👤</span>
            <div className="feed-text">New record, over 90 views.</div>
            <div className="feed-time">10 mins</div>
          </div>
          <div className="feed-item">
            <span className="feed-icon">🔔</span>
            <div className="feed-text">Database error.</div>
            <div className="feed-time">15 mins</div>
          </div>
          <div className="feed-item">
            <span className="feed-icon">👥</span>
            <div className="feed-text">New record, over 40 users.</div>
            <div className="feed-time">17 mins</div>
          </div>
          <div className="feed-item">
            <span className="feed-icon">💬</span>
            <div className="feed-text">New comments.</div>
            <div className="feed-time">25 mins</div>
          </div>
          <div className="feed-item">
            <span className="feed-icon">🔖</span>
            <div className="feed-text">Check transactions.</div>
            <div className="feed-time">28 mins</div>
          </div>
          <div className="feed-item">
            <span className="feed-icon">💻</span>
            <div className="feed-text">CPU overload.</div>
            <div className="feed-time">35 mins</div>
          </div>
          <div className="feed-item">
            <span className="feed-icon">🔗</span>
            <div className="feed-text">New shares.</div>
            <div className="feed-time">39 mins</div>
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <div className="countries-panel">
          <h3>Countries</h3>
          <table className="countries-table">
            <thead>
              <tr>
                <th>Country</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>United States</td>
                <td>65%</td>
              </tr>
              <tr>
                <td>UK</td>
                <td>15.7%</td>
              </tr>
              <tr>
                <td>Russia</td>
                <td>5.6%</td>
              </tr>
              <tr>
                <td>Spain</td>
                <td>2.1%</td>
              </tr>
              <tr>
                <td>India</td>
                <td>1.9%</td>
              </tr>
              <tr>
                <td>France</td>
                <td>1.5%</td>
              </tr>
            </tbody>
          </table>
          <button className="more-btn">More Countries ➔</button>
        </div>
        <div className="recent-users-section">
          <h3>Recent Users</h3>
          <div className="recent-users-card">
            {recentUsers.map(user => (
              <div className="recent-user-item" key={user.id}>
                <img src={user.avatar} alt={user.name} className="recent-user-avatar" />
                <span className="recent-user-name">{user.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="recent-comments-section">
        <h3>Recent Comments</h3>
        {recentComments.map(comment => (
          <div className="comment-item" key={comment.id}>
            <div className="comment-avatar">
              <img src={comment.avatar} alt={comment.name} />
            </div>
            <div className="comment-content">
              <div className="comment-header">
                <span className="comment-author">{comment.name}</span>
                <span className="comment-date">{comment.date}</span>
              </div>
              <div className="comment-text">{comment.text}</div>
            </div>
          </div>
        ))}
      </div>
      <FooterStats />
      <Footer />
    </div>
  )
}

export default Overview

function FooterStats() {
  return (
    <div className="footer-stats">
      <div className="footer-stats-column demo">
        <div className="footer-stats-bar green-1">Demographic</div>
        <ul>
          <li>Language</li>
          <li>Country</li>
          <li>City</li>
        </ul>
      </div>
      <div className="footer-stats-column system">
        <div className="footer-stats-bar red">System</div>
        <ul>
          <li>Browser</li>
          <li>OS</li>
          <li>More</li>
        </ul>
      </div>
      <div className="footer-stats-column target">
        <div className="footer-stats-bar orange">Target</div>
        <ul>
          <li>Users</li>
          <li>Active</li>
          <li>Geo</li>
          <li>Interests</li>
        </ul>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div className="dashboard-footer">
      <p>FOOTER</p>
      <p>Powered by w3.css</p>
    </div>
  )
}