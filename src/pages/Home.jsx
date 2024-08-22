import React from 'react';
import TopBox from '../components/TopBox';
import ChartBox from "../components/ChartBox";
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProducts, chartBoxRevenue, chartBoxUser } from '../data';
import BarChartBox from '../components/BarChartBox';
import PieChartBox from "../components/PieChartBox";
import BigChartBox from '../components/BigChartBox';

const Home = () => {
  return (
    <div className="home grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-[minmax(180px,auto)] w-full grid-flow-dense">
      <div className="box box1 p-5 rounded-lg border-soft border row-span-3">
        <TopBox />
      </div>
      <div className="box box2 p-5 rounded-lg border-soft border">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3 p-5 rounded-lg border-soft border">
        <ChartBox {...chartBoxProducts} />
      </div>
      <div className="box box4 p-5 rounded-lg border-soft border row-span-3">
        <PieChartBox />
      </div>
      <div className="box box5 p-5 rounded-lg border-soft border">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box6 p-5 rounded-lg border-soft border">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box7 p-5 rounded-lg border-soft border row-span-2 col-span-2 hidden sm:block">
        <BigChartBox />
      </div>
      <div className="box box8 p-5 rounded-lg border-soft border ">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;