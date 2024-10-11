'use client';
import { Chart, registerables } from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

Chart.register(...registerables);

export default function UnitsByYear() {
  const [chartData1, setChartData1] = useState({});
  // const themeChanger = useContext(ThemeContext);
  const isDark = localStorage.theme === 'dark';

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
          color: isDark ? '#FFF' : '#000',
        },
        grid: {
          display: true,
          color: 'gray',
        },
        title: {
          display: true,
          text: 'Number of RSO Units',
          color: isDark ? '#FFF' : '#000',
        },
      },
      x: {
        ticks: {
          color: isDark ? '#FFF' : '#000',
        },
        grid: {
          display: true,
          color: 'gray',
        },
        title: {
          display: true,
          text: 'Year',
          color: isDark ? '#FFF' : '#000',
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
        <Bar key={isDark} data={chartData1} options={chartOptions} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
