import React, { useState, useEffect } from 'react';
import './sidebar.css';
import { MdOutlineWidgets } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const sidebarWidth = isSidebarOpen ? '20%' : '0';

  useEffect(() => {
    setIsSidebarOpen(false); // Close the sidebar when the location changes
  }, [location.pathname]);

  // Check if the current location matches the provided path
  const isPathActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} style={{ width: sidebarWidth }}>
      <div className='sidebar-up'>
        <div id='sidebar-icon' onClick={toggleSidebar}>
        <MdOutlineWidgets size={20} className='sidebar-logo' />
        </div>
        {isSidebarOpen && (
          <div className='sidebar-route'>
            <ul className='sidebar-list'>
              <Link to='/' id='Link'>
                <li id='directory' className={isPathActive('/') ? 'active' : ''}>
                  
                  <p>Mathematics</p>
                </li>
              </Link>
              <Link to='/English' id='Link'>
                <li id='directory' className={isPathActive('/English') ? 'active' : ''}>
                  
                  <p>Use Of English</p>
                </li>
              </Link>
              <Link to='/Physics' id='Link'>
                <li id='directory' className={isPathActive('/Physics') ? 'active' : ''}>
                  
                  <p>Physics</p>
                </li>
              </Link>
              <Link to='/Chemistry' id='Link'>
                <li id='directory' className={isPathActive('/Chemistry') ? 'active' : ''}>
                  
                  <p>Chemistry</p>
                </li>
              </Link>
              <Link to='/Biology' id='Link'>
                <li id='directory' className={isPathActive('/Biology') ? 'active' : ''}>
                
                  <p>Biology</p>
                </li>
              </Link>
              <Link to='/Crs' id='Link'>
                <li id='directory' className={isPathActive('/Crs') ? 'active' : ''}>
                 
                  <p>CRS</p>
                </li>
              </Link>
              <Link to='/Economics' id='Link'>
                <li id='directory' className={isPathActive('/Economics') ? 'active' : ''}>
                  
                  <p>Economics</p>
                </li>
              </Link>
              <Link to='/Commerce' id='Link'>
                <li id='directory' className={isPathActive('/Commerce') ? 'active' : ''}>
                  
                  <p>Commerce</p>
                </li>
              </Link>
              <Link to='/Government' id='Link'>
                <li id='directory' className={isPathActive('/Government') ? 'active' : ''}>
                  
                  <p>Government</p>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Sidebar;
