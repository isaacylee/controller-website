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
    Revenue: string;
    Value: number;
    "Fiscal Year": string;
  }
  
  const BarChart: React.FC = () => {
    const [chartData, setChartData] = useState<ChartData[] | null>(null);
    const { theme, setTheme } = useTheme()
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
  
    const aggregatedData: { [revenue: string]: { [year: string]: number } } = {};
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
    });
  
    const labels = Object.keys(aggregatedData[Object.keys(aggregatedData)[0]]);
    const datasets = Object.entries(aggregatedData).map(([revenue, data]) => ({
      label: revenue,
      data: Object.values(data),
      backgroundColor: getRandomColor(),
      stack: "stack",
    }));
  
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
  