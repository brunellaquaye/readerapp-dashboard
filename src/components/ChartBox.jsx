import React from "react";
// import user from "../assets/user.svg";
import { Link } from "react-router-dom";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";
import { chartBoxUser } from "../data";


const ChartBox = ({ color, icon, title, dataKey, number, percentage, chartData }) => {
  return (
    <div className="chartbox flex h-full gap-2.5 flex-col md:flex-row">
      <div className="boxInfo flex flex-3 flex-col justify-between sm:gap-5">
        <div className="title flex items-center gap-2.5 ">
          <img src={icon} alt="User icon" />
          <span>{title}</span>
        </div>
        <h1 className="text-2xl font-bold">{number}</h1>
        <Link to="" className="text-violet-300">
          View All
        </Link>
      </div>
      <div className="chartInfo flex-2 flex flex-col">
        <div className="chart w-full h-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts flex text-right flex-col mt-2">
          <span className="percentage font-bold text-orange-300 text-lg ">
            {percentage}%
          </span>
          <span className="duration text-sm">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
