import React from 'react';
import './DashboardCard.css';

const DashboardCard = ({ title, value, percentage, status, bgColor, textColor }) => {
  const cardStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <div className="dashboard-card" style={cardStyle}>
      <div className="card-header">
        <h3>{title}</h3>
        <p className="card-value">{value}</p>
        <p className="card-percentage">{percentage}</p>
      </div>
      <div className="card-footer">
        <p>{status}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
