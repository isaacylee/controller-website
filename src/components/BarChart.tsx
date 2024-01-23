import { BarElement, CategoryScale, Chart, LinearScale, Title, Tooltip } from "chart.js";
import { csvParse } from "d3";
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
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
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/csvsforpafr23/demographics.csv");
        const csvData = await response.text();
        // Parse and process CSV data
        const dataArray: ChartData[] = csvParse(csvData, (d) => ({
          fiscalYear: d["Fiscal Year"] ? +d["Fiscal Year"] : 0,
          estimatedPopulation: d["Estimated Population"] ? parseInt(d["Estimated Population"].replace(/,/g, ""), 10) : 0,
          personalIncome: d["Personal Income (in thousands)"] ? parseInt(d["Personal Income (in thousands)"].replace(/,/g, ""), 10) : 0,
          personalIncomePerCapita: d["Personal Income Per Capita"] ? parseInt(d["Personal Income Per Capita"].replace(/,/g, ""), 10) : 0,
          unemploymentRate: d["Unemployment Rate"] ? parseFloat(d["Unemployment Rate"].replace(/%/, "")) : 0,
        }));
        // Filter data
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

  // Map chart data
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

  // Updated options
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
          color: theme === 'dark' ? 'white' : 'grey', // Set color for y-axis title
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
          color: theme === 'dark' ? 'white' : 'grey', // Set color for legend text
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
