import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import searchIcon from "../../../assets/search-icon.png";
import notificationBell from "../../../assets/BellOutline.png";
import "../styles/supportHeader.css";

function SupportHeader() {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  // Check if the current path is either '/support' or '/contact'
  const isPage = location.pathname === "/support" || location.pathname === "/support/contact";

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // Search logic
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Handle search submission
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="support-wrapper">
      <section className="support">
        <h3>Support</h3>
        <p>Lorem ipsum dolor sit amet</p>
      </section>
      {isPage && (
        <section className="search-bar-wrapper">
          <form onSubmit={handleSearchSubmit} className="search-box">
            <input
              className="no-outline"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button type="submit" className="search-icon-wrapper">
              <img src={searchIcon} alt="search" />
            </button>
          </form>
        </section>
      )}
      <section className="notifications-container">
        <img src={notificationBell} alt="notification" />
        <div className="notifications-count-container">
          <p>36</p>
        </div>
      </section>
    </div>
  );
}

export default SupportHeader;
