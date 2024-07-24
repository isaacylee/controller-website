'use client';

import axios from 'axios';
import { Chart, registerables } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

Chart.register(...registerables);

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

if (typeof window !== 'undefined') {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  darkModeMediaQuery.addEventListener('change', updateChartLabelColor);
}

function BSYear() {
  const [years, setYears] = useState([]);

  const isDark = isDarkMode();

  useEffect(() => {
    axios
      .get(
        'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/buildingAndSafetyCharts/years'
      )
      .then((response) => {
        const data = response.data['years'];
        setYears(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const data = {
    labels: years.map((x) => x.year),
    datasets: [
      {
        label: '# of Cases',
        data: years.map((x) => x.amount),
        backgroundColor: ['#41ffca'],
        borderColor: ['#41ffca'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: true,
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels: {
          labels: {
            color: isDark ? 'white' : 'black',
          },
          font: {
            weight: 'bold',
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || '';
            const value = context.parsed.y.toLocaleString(); // Format number with commas

            return `${label}: ${value}`;
          },
        },
      },
    },
    scales: {
      y: {
        grid: {
          display: true,
          color: isDark ? '#44403c' : 'black',
        },
        ticks: {
          color: isDark ? 'white' : 'black',
          callback: function (value) {
            return value;
          },
        },
        title: {
          display: true,
          text: '# of Cases',
          color: isDark ? 'white' : 'black',
        },
      },
      x: {
        grid: {
          display: true,
          color: isDark ? '#44403c' : 'black',
        },
        ticks: {
          color: isDark ? 'white' : 'black',
        },
        title: {
          display: true,
          text: 'Year',
          color: isDark ? 'white' : 'black',
        },
      },
    },
  };

  return (
    <>
      <div className='mt-4'>
        <Bar data={data} height={200} options={options} />
      </div>
    </>
  );
}

export default BSYear;
