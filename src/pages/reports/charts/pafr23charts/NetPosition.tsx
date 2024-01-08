"use client"
import {
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { csvParse } from 'd3';
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

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const NetPositionChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartDataItem[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/csvsforpafr22/6condensedstatementofnetposition.csv');
        const csvData = await response.text();

        const dataArray: ChartDataItem[] = csvParse(csvData, (d) => ({
          year: d.Year ?? '', // Default to an empty string if undefined
          category: d.Category ?? '', // Default to an empty string if undefined
          businessType: d['Business-Type'] ?? '', // Default to an empty string if undefined
          governmental: d.Governmental ? +d.Governmental.replace(/,/g, '') : 0, // Replace commas, convert to number, default to 0 if undefined
          total: d.Total ? +d.Total.replace(/,/g, '') : 0, // Replace commas, convert to number, default to 0 if undefined
        }));
        

        setChartData(dataArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!chartData) {
    return null;
  }

  const categories = Array.from(new Set(chartData.map((data) => data.category)));

  const uniqueYears = Array.from(new Set(chartData.map((data) => data.year)));
  const colorMap: Record<string, string> = {
    '2022': 'rgba(75, 192, 192, 0.7)',
    '2021': 'rgba(255, 99, 132, 0.7)',
    '2020': 'rgba(255, 205, 86, 0.7)',
    '2019': 'rgba(54, 162, 235, 0.7)',
    '2018': 'rgba(255, 159, 64, 0.7)',
    '2017': 'rgba(153, 102, 255, 0.7)',
    '2016': 'rgba(255, 206, 86, 0.7)',
  };

  const datasets = chartData.reduce((acc, data) => {
    const color = colorMap[data.year] || 'rgba(0, 0, 0, 0.7)';
    const index = acc.findIndex((dataset) => dataset.label === data.year);
    if (index === -1) {
      acc.push({
        label: data.year,
        data: [data.governmental, data.total],
        backgroundColor: color,
      });
    } else {
      acc[index].data[0] += data.governmental;
      acc[index].data[1] += data.total;
    }
    return acc;
  }, [] as Chart.ChartDataSets[]);

  const options: Chart.ChartOptions = {
    maintainAspectRatio: false,
    scales: {
        x: {
            stacked: true,
            beginAtZero: true,
            title: {
                display: true,
                text: '', // Replace with your actual x-axis title
                color: 'white' // Set color of x-axis title to white
            },
            ticks: {
                color: 'white' // Set color of x-axis ticks to white
            }
        },
        y: {
            stacked: true,
            beginAtZero: true,
            title: {
                display: true,
                text: '', // Replace with your actual y-axis title
                color: 'white' // Set color of y-axis title to white
            },
            ticks: {
                color: 'white' // Set color of y-axis ticks to white
            }
        }
    },
    plugins: {
        legend: {
            labels: {
                color: 'white' // Set color of legend text to white
            }
        }
    }
};


  return (
    <div style={{ width: '100%', height: '500px', overflowX: 'auto' }}>
      <Bar data={{ labels: categories, datasets }} options={options} />
    </div>
  );
};

export default NetPositionChart;
