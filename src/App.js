import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Sidebar from "./components/Layout/Sidebarr";
import Dashboard from "./components/Layout/Dashboard";
import AddMember from "./components/Layout/AddMember";
import MemberList from "./components/Layout/TestMember";
import Analytics from "./components/Layout/Analytics";
import Deactivate from "./components/Layout/Deactivate";
import Pending from "./components/Layout/Pending";
import TestMember from "./components/Layout/TestMember";

import Active from "./components/Layout/Active";
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar toggleSidebar={toggleSidebar} toggleDarkMode={toggleDarkMode} />
      <div className="main">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <div
          className={`dashboard ${isSidebarOpen ? "expanded" : "collapsed"}`}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-member" element={<TestMember />} />
            <Route path="/member" element={<AddMember />} />
            <Route path="/Deactivate_Member" element={<Deactivate />} />
            <Route path="/Pending_Member" element={<Pending />} />
            <Route path="/Active_Member" element={<Active />} />
            <Route path="/Analytics" element={<Analytics />} />
            <Route path="/TestMember" element={<TestMember />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
