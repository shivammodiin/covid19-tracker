import React from "react";
// import { useState, useEffect } from "react";
// import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";

import "./Chart.css";

function Chart({
  fetchedDailyData,
  data: { confirmed, recovered, deaths },
  country,
}) {
  // const [dailyData, setDailyData] = useState([]);

  // useEffect(() => {
  //   const fetchAPI = async () => {
  //     setDailyData(await fetchDailyData());
  //   };
  //   fetchAPI();
  // });

  // console.log(confirmed, deaths);
  const lineChart = confirmed ? (
    <Line
      data={{
        labels: fetchedDailyData.map(({ date }) => date),
        datasets: [
          {
            data: fetchedDailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: fetchedDailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  // console.log(confirmed);
  const BarChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgb(0, 0, 255,0.5)",
              "rgba(0,255,0,0.5)",
              "rgb(255, 0, 0,0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current Situation  in ${country}` },
      }}
    />
  ) : null;

  return <div className="container">{country ? BarChart : lineChart}</div>;
}

export default Chart;
