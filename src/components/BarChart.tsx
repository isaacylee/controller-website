"use client";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip } from "chart.js";
import { csvParse } from "d3";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

interface ChartData {
  fiscalYear: number;
  estimatedPopulation: number;
  personalIncome: number;
  personalIncomePerCapita: number;
  unemploymentRate: number;
}

const BarChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/csvsforpafr23/demographics.csv");
        const csvData = await response.text();

        const dataArray: ChartData[] = csvParse(csvData, (d) => ({
          fiscalYear: +d["Fiscal Year"],
          estimatedPopulation: parseInt(d["Estimated Population"].replace(/,/g, ""), 10) || 0,
          personalIncome: parseInt(d["Personal Income (in thousands)"].replace(/,/g, ""), 10) || 0,
          personalIncomePerCapita: parseInt(d["Personal Income Per Capita"].replace(/,/g, ""), 10) || 0,
          unemploymentRate: parseFloat(d["Unemployment Rate"].replace(/%/, "")) || 0,
        }));
        const filteredData = dataArray.filter((data) => data.fiscalYear >= 2019 && data.fiscalYear <= 2023);
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

  const labels = chartData.map((data) => data.fiscalYear.toString());

  const datasets = [
    {
      label: "Estimated Population",
      data: chartData.map((data) => data.estimatedPopulation),
      backgroundColor: "rgba(255, 99, 132, 0.7)",
    },
    {
      label: "Personal Income Per Capita",
      data: chartData.map((data) => data.personalIncomePerCapita),
      backgroundColor: "rgba(255, 205, 86, 0.7)",
    },
    {
      label: "Unemployment Rate",
      data: chartData.map((data) => data.unemploymentRate),
      backgroundColor: "rgba(54, 162, 235, 0.7)",
      yAxisID: "percentageYAxis",
    },
  ];

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
      percentageYAxis: {
        position: 'right',
        beginAtZero: true,
        title: {
          display: true,
          text: "Unemployment Rate (%)",
        },
      },
    },
    plugins: {
      xLabels: [{ className: 'dark:text-white' }],
      yLabels: [{ className: 'dark:text-white' }],
    },
  };

  return (
    <div style={{ width: "100%", height: "500px", overflowX: "auto" }}>
      <Bar data={{ labels, datasets }} options={options} />
    </div>
  );
};

export default BarChart;
