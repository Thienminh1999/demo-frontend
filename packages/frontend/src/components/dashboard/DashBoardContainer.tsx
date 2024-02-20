import React from "react";
import PieChartContainer from "./PieChartContainer";
import BarChartContainer from "./BarChartContainer";
import PolarAreaChartContainer from "./PolarAreaChartContainer";
import LineChartContainer from "./LineChartContainer";

function DashBoardContainer() {
  return (
    <div className="grid grid-cols-2">
      <PolarAreaChartContainer />
      <PieChartContainer />
      {/* <DonutChartContainer /> */}
      <LineChartContainer />
      <BarChartContainer />
      {/* <RadarChartContainer /> */}
    </div>
  );
}

export default DashBoardContainer;
