import { useState } from "react";
import { Link } from "react-router-dom";
import { menu } from "../data";
import { IoChevronDown } from "react-icons/io5";

const Menu = () => {
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

  const handleSubMenuToggle = (index) => {
    setOpenSubMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item flex-col gap-[10px] mb-[20px]" key={item.id}>
          <span className="title text-[12px] font-semibold text-textSoft uppercase">
            {item.title}
          </span>
          {item.listItems.map((listItems, listIndex) => (
            <div key={listItems.id}>
              <Link
                to={listItems.url}
                onClick={() => handleSubMenuToggle(listIndex)}
                className="listItem flex items-center justify-between gap-[15px] p-[10px] rounded-[5px] hover:bg-soft"
              >
                <div className="flex items-center gap-[10px]">
                  <img src={listItems.icon} alt="" />
                  <span className="listItemTitle hidden sm:block">{listItems.title}</span>
                </div>
                {listItems.submenu && (
                  <IoChevronDown
                    className={`${
                      openSubMenuIndex === listIndex ? "rotate-180" : ""
                    } ml-4 duration-500 transform`}
                  />
                )}
              </Link>

              {listItems.submenu && openSubMenuIndex === listIndex && (
                <ul className="ml-1">
                  {listItems.subItems.map((submenuItem, subIndex) => (
                    <Link
                      to={submenuItem.url}
                      key={subIndex}
                      className=" text-sm hover:font-bold hover:text-orange-400 flex items-center gap-x-2 cursor-pointer p-1 px-8 hover:bg-light-white rounded-md mt-2"
                    >
                      <span className="text-[20px] hover:text-orange-400 font-bold">
                        {submenuItem.icon}
                      </span>
                      <span className="text-[16px] hover:text-white">
                        {submenuItem.title}
                      </span>
                    </Link>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
