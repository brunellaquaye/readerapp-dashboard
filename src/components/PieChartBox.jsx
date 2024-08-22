import React from 'react'
import { ResponsiveContainer, Pie,PieChart,Cell,Tooltip } from 'recharts'



const data =[
    {name:"Mobile",value:870, color:"#FF8042"},
    {name:"Laptop",value:450, color:"#FFBB28"},
    {name:"Tablet",value:400, color:"#0088FE"},
    // {name:"Desktop",value:100, color:"#00C49F"},
]

const PieChartBox = () => {
  return (
<div className="pieChartBox h-[100%] flex flex-col justify-between">
<h1>Devices</h1>
<div className="chart flex items-center justify-center w-[100%] h-[100%]">
    <ResponsiveContainer width="99%" height={300}>
    <PieChart 
    //width={800} height={400} 
    >
    <Tooltip 
        contentStyle={{background:"white", borderRadius:"5px"}}
    />
        <Pie
          data={data}
          innerRadius={"70%"}
          outerRadius={"90%"}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((item) => (
            <Cell key={item.name} fill={item.color}/>
          ))}
        </Pie>
        
      </PieChart>
    </ResponsiveContainer>
</div>
<div className="options flex justify-between gap-[10px] text-[14px]">
    {data.map((item)=>(
        <div className="option flex flex-col gap-[10px] items-center" >
            <div className="title flex  gap-[10px] items-center">
                <div className="dot w-3 h-3 rounded-full" style={{backgroundColor:item.color}}></div>
                {/* <div className="flex flex-col gap-2"> */}
                <span>{item.name}</span>
                </div>
                <span>{item.value}</span>

               
            {/* </div> */}
        </div>
    ))}
</div>
</div>
    );
};

export default PieChartBox