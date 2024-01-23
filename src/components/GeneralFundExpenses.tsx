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
    Expenditure: string;
    Value: number;
    "Fiscal Year": string;
  }
  
  const BarChart: React.FC = () => {
    const [chartData, setChartData] = useState<ChartData[] | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("/csvsforpafr23/8fygeneralfundtotalexpenditures.csv");
          const csvData = await response.text();
  
          const dataArray: ChartData[] = csvParse(csvData, (d) => ({
            Expenditure: d["Expenditure"],
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
    chartData.forEach((data) => {
      const expenditure = data.Expenditure;
      const year = data["Fiscal Year"];
      if (!aggregatedData[expenditure]) {
        aggregatedData[expenditure] = {};
      }
      if (aggregatedData[expenditure][year]) {
        aggregatedData[expenditure][year] += data.Value;
      } else {
        aggregatedData[expenditure][year] = data.Value;
      }
    });
  
    const labels = Object.keys(aggregatedData[Object.keys(aggregatedData)[0]]);
    const datasets = Object.entries(aggregatedData).map(([expenditure, data]) => ({
      label: expenditure,
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
        <Bar data={{ labels, datasets }} options={options} />
      </div>
    );
  };
  
  export default BarChart;
  