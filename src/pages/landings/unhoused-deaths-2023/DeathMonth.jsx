"use client";
import axios from "axios";
import {Chart, registerables} from "chart.js";
import { useEffect, useState } from "react";
import {Bar} from "react-chartjs-2";


Chart.register(...registerables);

export default function DeathMonth() {
  const [month, setMonth] = useState([]);

  useEffect(() => {
    axios
    .get('https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/2023UnhousedDeathsIngest/month')
    .then((response) => {
        const data = response.data.month;
        console.log("month", data);
        setMonth(data);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
  }, []);

    var data = {
        labels: month.map((x) => x.month),
        datasets: [
          {
            data: month.map((x) => x.numberOfDeaths),
            backgroundColor: [
              "#41ffca",
            ],
            borderColor: [
              "#41ffca",
            ],
            borderWidth: 1,
          },
        ],
      };
    
      var options = {
        plugins: {
          legend: {
            display: false,
            labels: {
              color: "rgb(255, 255, 255)",
              font: {
                weight: "bold",
                size: 12,
              },
            },
          },
        },
        scales: {
          y: {
            grid: {
              display: true,
              color: "rgba(198, 198, 198, .5)",
            },
            ticks: {
              color: "rgb(255, 255, 255)",
            },
            title: {
                display: true,
                text: '# of Deaths',
              color: "rgb(255, 255, 255)",
            }
          },
          x: {
            grid: {
              display: true,
              color: "rgba(198, 198, 198, .5)",
            },
            ticks: {
              color: "rgb(255, 255, 255)",
            },
          },
        },
      };
    
      return (
        <div className="mt-4 py-4 px-1 sm:px-5 md:px-5 lg:px-5 xl:px-5 bg-zinc-900">
          <Bar data={data} height={150} width={200} options={options} />
        </div>
      );
}