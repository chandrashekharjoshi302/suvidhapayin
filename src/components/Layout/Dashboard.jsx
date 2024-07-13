// import React from 'react';
// import './Dashboard.css';
// import DashboardCard from './DashboardCard';

// const Dashboard = ({ isSidebarOpen }) => {
//   return (
//     <div className={`dashboard ${isSidebarOpen ? 'expanded' : 'collapsed'}`}>
//       <div className="dashboard-cards">
//         <DashboardCard color="orange" title="Total Invoices" value="2478" />
//         <DashboardCard color="green" title="Paid Invoices" value="983" />
//         <DashboardCard color="purple" title="Unpaid Invoices" value="1256" />
//         <DashboardCard color="blue" title="Total Invoices Sent" value="652" />
//       </div>
//       <div className="wallet-balance">
//         <h2>Wallet Balance</h2>
//         <p>$824,571.93</p>
//         <p>+0.8% than last week</p>
//       </div>
//       <div className="cards-overview">
//         <h2>Card's Overview</h2>
//         <div className="pie-chart">[Pie Chart]</div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from 'react';
import DashboardCard from './DashboardCard';
import './Dashboard.css';

const Dashboard = () => {
  const cards = [
    { title: 'Today Payin', value: '₹0', percentage: '0%', status: 'SUCCESS ₹0 CREATED ₹10,909,000 FAILED ₹0', bgColor: '#ffeb3b', textColor: '#000' },
    { title: 'Today Payout', value: '₹0', percentage: '0%', status: 'PROCESSED ₹0 FAILED ₹0', bgColor: '#4caf50', textColor: '#fff' },
    { title: 'Today Profit', value: '₹0', percentage: '0%', status: 'THIS MONTH ₹114,006 LAST MONTH ₹1,555,227', bgColor: '#f44336', textColor: '#fff' },
    { title: 'Today Payin Txn', value: '0', percentage: '0%', status: 'CREATED 2827 FAILED 0', bgColor: '#2196f3', textColor: '#fff' },
    { title: 'Total Users', value: '26', percentage: '0%', status: 'ACTIVE 26 UNVERIFIED 0', bgColor: '#ff9800', textColor: '#fff' },
    { title: 'Total Profit', value: '₹3,710,294', percentage: '0%', status: 'THIS MONTH ₹114,006 LAST MONTH ₹1,555,227', bgColor: '#9c27b0', textColor: '#fff' },
    { title: 'Total Payin', value: '₹133,695,488', percentage: '0%', status: 'CREATED ₹295,212,032 FAILED ₹38,116,537', bgColor: '#00bcd4', textColor: '#fff' },
    { title: 'Total Payout', value: '₹0', percentage: '0%', status: 'PROCESSED ₹0 FAILED ₹0', bgColor: '#cddc39', textColor: '#000' },
    { title: 'Now Payout Processing', value: '0', percentage: '0%', status: 'DEDUCTION PROCESSING 0 API PROCESSING 0', bgColor: '#673ab7', textColor: '#fff' },
  ];

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="cards-container">
        {cards.map((card, index) => (
          <DashboardCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
