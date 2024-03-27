import { Chart, registerables } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2'; // Import Pie chart

Chart.register(...registerables);

const Hbfs = () => {
  const [chartData, setChartData] = useState<{
    type: { year: number; arrestType: string; arrests: number }[];
  } | null>(null);
  const [theme, setTheme] = useState<string>('light');
  const [selectedYear, setSelectedYear] = useState<string>('2023'); // Start with 2021

  useEffect(() => {
    const currTheme: string | null = localStorage.getItem('theme');
    if (currTheme != null) setTheme(currTheme);
  }, [theme]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/4118Ingest/type'
        );
        const data = await response.json();
        setChartData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  const selectedData = chartData.type.filter(
    (item) =>
      selectedYear === 'All Years' || item.year === parseInt(selectedYear)
  );

  const pieChartData = {
    labels: selectedData.map((item) => item.arrestType),
    datasets: [
      {
        data: selectedData.map((item) => item.arrests),
        backgroundColor: ['#FFCA41', '#41FFCA', '#DE3163'],
        borderWidth: 1,
      },
    ],
  };
  

  const chartOptions = {
    responsive: true, // Enable responsiveness
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: true,
        labels: {
          color: 'white', // Set legend text color to white
        },
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <label htmlFor='yearDropdown'>Select Year: </label>
      <select
        id='yearDropdown'
        onChange={(e) => setSelectedYear(e.target.value)}
        value={selectedYear}
        style={{ color: 'black', overflow: 'hidden' }}
      >
        <option value='2021'>2021</option>
        <option value='2022'>2022</option>
        <option value='2023'>2023</option>
        <option value='2024'>2024</option>
      </select>
      <div className='chart-container'>
        <Pie data={pieChartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Hbfs;
