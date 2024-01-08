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
  fiscalYear: number;
  estimatedPopulation: number;
  personalIncome: number;
  personalIncomePerCapita: number;
  medianAge: number;
  publicSchoolEnrollment: number;
  unemploymentRate: number;
}

const BarChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/csvsforpafr22/demogra.csv');
        const csvData = await response.text();

        const dataArray: ChartData[] = csvParse(csvData, (d) => ({
          fiscalYear: +d['Fiscal Year'],
          estimatedPopulation: +d['Estimatd Population'].replace(/,/g, ''),
          personalIncome: +d['Personal Income (in thousands)'].replace(/,/g, ''),
          personalIncomePerCapita: +d['Personal Income Per Capita'].replace(/,/g, ''),
          medianAge: isNaN(d['Median Age']) ? 0 : +d['Median Age'],
          publicSchoolEnrollment: +d['Public School Enrollment'].replace(/,/g, ''),
          unemploymentRate: isNaN(d['Unemployment Rate']) ? 0 : +d['Unemployment Rate'].replace('%', ''),
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

  const labels = chartData.map((data) => data.fiscalYear.toString());

  const datasets = [
    {
      label: 'Estimated Population',
      data: chartData.map((data) => data.estimatedPopulation),
      backgroundColor: 'rgba(255, 99, 132, 0.7)',
      stack: 'stack',
    },
    // {
    //   label: 'Personal Income (in thousands)',
    //   data: chartData.map((data) => data.personalIncome),
    //   backgroundColor: 'rgba(75, 192, 192, 0.7)',
    //   stack: 'stack',
    // },
    {
      label: 'Personal Income Per Capita',
      data: chartData.map((data) => data.personalIncomePerCapita),
      backgroundColor: 'rgba(255, 205, 86, 0.7)',
      stack: 'stack',
    },
    {
      label: 'Median Age',
      data: chartData.map((data) => data.medianAge),
      backgroundColor: 'rgba(54, 162, 235, 0.7)',
      stack: 'stack',
    },
    {
      label: 'Unemployment Rate',
      data: chartData.map((data) => data.unemploymentRate),
      backgroundColor: 'blue',
      stack: 'stack',
    },
    {
      label: 'Public School Enrollment',
      data: chartData.map((data) => data.publicSchoolEnrollment),
      backgroundColor: 'rgba(75, 192, 192, 0.7)',
      stack: 'stack',
    },
  ];

  const options: Chart.ChartOptions = {
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Fiscal Year',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Values',
        },
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '500px', overflowX: 'auto' }}>
      <Bar data={{ labels, datasets }} options={options} />
    </div>
  );
};

export default BarChart;
