"use client";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { csvParse } from "d3";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

interface ChartData {
  Year: string;
  "Activity Type": string;
  Total: number;
  Value: number;
}

const BarChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/csvsforpafr23/4bondeddebtandlongtermnotespayable.csv");
        const csvData = await response.text();

        const dataArray: ChartData[] = csvParse(csvData, (d, i) => {
          try {
            return {
              Year: d["Fiscal Year"].trim(),
              "Activity Type": d["Activity Type"],
              Total: parseFloat(d["Total"].replace(/,/g, "").trim()) || 0,
              Value: parseFloat(d["Value "].replace(/,/g, "").trim()) || 0,
            };
          } catch (error) {
            console.error(`Error parsing row ${i + 1}:`, error);
            console.log("Row content:", d);
            return null;
          }
        }).filter((d) => d !== null);

        const filteredData = dataArray.filter((data) => data["Year"] >= "2019" && data["Year"] <= "2023");
          setChartData(filteredData);
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
  const activitiesSum: { [year: string]: number } = {};
  chartData.forEach((data) => {
    const activityType = data["Activity Type"];
    const year = data.Year;
    if (!aggregatedData[activityType]) {
      aggregatedData[activityType] = {};
    }
    if (aggregatedData[activityType][year]) {
      aggregatedData[activityType][year] += data.Value;
    } else {
      aggregatedData[activityType][year] = data.Value;
    }
    if (activitiesSum[year]) {
      activitiesSum[year] += data.Value;
    } else {
      activitiesSum[year] = data.Value;
    }
  });

  const labels = Object.keys(aggregatedData[Object.keys(aggregatedData)[0]]);
  const datasets = Object.entries(aggregatedData).map(([activityType, data]) => ({
    label: activityType,
    data: Object.values(data),
    backgroundColor: getColor(activityType),
    stack: "stack",
  }));

  const lineDataset = {
    label: "Yearly Sum",
    data: labels.map((year) => activitiesSum[year]),
    fill: false,
    borderColor: "gray",
    type: 'line',
  };

  const allDatasets = [...datasets, lineDataset];

  function getColor(activityType: string) {
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
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Values",
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "500px", overflowX: "auto" }}>
      <Bar data={{ labels, datasets: allDatasets }} options={options} />
    </div>
  );
};

export default BarChart;

