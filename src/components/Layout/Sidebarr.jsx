// import React from 'react';
// import './Sidebar.css';
// import { FaTachometerAlt, FaWallet } from 'react-icons/fa';
// import {Link} from 'react-router-dom'

// const Sidebar = ({ isSidebarOpen }) => {
//   return (
//     <aside className={`sidebar ${isSidebarOpen ? 'open' : 'collapsed'}`}>
//       <div className="profile">
//         <img src="profile-pic.png" alt="Profile" className="profile-pic" />
//         {isSidebarOpen && (
//           <>
//             <h2>Hi, William</h2>
//             <p>william@gmail.com</p>
//           </>
//         )}
//       </div>
//       <ul className="sidebar-menu">
//       <span>User Management</span>
//       <Link to={'/'}>
//         <li className={`sidebar-item ${isSidebarOpen ? '' : 'collapsed'}`}>
//           <FaTachometerAlt className="icon" />
//           {isSidebarOpen && <span>Dashboard</span>}
//         </li>
//         </Link>
//         <Link to={'/member'}>
//         <li className={`sidebar-item ${isSidebarOpen ? '' : 'collapsed'}`}>
//           <FaTachometerAlt className="icon" />
//           {isSidebarOpen && <span>Add Member</span>}
//         </li>
//         </Link>
//         <Link to={'/Active_Member'}>
//         <li className={`sidebar-item ${isSidebarOpen ? '' : 'collapsed'}`}>
//           <FaTachometerAlt className="icon" />
//           {isSidebarOpen && <span>Active Member</span>}
//         </li>
//         </Link>
//         <Link to={'/Pending_Member'}>
//         <li className={`sidebar-item ${isSidebarOpen ? '' : 'collapsed'}`}>
//           <FaTachometerAlt className="icon" />
//           {isSidebarOpen && <span>Pending Member</span>}
//         </li>
//         </Link>
//         <Link to={'/Deactivate_Member'}>
//         <li className={`sidebar-item ${isSidebarOpen ? '' : 'collapsed'}`}>
//           <FaTachometerAlt className="icon" />
//           {isSidebarOpen && <span>Deactivate Member</span>}
//         </li>
//         </Link>
//         <Link to={'/Analytics'}>
//         <li className={`sidebar-item ${isSidebarOpen ? '' : 'collapsed'}`}>
//           <FaTachometerAlt className="icon" />
//           {isSidebarOpen && <span> Analytics</span>}
//         </li>
//         </Link>
//         <span>Wallet Management</span>
//         <Link to={'/Fund_Transfer'}>
//         <li className={`sidebar-item ${isSidebarOpen ? '' : 'collapsed'}`}>
//           <FaTachometerAlt className="icon" />
//           {isSidebarOpen && <span>Fund Transfer</span>}
//         </li>
//         </Link>
//         <Link to={'/Fund_Request'}>
//         <li className={`sidebar-item ${isSidebarOpen ? '' : 'collapsed'}`}>
//           <FaTachometerAlt className="icon" />
//           {isSidebarOpen && <span>Fund Request</span>}
//         </li>
//         </Link>
//         <Link to={'/Payout_Payin_Charge'}>
//         <li className={`sidebar-item ${isSidebarOpen ? '' : 'collapsed'}`}>
//           <FaTachometerAlt className="icon" />
//           {isSidebarOpen && <span>Payout Payin Charge</span>}
//         </li>
//         </Link>
//         <span>Transaction Reports</span>
//         <Link to={'/Api_Logs_Report<'}>
//         <li className={`sidebar-item ${isSidebarOpen ? '' : 'collapsed'}`}>
//           <FaTachometerAlt className="icon" />
//           {isSidebarOpen && <span>Api Logs Report</span>}
//         </li>
//         </Link>
//         <Link to={'/Payin_Report'}>
//         <li className={`sidebar-item ${isSidebarOpen ? '' : 'collapsed'}`}>
//           <FaTachometerAlt className="icon" />
//           {isSidebarOpen && <span>Payin Report</span>}
//         </li>
//         </Link>
//         <Link to={'/Fund_Report'}>
//         <li className={`sidebar-item ${isSidebarOpen ? '' : 'collapsed'}`}>
//           <FaTachometerAlt className="icon" />
//           {isSidebarOpen && <span>Fund Report</span>}
//         </li>
//         </Link>
//         <Link to={'/Reports'}>
//         <li className={`sidebar-item ${isSidebarOpen ? '' : 'collapsed'}`}>
//           <FaTachometerAlt className="icon" />
//           {isSidebarOpen && <span>Reports</span>}
//         </li>
//         </Link>
//         <Link to={'/'}>
//         <li className={`sidebar-item ${isSidebarOpen ? '' : 'collapsed'}`}>
//           <FaTachometerAlt className="icon" />
//           {isSidebarOpen && <span>Dashboard 6</span>}
//         </li> 
//         </Link>  
//         <Link to={'/Logout'}>  
//         <li className={`sidebar-item ${isSidebarOpen ? '' : 'collapsed'}`}>
//           <FaWallet className="icon" />
//           {isSidebarOpen && <span>Logout</span>}
//         </li>
//         </Link>
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;





