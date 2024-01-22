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
    fiscalYear: number;
    estimatedPopulation: number;
    personalIncome: number;
    personalIncomePerCapita: number;
    medianAge: number;
    publicSchoolEnrollment: number;
  }

  const BarChart: React.FC = () => {
    const [chartData, setChartData] = useState<ChartData[] | null>(null);
    
    const { theme, setTheme } = useTheme()
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("/csvsforpafr23/demographics.csv");
          const csvData = await response.text();
          console.log(csvData)
          const dataArray: ChartData[] = csvParse(csvData, (d) => {
            // Ensure that the values are defined before accessing them
            const fiscalYear = d["Fiscal Year"] !== undefined ? +d["Fiscal Year"] : 0;
            const estimatedPopulation =
              d["Estimated Population"] !== undefined
                ? parseInt(d["Estimated Population"]?.replace(/,/g, ""), 10) || 0
                : 0;
            const personalIncome =
              d["Personal Income (in thousands)"] !== undefined
                ? parseInt(d["Personal Income (in thousands)"]?.replace(/,/g, ""), 10) || 0
                : 0;
            const personalIncomePerCapita =
              d["Personal Income Per Capita"] !== undefined
                ? parseInt(d["Personal Income Per Capita"]?.replace(/,/g, ""), 10) || 0
                : 0;
            const medianAge =
              d[" Median Age "] !== undefined
                ? d[" Median Age "].toLowerCase() === "n/a" ? 0 : +d[" Median Age "] || 0
                : 0;
            const publicSchoolEnrollment =
              d["Public School Enrollment"] !== undefined
                ? parseInt(d["Public School Enrollment"]?.replace(/,/g, ""), 10) || 0
                : 0;
          
            return {
              fiscalYear,
              estimatedPopulation,
              personalIncome,
              personalIncomePerCapita,
              medianAge,
              publicSchoolEnrollment,
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

    const labels = chartData.map((data) => data.fiscalYear.toString());

  const datasets = [
    {
      label: "Estimated Population",
      data: chartData.map((data) => data.estimatedPopulation),
      backgroundColor: "rgba(255, 99, 132, 0.7)",
      stack: "stack",
    },
    {
      label: "Personal Income Per Capita",
      data: chartData.map((data) => data.personalIncomePerCapita),
      backgroundColor: "rgba(255, 205, 86, 0.7)",
      stack: "stack",
    },
    {
      label: "Median Age",
      data: chartData.map((data) => data.medianAge),
      backgroundColor: "rgba(54, 162, 235, 0.7)",
      stack: "stack",
    },
    {
      label: "Public School Enrollment",
      data: chartData.map((data) => data.publicSchoolEnrollment),
      backgroundColor: "rgba(75, 192, 192, 0.7)",
      stack: "stack",
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
