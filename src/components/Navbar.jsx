import React from "react";
import { Link } from "react-router-dom";
import searchIcon from "../assets/search-2.svg";
import app from "../assets/app-2.svg";
import notifications from "../assets/notifications.svg"
import expand from "../assets/expand-2.svg";
import settings from "../assets/settings.svg"

const Navbar = () => {
  return (
    <div className="navbar w-[100%] p-[20px] flex justify-between">
      <div className="logo font-bold items-center flex gap-[10px] ">
        {/* <img src="logo.png" alt=""/> */}
        <span>READERAPP</span>
      </div>
      <div className="icons flex items-center gap-[20px] ">
        <img src={searchIcon} alt="" className="hidden sm:block"/>
        <img src={app} alt="" className="hidden sm:block"/>
        <img src={expand} alt="" className="hidden sm:block"/>
        <div className="notification relative">
          <img src={notifications} alt="" className="relative" />
          <span className="text-sm absolute bg-red-600 text-white rounded-full justify-center top-[-10px] right-[-10px] p-0.5 text-[10px] font-bold items-center ">1</span>
        </div>
        <div className="user flex items-center gap-[20px]">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHLKFC0wo4itixSIlD-UagzzT7z62ZvOS2-A&s" 
        alt="" 
        className="user-profile w-[26px] h-[26px] rounded-full object-cover"
         />
         <span className="span">Jane</span>
        </div>
        <Link to="/settings">
        <img src={settings} alt="" className="hidden sm:block"/>
        </Link>
      </div>
    </div>
  );
};

// Download the icons from the github repo.

export default Navbar;
