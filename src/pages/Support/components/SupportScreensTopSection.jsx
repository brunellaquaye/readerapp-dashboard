import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "../styles/supportScreenTopSection.css";
import CustomButton from "../components/CustomButton";
import searchIcon from "../../../assets/Vector2.png";

function SupportScreensTopSection({ title, children }) {
  const location = useLocation();
  const isPage = location.pathname === '/support/userGuide';

  // State to manage the input value
  const [searchQuery, setSearchQuery] = useState('');

  const handleButtonClick = (buttonName) => {
    console.log(`${buttonName} button clicked`);
    // Button functionality here
  };

  // Update searchQuery state on input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <section className="support-top-section">
        <div className="support-header-container">
          <p className="support-container">{title}</p>
          <p className="support-intro">{children}</p>
          {isPage && (
            <div className='top-section-search-box'>
              <input 
                placeholder="Search your questions here....." 
                value={searchQuery}
                onChange={handleSearchChange} 
              />
              {searchQuery === '' && (
                <div className="search-icon-container">
                  <img src={searchIcon} alt="search" />
                </div>
              )}
            </div>
          )}
        </div>

        {/* <div className="support-button-wrapper">
          <CustomButton buttonName="Cancel" onClick={() => handleButtonClick('Cancel')} />
          <CustomButton buttonName="Save Changes" onClick={() => handleButtonClick('Save Changes')} />
        </div> */}
      </section>
    </div>
  );
}

export default SupportScreensTopSection;
