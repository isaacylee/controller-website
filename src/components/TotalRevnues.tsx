"use client";
import {
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { csvParse } from "d3";
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

interface ChartData {
  Year: string;
  "Activity Type": string;
  Activity: string;
  "Revenue Type": string;
  Revenue: number;
}

const BarChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData[] | null>(null);
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/csvsforpafr23/1totalcityrevenue.csv");
        const csvData = await response.text();

        const dataArray: ChartData[] = csvParse(csvData, (d) => ({
          Year: String(d["Year"]),
          "Activity Type": String(d["Activity Type"]),
          Activity: String(d["Activity"]),
          "Revenue Type": String(d["Revenue Type"]),
          Revenue: parseFloat(String(d[" Revenue "]).replace(/,/g, "").trim()) || 0,
        }));
        
        setChartData(dataArray);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!chartData) {
    return null;
  }
  const aggregatedData: { [activityType: string]: { [year: string]: number } } = {};
  chartData.forEach((data) => {
    const activityType = data["Activity Type"];
    const year = data.Year;
    if (!aggregatedData[activityType]) {
      aggregatedData[activityType] = {};
    }
    if (aggregatedData[activityType][year]) {
      aggregatedData[activityType][year] += data.Revenue;
    } else {
      aggregatedData[activityType][year] = data.Revenue;
    }
  });

  const labels = Object.keys(aggregatedData[Object.keys(aggregatedData)[0]]);
  const datasets = Object.entries(aggregatedData).map(([activityType, data]) => ({
    label: activityType,
    data: Object.values(data),
    backgroundColor: getColor(activityType),
    stack: "stack",
  }));

  function getColor(activityType: string) {
    console.log(activityType)
    return activityType === 'Governmental' ? 'rgba(255, 165, 0, 0.7)' : 'rgba(0, 0, 255, 0.7)';
  }
  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Fiscal Year",
          color: theme === 'dark' ? 'white' : 'grey',
        },
        ticks: {
          color: theme === 'dark' ? 'white' : 'grey',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Values",
          color: theme === 'dark' ? 'white' : 'grey',
        },
        ticks: {
          color: theme === 'dark' ? 'white' : 'grey',
        },
        labels: {
          color: theme === 'dark' ? 'white' : 'grey',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: theme === 'dark' ? 'white' : '#fff', // Set color for legend text
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "500px", overflowX: "auto" }}>
      <Bar data={{ labels, datasets }} options={options} />
    </div>
  );
};

export default BarChart;
