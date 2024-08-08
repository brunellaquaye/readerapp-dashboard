import React from 'react'
import { BarChart, ResponsiveContainer,Bar, Tooltip } from 'recharts';

const BarChartBox = ({ color,title, dataKey, chartData }) => {
  return (
<div className="barChartBox w-[100%] h-[100%] ">
    <h1 className={"text-[20px]"}>{title}</h1>
    <div className="chart">
    <ResponsiveContainer width="99%" height={150}>
        <BarChart width={150} height={40} data={chartData}>
        <Tooltip 
            contentStyle={{background:"#2a3447", borderRadius: "5px"}}
            labelStyle={{display:"none"}}
            cursor={{fill:"none"}}
        />
          <Bar dataKey={dataKey} fill={color} />
        </BarChart>
      </ResponsiveContainer>
    </div>
</div>
  )}
export default BarChartBox;