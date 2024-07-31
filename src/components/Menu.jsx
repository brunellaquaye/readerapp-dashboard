import React from "react";
import { Link } from "react-router-dom";
import {menu} from "../data";
const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item flex-col gap-[10px] mb-[20px] " key={item.id}>
          <span className="title text-[12px] font-semibold text-textSoft">
            {item.title}
          </span>
          {item.listItems.map((listItems) => (
            <Link
              to="/"
              className="listItem flex items-center gap-[10px] p-[10px] rounded-[5px] hover:bg-soft"
              key={listItems.id}
            >
              <img src={listItems.icon} alt="" />
              <span className="listItemTitle">{listItems.title}</span>
            </Link>
          ))}
          
        </div>
      ))}
     
    </div>
  );
};

export default Menu;
