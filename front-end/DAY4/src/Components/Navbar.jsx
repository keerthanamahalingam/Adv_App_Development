import { Link } from 'react-router-dom';
import './Navbar.css';


import { SidebarData } from './SlideBarData';
import React, { useState } from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <IconContext.Provider value={{ color: "black", size: "25px" }}>

        <div className="navbar1">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>

        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            
          </ul>
          
        </nav>

      </IconContext.Provider>

      <div>

        <nav className="navbar">
          <div className="logo-container">



          </div>
          <ul className="navbar-nav">
            
            <li className="nav-item">
              <Link to="/Userhome" className="nav-link">

                HOME</Link>
            </li>
            <li className="nav-item">
            <Link to="/events" className="nav-link">

            EVENTS</Link>
          </li>
          <li className="nav-item">
          <Link to="/Venue" className="nav-link">

            VENUE</Link>
        </li>
        <li className="nav-item">
          <Link to="/Theme" className="nav-link">

            THEME</Link>
        </li>
        <li className="nav-item">
        <Link to="/BookingPage" className="nav-link">

          BOOKINGS</Link>
      </li>

            
            <li className="nav-item">
              <Link to="/AboutUs" className="nav-link">

                ABOUT US</Link>
            </li>
            <li className="nav-item">
            <Link to="/ContactUs" className="nav-link">

              CONTACT US</Link>
          </li>
      
            <li className="nav-item">
              <Link to="/" className="nav-link">
                SIGN OUT</Link>
              

            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;









