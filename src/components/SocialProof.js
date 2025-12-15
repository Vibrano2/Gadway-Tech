import React, { useState, useEffect } from 'react';
import './SocialProof.css';

const SocialProof = () => {
  const [stats, setStats] = useState({
    enrolled: 0,
    watching: 0,
    purchased: 0,
  });

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setStats({
        enrolled: Math.floor(Math.random() * 50) + 2847,
        watching: Math.floor(Math.random() * 20) + 127,
        purchased: Math.floor(Math.random() * 30) + 892,
      });
    }, 5000);

    // Initial values
    setStats({
      enrolled: 2847,
      watching: 127,
      purchased: 892,
    });

    return () => clearInterval(interval);
  }, []);

  const recentPurchases = [
    { name: 'Michael', location: 'Lagos', time: '2 minutes ago' },
    { name: 'Fatima', location: 'Kano', time: '5 minutes ago' },
    { name: 'James', location: 'Enugu', time: '8 minutes ago' },
    { name: 'Grace', location: 'Kaduna', time: '12 minutes ago' },
  ];

  return (
    <div className="social-proof">
      <div className="social-proof-stats">
        <div className="stat-item">
          <div className="stat-number">{stats.enrolled.toLocaleString()}+</div>
          <div className="stat-label">Students Enrolled</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{stats.watching}</div>
          <div className="stat-label">Watching Now</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{stats.purchased}+</div>
          <div className="stat-label">Purchased Today</div>
        </div>
      </div>

      <div className="recent-purchases">
        <div className="recent-purchases-header">
          <span className="pulse-dot"></span>
          <span>Recent Purchases</span>
        </div>
        <div className="purchases-list">
          {recentPurchases.map((purchase, index) => (
            <div key={index} className="purchase-item">
              <span className="purchase-name">{purchase.name}</span>
              <span className="purchase-location">from {purchase.location}</span>
              <span className="purchase-time">{purchase.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;

