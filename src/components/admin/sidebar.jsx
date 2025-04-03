import React from 'react';
import { useState } from 'react';
import { Activity, Truck, User, Home, FileText } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function Sidebar({ isMenuOpen, setIsMenuOpen,sideOpen,setSideOpen }) {
  const navigate = useNavigate();

  // Define the menu items with corresponding icons and pages
  const MenuItems = [
    { id: 'overview', label: 'Overview', icon: <Home />, page: '/' },
    { id: 'shipments', label: 'Shipments', icon: <Truck />, page: '/shipment' },
    { id: 'users', label: 'Users', icon: <User />, page: '/users' },
  ];

  return (
    <aside className={`sidebar ${isMenuOpen ? 'open' : ''} ${sideOpen ? 'open-small' : ''} `}>
      <div className="sidebar-header">
        <img
          
          src="https://cdn-icons-png.flaticon.com/128/17104/17104077.png"
          alt="Company Logo"
        />
        <h2 style={{ display: isMenuOpen ? 'none' : 'block' }}>Shiptrack</h2>
        <img
          className="hamburg"
          src="https://cdn-icons-png.flaticon.com/128/9534/9534295.png"
          alt="Menu Toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <img className='close-button' onClick={() => setSideOpen(!sideOpen)} src='https://cdn-icons-png.flaticon.com/128/2763/2763138.png' />

      </div>

      <ul className="sidebar-menu">
        {MenuItems.map((item, index) => (
          <li
            key={item.id}
            className={`sidebar-menu-item ${index === 0 ? 'active' : ''}`}
            onClick={() => navigate(item.page)}
          >
            {item.icon} {item.label}
          </li>
        ))}
      </ul>

      <div className={`user-profile ${isMenuOpen ? 'open-profile' : ''}`}>
        <div>
        <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="User Profile" />
          <p>Admin</p>
        </div>
        <button>Log Out</button>
      </div>
    </aside>
  );
}

export default Sidebar;
