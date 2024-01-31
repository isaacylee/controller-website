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
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

interface ChartData {
  Year: string;
  "Activity Type": string;
  // Activity: string;
  Value: number;
}

const BarChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/csvsforpafr23/2expend-sum.csv");
        const csvData = await response.text();

        const dataArray: ChartData[] = csvParse(csvData, (d) => ({
          Year: String(d["Year"]),
          "Activity Type": String(d["Activity Type"]),
          Value: parseFloat(String(d["Value"]).replace(/,/g, "").trim()) || 0,
        }));

        const filteredData = dataArray.filter(
          (data) => data?.Year >= "2019" && data?.Year <= "2023"
        );
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
const labels = [...new Set(chartData.map((item) => item.Year))];

  const datasets = [
    {
      label: "Governmental",
      data: chartData
        .filter((data) => data["Activity Type"] === "Governmental")
        .map((data) => data.Value),
      backgroundColor: getColor("Governmental"),
      stack: "stack",
    },
    {
      label: "Business-Type",
      data: chartData
        .filter((data) => data["Activity Type"] === "Business-Type")
        .map((data) => data.Value),
      backgroundColor: getColor("Business-Type"),
      stack: "stack",
    },
  ];

  function getColor(activityType: string) {
    return activityType === "Governmental" ? "#41ffca" : "#ffca41";
  }

  function isDarkMode() {
    if (typeof window !== "undefined") {
      const userPreference = localStorage.getItem("theme");
      if (
        userPreference === "dark" ||
        (userPreference === null &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        return true;
      }
    }
    return false;
  }

  function updateChartLabelColor() {
    if (typeof window !== "undefined") {
      const isDark = isDarkMode();
      document.documentElement.style.setProperty(
        "--chart-label-color",
        isDark
          ? "var(--chart-label-color-dark)"
          : "var(--chart-label-color-light)"
      );
    }
  }

  updateChartLabelColor();

  const isDark = isDarkMode();

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Fiscal Year",
          color: isDark ? "white" : "black",
        },
        ticks: {
          color: isDark ? "white" : "black",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Values",
          color: isDark ? "white" : "black",
        },
        ticks: {
          color: isDark ? "white" : "black",
        },
        labels: {
          color: isDark ? "white" : "black",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: isDark ? "white" : "black",
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
