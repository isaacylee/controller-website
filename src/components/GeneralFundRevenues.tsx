"use client";
import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
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
  Revenue: string;
  Value: number;
  "Fiscal Year": string;
}

const BarChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/csvsforpafr23/7fygeneralfundtotalrevenues.csv");
        const csvData = await response.text();

        const dataArray: ChartData[] = csvParse(csvData, (d) => ({
          Revenue: d["Revenue"],
          Value: parseFloat(d["Value"].replace(/,/g, "").trim()) || 0,
          "Fiscal Year": d["Fiscal Year"].trim(),
        }));
        const filteredData = dataArray.filter((data) => data["Fiscal Year"] >= "2019" && data["Fiscal Year"] <= "2023");
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

  const aggregatedData: { [revenue: string]: { [year: string]: number } } = {};
  const yearlySum: { [year: string]: number } = {};

  chartData.forEach((data) => {
    const revenue = data.Revenue;
    const year = data["Fiscal Year"];
    if (!aggregatedData[revenue]) {
      aggregatedData[revenue] = {};
    }
    if (aggregatedData[revenue][year]) {
      aggregatedData[revenue][year] += data.Value;
    } else {
      aggregatedData[revenue][year] = data.Value;
    }
    if (yearlySum[year]) {
      yearlySum[year] += data.Value;
    } else {
      yearlySum[year] = data.Value;
    }
  });

  const labels = Object.keys(aggregatedData[Object.keys(aggregatedData)[0]]);
  const datasets = Object.entries(aggregatedData).map(([revenue, data]) => ({
    label: revenue,
    data: Object.values(data),
    backgroundColor: getRandomColor(),
    stack: "stack",
  }));

  const lineDataset = {
    label: "Yearly Sum",
    data: labels.map((year) => yearlySum[year]),
    fill: false,
    borderColor: "gray",
    type: 'line',
  };

  const allDatasets = [...datasets, lineDataset];

  function getRandomColor() {
    return `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`;
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
