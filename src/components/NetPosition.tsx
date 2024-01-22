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
// Add types for your data
interface ChartDataItem {
  year: string;
  category: string;
  businessType: string;
  governmental: number;
  total: number;
}

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);
interface CustomChartDataset {
  label: string;
  data: number[] | Chart.ChartPoint[];
  backgroundColor: string;
}

const NetPositionChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartDataItem[] | null>(null);
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "/csvsforpafr23/6condensedstatementofnetposition1.csv"
        );
        const csvData = await response.text();
console.log(csvData)
const sanitizedCsvData = csvData.replace(/"(.*?)"/g, (_, g) =>
g.replace(/,/g, "")
);

const dataArray: ChartDataItem[] = csvParse(sanitizedCsvData, (d) => {
  const total =
    d.Total !== undefined
      ? +String(d.Total.replace(/,/g, "").replace(/\(|\)/g, "")) *
        (d.Total.includes("(") ? -1 : 1)
      : 0;

  return {
    year: String(d.Year),
    category: String(d.Category),
    businessType: String(d["Business-Type"]),
    governmental:
      d.Governmental !== undefined ? +String(d.Governmental.replace(/,/g, "")) : 0,
    total,
  };
});

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

  const categories = Array.from(
    new Set(chartData.map((data) => data.category))
  );
  const colorMap: Record<string, string> = {
    "2022": "rgba(75, 192, 192, 0.7)",
    "2021": "rgba(255, 99, 132, 0.7)",
    "2020": "rgba(255, 205, 86, 0.7)",
    "2019": "rgba(54, 162, 235, 0.7)",
    "2018": "rgba(255, 159, 64, 0.7)",
    "2017": "rgba(153, 102, 255, 0.7)",
    "2016": "rgba(255, 206, 86, 0.7)",
  };

  const datasets: CustomChartDataset[] = chartData.reduce((acc, data) => {
    const color = colorMap[data.year] || "rgba(0, 0, 0, 0.7)";
    const index = acc.findIndex((dataset) => dataset.label === data.year);
    if (index === -1) {
      acc.push({
        label: data.year,
        data: [data.governmental, data.total],
        backgroundColor: color,
      });
    } else {
      acc[index].data = [
        (acc[index].data as number[])[0] + (data.governmental ?? 0),
        (acc[index].data as number[])[1] + (data.total ?? 0),
      ];
    }
    return acc;
  }, [] as CustomChartDataset[]);

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        beginAtZero: true,
        ticks: {
          color: theme === 'dark' ? 'white' : 'grey',
        },
        grid: {
          color: theme === 'dark' ? 'white' : 'grey',
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        ticks: {
          color: theme === 'dark' ? 'white' : 'grey',
        },
        grid: {
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
      <Bar data={{ labels: categories, datasets }} options={options} />
    </div>
  );
};

export default NetPositionChart;
