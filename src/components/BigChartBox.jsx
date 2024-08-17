import React from 'react'
import { Area, CartesianGrid, XAxis, YAxis,AreaChart , ResponsiveContainer, Tooltip} from 'recharts'

const data = [
    {
      name: 'Mon',
      books: 3093,
      paintings: 450,
      digitalArt: 2440,
    },
    {
      name: 'Tue',
      books: 5340,
      paintings: 158,
      digitalArt: 2330,
    },
    {
      name: 'Wed',
      books: 2300,
      paintings: 9866,
      digitalArt: 2290,
    },
    {
      name: 'Thurs',
      books: 2780,
      paintings: 3508,
      digitalArt: 2000,
    },
    {
      name: 'Fri',
      books: 1890,
      paintings: 4770,
      digitalArt: 2181,
    },
    {
      name: 'Sat',
      books: 2440,
      paintings: 2243,
      digitalArt: 6780,
    },
    {
      name: 'Sun',
      books: 5550,
      paintings: 40,
      digitalArt: 250,
    },
  ];

const BigChartBox = () => {
  return (
<div className="bigChartBox w-[100%] h-[100%] flex flex-col justify-between">
    <h1>Revenue Analytics</h1>
    <div className="chart w-[100%] h-[300px]">
    <ResponsiveContainer width="99%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="books" stackId="1" stroke="#8884d8" fill="#FF8042" />
          <Area type="monotone" dataKey="paintings" stackId="1" stroke="#82ca9d" fill="#0088FE" />
          <Area type="monotone" dataKey="digitalArt" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
</div>  )
}

export default BigChartBox