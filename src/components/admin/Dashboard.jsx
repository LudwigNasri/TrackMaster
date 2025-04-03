
import React from 'react';
import Sidebar from "./sidebar";
import { useState } from 'react';
import Header from "./header"
import { Outlet } from 'react-router';
import "../../App.css"



const Dashboard = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [sideOpen, setSideOpen] = useState(false)

  return (
    <div className={`dashboard-container ${isMenuOpen ? 'menu-open' : ''}`}>
     <Header setSideOpen={setSideOpen} sideOpen={sideOpen} />
      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} sideOpen={sideOpen} setSideOpen={setSideOpen} />
        <Outlet />
  </div>
  );
};

export default Dashboard;