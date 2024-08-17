import React from 'react'
import "../styles/userGuide.css"
import SupportScreensTopSection from '../components/SupportScreensTopSection'
import settingsIcon from "../../../assets/solar_settings-bold.png"
import Guides from '../components/Guides'

function UserGuide() {
  return (
    <div className='user-guide-wrapper'>
       <SupportScreensTopSection title="User Guides">
      <p className='user-guide-intro'> Find answers instantly! </p>
     </SupportScreensTopSection>
     <section className="questions-container"></section>
     <section className="bottom-section-wrapper">
      <div className='technical-specifications-container'>
        <p>Technical Specifications</p>
        <img src={settingsIcon} alt="settings" />
      </div>
      <Guides title="Troubleshooting Common Issues">
       <ol >
        <li>
        Signing in and accessing the dashboard
        </li>
        <li>Syncing reading progress and data across devices</li>
        <li>Customizing the dashboard layout and settings</li>
        <li>Viewing or downloading reading analytics and reports</li>
        <li>Connecting to the ReaderApp community and social features</li>
       </ol>
      </Guides>
      <Guides title="Accessing Knowledge Base and Documentation">
       <ol> 
        <li>
        Links or references to ReaderApp's online knowledge base,
     user guides, and FAQ resources
        </li>
        <li>Instructions on navigating the knowledge base to find answers to common questions or troubleshooting steps</li>
        
        <li>Contact information for the ReaderApp support team
   in case the knowledge base does not address the user's specific issue</li>
       
       </ol>
      </Guides>
     </section>
    </div>
  )
}

export default UserGuide