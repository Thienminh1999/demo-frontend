import React from "react";
import { Line } from "react-chartjs-2";

function LineChartContainer() {
  const labels = ["January", "February", "March", "April", "May", "June", "July"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  return (
    <div>
      <Line
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Line chart example",
            },
          },
        }}
      />
    </div>
  );
}

export default LineChartContainer;
