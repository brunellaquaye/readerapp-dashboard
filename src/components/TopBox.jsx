import React from "react";
import { topDeals } from "../data";

const TopBox = () => {
  return (
    <div className="topBox">
      <h1 className="mb-[20px]">Top deals</h1>
      <div className="list">
        {topDeals.map((person) => (
          <div className="listItem flex items-center justify-between mb-[30px]" key={person.id}>
            <div className="user flex gap-[20px]">
              <img
                src={person.img}
                alt=""
                className="w-[40px] h-[40px] rounded-full object-cover"
              />
              <div className="userDescription flex flex-col gap-[5px]">
                <span className="userName text-[14px] font-semibold ">{person.userName}</span>
                <span className="email text-[12px]">{person.email}</span>
              </div>
            </div>
            <span className="amount font-semibold">${person.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
