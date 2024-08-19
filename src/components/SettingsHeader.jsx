import { Link } from 'react-router-dom';
import { GiChoice } from 'react-icons/gi';
import { MdSecurity } from 'react-icons/md';
import { IoNotificationsOutline } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const SettingsHeader = ({ currentSection }) => {
  return (
    <div className="bg-gray-50 p-6 shadow-md mb-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Title Section */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <span className="text-3xl font-bold text-gray-800">Settings</span>
        </div>

        {/* Icons Section */}
        <div className="flex justify-center space-x-6 text-2xl text-gray-700 relative">
          <div className="relative group">
            <Link 
              to="/settings" 
              className={`hover:text-[orange] ${currentSection === 'Preferences' ? 'text-[orange]' : ''}`}>
              <GiChoice />
            </Link>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Preferences
            </div>
          </div>
          <div className="relative group">
            <Link 
              to="/settings/security" 
              className={`hover:text-[orange] ${currentSection === 'Security' ? 'text-[orange]' : ''}`}>
              <MdSecurity />
            </Link>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Security
            </div>
          </div>
          <div className="relative group">
            <Link 
              to="/settings/notifications" 
              className={`hover:text-[orange] ${currentSection === 'Notifications' ? 'text-[orange]' : ''}`}>
              <IoNotificationsOutline />
            </Link>
            <div className="absolute bottom-15 left-1 transform -translate-x-1  text-[white] bg-black text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-80 transition-opacity duration-10">
              Notifications
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-4 text-center md:text-left">
        <p className="text-gray-600 text-lg">
          Manage your preferences settings, configure security settings, and personalize your profile. 
          Take control of your ReaderApp experience.
        </p>
      </div>
    </div>
  );
};

export default SettingsHeader;
