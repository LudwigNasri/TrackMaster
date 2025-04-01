
import React from 'react';
import Sidebar from "./sidebar";
import Overview from './overview';
import Header from './header';
import { useState } from 'react';




const Dashboard = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (

    <div className={`dashboard-container ${isMenuOpen ? 'menu-open' : ''}`}>


      <Header/>

      {/* Sidebar */}
     
     <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      {/* Main Content */}
 
     <Overview/ >


     
    </div>
  );
};

export default Dashboard;