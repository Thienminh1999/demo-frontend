import React from "react";
import PieChartContainer from "./PieChartContainer";
import BarChartContainer from "./BarChartContainer";
import PolarAreaChartContainer from "./PolarAreaChartContainer";
import DonutChartContainer from "./DonutChartContainer";
import LineChartContainer from "./LineChartContainer";
import RadarChartContainer from "./RadarChartContainer";

function DashBoardContainer() {
  return (
    <div className="grid grid-cols-4 items-center ">
      <BarChartContainer />
      <PolarAreaChartContainer />
      <PieChartContainer />
      <DonutChartContainer />
      <LineChartContainer />
      <RadarChartContainer />
    </div>
  );
}

export default DashBoardContainer;
