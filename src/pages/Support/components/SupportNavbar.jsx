import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FAQIcon from '../../../assets/faq.png';
import UserIcon from '../../../assets/user-icon.png';
import SearchIcon from "../../../assets/Vector.png";
import ContactIcon from '../../../assets/PhoneIncoming.png';
import '../styles/supportNavbar.css';

function SupportNavbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // Search functionality here
  };

  const getLinkClassName = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="support-nav-links-wrapper">
      <ul className="support-nav-links">
        <li className={getLinkClassName('/support')}>
          <Link to="/support">
            <img src={FAQIcon} alt="FAQ" />
            <p>FAQ</p>
          </Link>
        </li>
        <li className={getLinkClassName('/support/userGuide')}>
          <Link to="/support/userGuide">
            <img src={UserIcon} alt="User Guides" />
            <p>User Guides</p>
          </Link>
        </li>
        {location.pathname === '/support/userGuide' || location.pathname === '/support/contact' ? (
          <li className="search-bar">
            <img src={SearchIcon} alt="Search" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </li>
        ) : null}
        <li className={getLinkClassName('/support/contact')}>
          <Link to="/support/contact">
            <img src={ContactIcon} alt="Contact Support" />
            <p>Contact Support</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SupportNavbar;
