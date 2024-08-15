import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SupportHeader from '../components/SupportHeader.jsx';
import SupportNavbar from '../components/SupportNavbar.jsx';
import "../styles/supportScreen.css"
import FAQScreen from './FAQScreen';
import Contact from './Contact';
import UserGuide from './UserGuide';

function SupportScreen() {
  return (
    <div className='support-screen-wrapper'>
      <SupportHeader />
      <div className='support-herosection'>
        <SupportNavbar />
        <Routes>
          <Route path="/" element={<FAQScreen />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/userGuide" element={<UserGuide />} />
        </Routes>
      </div>
    </div>
  );
}

export default SupportScreen;
