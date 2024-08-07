import React from 'react'
import TopBox from '../components/TopBox'
import ChartBox from "../components/ChartBox"
import { chartBoxConversion, chartBoxProducts, chartBoxRevenue, chartBoxUser } from '../data'
const Home = () => {
  return (
<div className="home grid gap-[20px] grid-cols-[1fr,1fr,1fr,1fr] auto-rows-[minmax(180px,auto)] w-full">
  <div className="box box1 p-[20px] rounded-[10px] border-soft border-[1px] row-span-3 ">
  <TopBox/>
  </div>
  <div className="box box2 p-[20px] rounded-[10px] border-soft border-[1px]  "><ChartBox {...chartBoxUser}/></div>
  <div className="box box3 p-[20px] rounded-[10px] border-soft border-[1px]  "><ChartBox {...chartBoxProducts}/></div>
  <div className="box box4 p-[20px] rounded-[10px] border-soft border-[1px] row-span-3 ">box4</div>
  <div className="box box5 p-[20px] rounded-[10px] border-soft border-[1px]  "><ChartBox {...chartBoxConversion}/></div>
  <div className="box box6 p-[20px] rounded-[10px] border-soft border-[1px]  "><ChartBox {...chartBoxRevenue}/></div>
  <div className="box box7 p-[20px] rounded-[10px] border-soft border-[1px] row-span-2 col-span-2 ">Box7</div>
  <div className="box box8 p-[20px] rounded-[10px] border-soft border-[1px]  ">Box8</div>
  <div className="box box9 p-[20px] rounded-[10px] border-soft border-[1px]  ">Box9</div>

</div>  )
}

export default Home