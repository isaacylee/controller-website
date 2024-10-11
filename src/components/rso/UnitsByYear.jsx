'use client';
import { Chart, registerables } from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

Chart.register(...registerables);

function isDarkMode() {
  if (typeof window !== 'undefined') {
    // Check local storage for user preference
    const userPreference = localStorage.getItem('theme');
    if (
      userPreference === 'dark' ||
      (userPreference === null &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      return true;
    }
  }
  // Default to light mode on the server or when no preference is set
  return false;
}

function updateChartLabelColor() {
  if (typeof window !== 'undefined') {
    const isDark = isDarkMode();
    // console.log('isDark:', isDark);
    document.documentElement.style.setProperty(
      '--chart-label-color',
      isDark
        ? 'var(--chart-label-color-dark)'
        : 'var(--chart-label-color-light)'
    );
  }
}

updateChartLabelColor();

if (typeof window !== 'undefined') {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  darkModeMediaQuery.addEventListener('change', updateChartLabelColor);
}

export default function UnitsByYear() {
  const [chartData1, setChartData1] = useState({});
  const isDark = isDarkMode();

  useEffect(() => {
    async function fetchChartData1() {
      const response = await fetch(
        'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/rsoCsv/rsoUnitsByYear'
      );
      const data = await response.json();
      const labels = data.rsoUnitsByYear.map((item) => item.year);
      const units = data.rsoUnitsByYear.map((item) => item.number);

      setChartData1({
        labels: labels,
        datasets: [
          {
            label: 'RSO Units by Year',
            data: units,
            backgroundColor: '#41ffca',
            borderColor: '#41ffca',
            borderWidth: 1,
          },
        ],
      });
    }

    fetchChartData1();
  }, []);

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: isDark ? 'white' : 'black',
        },
        grid: {
          display: true,
          color: 'gray',
        },
        title: {
          display: true,
          text: 'Number of RSO Units',
          color: isDark ? 'white' : 'black',
        },
      },
      x: {
        ticks: {
          color: isDark ? 'white' : 'black',
        },
        grid: {
          display: true,
          color: 'gray',
        },
        title: {
          display: true,
          text: 'Year',
          color: isDark ? 'white' : 'black',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className='mb-8 w-full'>
      <p className='pb-4 pt-8 text-center text-xl font-bold dark:text-white'>
        RSO Units by Year
      </p>
      {chartData1.labels ? (
        <Bar data={chartData1} options={chartOptions} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
