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

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

interface ChartData {
  employer: string;
  employees22: number;
  rank22: number;
  percent22: number;
  employees13: number;
  rank13: number;
  percent13: number;
}

const TopEmployeeChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/csvsforpafr22/employers-1.csv');
        const csvData = await response.text();

        const dataArray = csvParse(csvData, (d) => ({
          employer: d.Employer ?? '', // Default to an empty string if undefined
          employees22: d["22 Employees"] ? +d["22 Employees"].replace(/,/g, '') : 0, // Replace commas and convert to number, default to 0 if undefined
          rank22: d["22 Rank"] ? +d["22 Rank"] : 0, // Convert to number, default to 0 if undefined
          percent22: d["22 % of Total"] ? +d["22 % of Total"].replace('%', '') : 0, // Remove percentage sign, convert to number, default to 0 if undefined
          employees13: d["13 Employees"] ? +d["13 Employees"].replace(/,/g, '') : 0, // Replace commas and convert to number, default to 0 if undefined
          rank13: d["13 Rank"] ? +d["13 Rank"] : 0, // Convert to number, default to 0 if undefined
          percent13: d["13 % of Total"] ? +d["13 % of Total"].replace('%', '') : 0, // Remove percentage sign, convert to number, default to 0 if undefined
        }));
        

        const filteredData = dataArray.filter(
          (data) => data.employer !== 'All Others' && data.employer !== 'TOTAL'
        );

        setChartData(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!chartData) {
    return null;
  }

  const labels = chartData.map((data) => data.employer);

  const datasets = [
    {
      label: '2022 Employees',
      data: chartData.map((data) => data.employees22),
      backgroundColor: 'rgba(255, 99, 132, 0.7)',
      stack: 'stack',
    },
    {
      label: '2013 Employees',
      data: chartData.map((data) => data.employees13),
      backgroundColor: 'rgba(75, 192, 192, 0.7)',
      stack: 'stack',
    },
  ];

  const options = {
    maintainAspectRatio: false,
    scales: {
        x: {
            beginAtZero: true,
            title: {
                display: true,
                text: 'Employer',
                color: 'white' // Set color of x-axis title to white
            },
            ticks: {
                color: 'white' // Set color of x-axis ticks to white
            }
        },
        y: {
            beginAtZero: true,
            title: {
                display: true,
                text: 'Number of Employees',
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
      <Bar data={{ labels, datasets }} options={options} />
    </div>
  );
};

export default TopEmployeeChart;
