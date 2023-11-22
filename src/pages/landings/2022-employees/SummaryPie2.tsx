import { Chart, registerables } from 'chart.js';
import React, {useState } from 'react';
import { Pie } from 'react-chartjs-2';

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
    console.log('isDark:', isDark);
    // document.documentElement.style.setProperty(
    //   '--chart-label-color',
    //   isDark
    //     ? 'var(--chart-label-color-dark)'
    //     : 'var(--chart-label-color-light)'
    // );
    const root = document.documentElement;
    root.style.setProperty('--chart-label-color', isDark ? 'white' : 'black');
  }
}

updateChartLabelColor();

if (typeof window !== 'undefined') {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  darkModeMediaQuery.addEventListener('change', updateChartLabelColor);
}

function SummaryPie1() {
  const [LAEmployees] = useState([
    {
      id: 1,
      cityOfLA: 'Outside of City of LA',
      noOfEmployees: 32066,
      percentOfEmployees: 0.6373,
      totalPayroll: 3635090608,
      percentOfTotalPayroll: 0.7531,
    },
    {
      id: 2,
      cityOfLA: 'Inside of City of LA',
      noOfEmployees: 18243,
      percentOfEmployees: 0.3627,
      totalPayroll: 1191730268,
      percentOfTotalPayroll: 0.2469,
    },
  ]);

  const isDark = isDarkMode();

  const data = {
    labels: LAEmployees.map((x: any) => x.cityOfLA),
    datasets: [
      {
        label: 'Total Payroll',
        data: LAEmployees.map((x: any) => x.totalPayroll),
        backgroundColor: [
          'rgba(1, 184, 193, 0.7)',
          "rgba(0, 137, 75, 0.7)",
        ],
        borderColor: [
          '#2dd4bf',
          "#16a34a",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
        // color: 'rgba(0, 0, 0, 1)',
        labels: {
          font: {
            weight: 'bold',
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className='mx-2 mb-4'>
      <h4 className='mb-2' style={{ color: isDark ? 'white' : 'black' }}>
        City of LA Total Payroll
      </h4>
      <Pie data={data} height={150} options={options} />
      <p className='mt-3' style={{ color: isDark ? 'white' : 'black' }}>
        Total Payroll: <b>$4,826,820,876</b>
      </p>
    </div>
  );
}

export default SummaryPie1;