import React, { useState } from 'react';
import './Sidebar.css';
import { FaTachometerAlt, FaWallet } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = ({ isSidebarOpen }) => {
  const [isUserManagementOpen, setIsUserManagementOpen] = useState(false);
  const [isWalletManagementOpen, setIsWalletManagementOpen] = useState(false);
  const [isTransactionReportsOpen, setIsTransactionReportsOpen] = useState(false);

  const toggleUserManagement = () => setIsUserManagementOpen(!isUserManagementOpen);
  const toggleWalletManagement = () => setIsWalletManagementOpen(!isWalletManagementOpen);
  const toggleTransactionReports = () => setIsTransactionReportsOpen(!isTransactionReportsOpen);

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'open' : 'collapsed'}`}>
      <div className="profile">
        <img src="profile-pic.png" alt="Profile" className="profile-pic" />
        {isSidebarOpen && (
          <>
            <h2>Hi, William</h2>
            <p>william@gmail.com</p>
          </>
        )}
      </div>
      <ul className="sidebar-menu">
        <li className={`sidebar-item ${isSidebarOpen ? '' : 'collapsed'}`} onClick={toggleUserManagement}>
          <FaTachometerAlt className="icon" />
          {isSidebarOpen && <span>User Management</span>}
        </li>
        {isUserManagementOpen && isSidebarOpen && (
          <ul>
            <Link to={'/'}>
              <li className="sidebar-sub-item">
                <FaTachometerAlt className="icon" />
                <span>Dashboard</span>
              </li>
            </Link>
            <Link to={'/member'}>
              <li className="sidebar-sub-item">
                <FaTachometerAlt className="icon" />
                <span>Add Member</span>
              </li>
            </Link>
            <Link to={'/Active_Member'}>
              <li className="sidebar-sub-item">
                <FaTachometerAlt className="icon" />
                <span>Active Member</span>
              </li>
            </Link>
            <Link to={'/Pending_Member'}>
              <li className="sidebar-sub-item">
                <FaTachometerAlt className="icon" />
                <span>Pending Member</span>
              </li>
            </Link>
            <Link to={'/Deactivate_Member'}>
              <li className="sidebar-sub-item">
                <FaTachometerAlt className="icon" />
                <span>Deactivate Member</span>
              </li>
            </Link>
            <Link to={'/Analytics'}>
              <li className="sidebar-sub-item">
                <FaTachometerAlt className="icon" />
                <span>Analytics</span>
              </li>
            </Link>
          </ul>
        )}

        <li className={`sidebar-item ${isSidebarOpen ? '' : 'collapsed'}`} onClick={toggleWalletManagement}>
          <FaWallet className="icon" />
          {isSidebarOpen && <span>Wallet Management</span>}
        </li>
        {isWalletManagementOpen && isSidebarOpen && (
          <ul>
            <Link to={'/Fund_Transfer'}>
              <li className="sidebar-sub-item">
                <FaTachometerAlt className="icon" />
                <span>Fund Transfer</span>
              </li>
            </Link>
            <Link to={'/Fund_Request'}>
              <li className="sidebar-sub-item">
                <FaTachometerAlt className="icon" />
                <span>Fund Request</span>
              </li>
            </Link>
            <Link to={'/Payout_Payin_Charge'}>
              <li className="sidebar-sub-item">
                <FaTachometerAlt className="icon" />
                <span>Payout Payin Charge</span>
              </li>
            </Link>
          </ul>
        )}

        <li className={`sidebar-item ${isSidebarOpen ? '' : 'collapsed'}`} onClick={toggleTransactionReports}>
          <FaTachometerAlt className="icon" />
          {isSidebarOpen && <span>Transaction Reports</span>}
        </li>
        {isTransactionReportsOpen && isSidebarOpen && (
          <ul>
            <Link to={'/Api_Logs_Report'}>
              <li className="sidebar-sub-item">
                <FaTachometerAlt className="icon" />
                <span>Api Logs Report</span>
              </li>
            </Link>
            <Link to={'/Payin_Report'}>
              <li className="sidebar-sub-item">
                <FaTachometerAlt className="icon" />
                <span>Payin Report</span>
              </li>
            </Link>
            <Link to={'/Fund_Report'}>
              <li className="sidebar-sub-item">
                <FaTachometerAlt className="icon" />
                <span>Fund Report</span>
              </li>
            </Link>
            <Link to={'/Reports'}>
              <li className="sidebar-sub-item">
                <FaTachometerAlt className="icon" />
                <span>Reports</span>
              </li>
            </Link>
          </ul>
        )}

        <Link to={'/'}>
          <li className={`sidebar-item ${isSidebarOpen ? '' : 'collapsed'}`}>
            <FaTachometerAlt className="icon" />
            {isSidebarOpen && <span>Dashboard 6</span>}
          </li>
        </Link>
        <Link to={'/Logout'}>
          <li className={`sidebar-item ${isSidebarOpen ? '' : 'collapsed'}`}>
            <FaWallet className="icon" />
            {isSidebarOpen && <span>Logout</span>}
          </li>
        </Link>
      </ul>
    </aside>
  );
};

export default Sidebar;

