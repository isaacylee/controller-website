"use client"
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
        const response = await fetch("/csvsforpafr24/demographics.csv");
        const csvData = await response.text();
        const dataArray: ChartData[] = csvParse(csvData, (d) => ({
          fiscalYear: d["Fiscal Year"] ? +d["Fiscal Year"] : 0,
          estimatedPopulation: d["Estimated Population"] ? parseInt(d["Estimated Population"].replace(/,/g, ""), 10) : 0,
          personalIncome: d["Personal Income (in thousands)"] ? parseInt(d["Personal Income (in thousands)"].replace(/,/g, ""), 10) : 0,
          personalIncomePerCapita: d["Personal Income Per Capita"] ? parseInt(d["Personal Income Per Capita"].replace(/,/g, ""), 10) : 0,
          unemploymentRate: d["Unemployment Rate"] ? parseFloat(d["Unemployment Rate"].replace(/%/, "")) : 0,
        }));
        const filteredData = dataArray.filter((data) => data.fiscalYear >= 2019 && data.fiscalYear <= 2024);
        const sortedData = filteredData.sort((a, b) => a.fiscalYear - b.fiscalYear);
        setChartData(sortedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  if (!chartData) {
    return null;
  }
  const isDark = isDarkMode()
  const labels = chartData.map((data) => data.fiscalYear.toString());
  const datasets = [
    {
      label: "Estimated Population",
      data: chartData.map((data) => data.estimatedPopulation),
      backgroundColor: "#41ffca",
      type: 'bar',
    },
    {
      label: "Personal Income Per Capita",
      data: chartData.map((data) => data.personalIncomePerCapita === 0 ? null : data.personalIncomePerCapita),
      borderColor: "purple",
      backgroundColor: 'rgba(0,0,0,0)',
      type: 'line',
      fill: false,
      yAxisID: "incomeYAxis",
    },
    {
      label: "Unemployment Rate",
      data: chartData.map((data) => data.unemploymentRate),
      backgroundColor: "#FFCA41",
      yAxisID: "percentageYAxis",
      type: 'bar',
    },
  ];

  function isDarkMode() {
    if (typeof window !== 'undefined') {
      const userPreference = localStorage.getItem('theme');
      if (
        userPreference === 'dark' ||
        (userPreference === null &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        return true;
      }
    }
    return false;
  }

  function updateChartLabelColor() {
    if (typeof window !== 'undefined') {
      const isDark = isDarkMode();
      document.documentElement.style.setProperty(
        '--chart-label-color',
        isDark
          ? 'var(--chart-label-color-dark)'
          : 'var(--chart-label-color-light)'
      );
    }
  }

  updateChartLabelColor();


  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Fiscal Year",
          color: isDark ? 'white' : 'black',
        },
        ticks: {
          color: isDark ? 'white' : 'black',
        },
      },
      y: {
        beginAtZero: true,
        // title: {
        //   display: true,
        //   text: "Values",
        //   color: isDark ? 'white' : 'black',
        // },
        ticks: {
          color: isDark ? 'white' : 'black',
        },
        labels: {
          color: isDark ? 'white' : 'black',
        },
      },
      incomeYAxis: {
        // beginAtZero: true,
        // title: {
        //   display: true,
        //   text: "Values",
        //   color: isDark ? 'white' : 'black',
        // },
        ticks: {
          color: isDark ? 'white' : 'black',
        },
        labels: {
          color: isDark ? 'white' : 'black',
        },
      },
      percentageYAxis: {
        // beginAtZero: true,
        title: {
          display: true,
          text: "Values",
          color: isDark ? 'white' : 'black',
        },
        ticks: {
          color: isDark ? 'white' : 'black',
        },
        labels: {
          color: isDark ? 'white' : 'black',
        },
      }
    },
    plugins: {
      legend: {
        labels: {
          color: isDark ? 'white' : 'black',
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "500px", overflowX: "auto" }}>
      <Bar data={{ labels, datasets } as any} options={options} />
    </div>
  );
};

export default BarChart;
