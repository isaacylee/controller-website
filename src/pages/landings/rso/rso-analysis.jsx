'use client';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2'; // Import Bar component
import Chart from 'chart.js/auto';

export default function Analysis() {
  const [chartData1, setChartData1] = useState({});
  const [chartData2, setChartData2] = useState({});
  const [chartData3, setChartData3] = useState({});
  const [zipCodeData, setZipCodeData] = useState([]);

  useEffect(() => {
    async function fetchChartData1() {
      const response = await fetch('https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/rsoCsv/rsoUnitsByYear');
      const data = await response.json();
      const labels = data.rsoUnitsByYear.map(item => item.year);
      const units = data.rsoUnitsByYear.map(item => item.number);

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

    async function fetchChartData2() {
      const response = await fetch('https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/rsoCsv/rsoUnitsByCd2024');
      const data = await response.json();
      const labels = data.rsoUnitsByCd2024.map(item => `CD ${item.cd}`);
      const units = data.rsoUnitsByCd2024.map(item => item.number);

      setChartData2({
        labels: labels,
        datasets: [
          {
            label: 'Number of Tenant Buyouts',
            data: units,
            backgroundColor: '#41ffca',
            borderColor: '#41ffca',
            borderWidth: 1,
          },
        ],
      });
    }

    async function fetchChartData3() {
      const response = await fetch('https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/rsoCsv/rsoUnitsNetChgByCd');
      const data = await response.json();
      const labels = data.rsoUnitsNetChgByCd.map(item => `CD ${item.cd}`);
      const units = data.rsoUnitsNetChgByCd.map(item => item.number);

      setChartData3({
        labels: labels,
        datasets: [
          {
            label: 'RSO Units Net Chg by Council District',
            data: units,
            backgroundColor: '#41ffca',
            borderColor: '#41ffca',
            borderWidth: 1,
          },
        ],
      });
    }

    async function fetchZipCodeData() {
      const response = await fetch('https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/rsoCsv/rsoUnitsByZipCode2024');
      const data = await response.json();
      setZipCodeData(data.rsoUnitsByZipCode2024);
    }

    fetchChartData1();
    fetchChartData2();
    fetchChartData3();
    fetchZipCodeData();
  }, []);

  return (
    <>
      <Head>
        <title>Analysis</title>
      </Head>
      <Navbar />
      <center>
        <div className="mx-2 flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl">
          <h1 className="pt-8 pb-4 text-center text-3xl font-bold dark:text-white">
            Analysis
          </h1>
          <div className="w-full mb-8">
            <p className="pt-8 pb-4 text-center text-xl font-bold dark:text-white">RSO Units by Year</p>
            {chartData1.labels ? (
              <Bar
                data={chartData1}
                options={{
                  scales: {
                    y: {
                      beginAtZero: true,
                      ticks: {
                        color: 'white',
                      },
                      grid: {
                        display: true, // Enable grid lines
                        color: 'gray',
                      },
                      title: {
                        display: true,
                        text: 'Number of RSO Units', // Add title to the y-axis
                        color: 'white',
                      },
                    },
                    x: {
                      ticks: {
                        color: 'white',
                      },
                      grid: {
                        display: true, // Enable grid lines
                        color: 'gray',
                      },
                      title: {
                        display: true,
                        text: 'Year', // Add title to the x-axis
                        color: 'white',
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      display: false, // Remove legend
                    },
                  },
                }}
              />
            ) : (
              <p>Loading data...</p>
            )}
          </div>
          <div className="w-full mb-8">
            <p className="pt-8 pb-4 text-center text-xl font-bold dark:text-white">Number of Tenant Buyouts by Council District</p>
            {chartData2.labels ? (
              <Bar
                data={chartData2}
                options={{
                  scales: {
                    y: {
                      beginAtZero: true,
                      ticks: {
                        color: 'white',
                      },
                      grid: {
                        display: true, // Enable grid lines
                        color: 'gray',
                      },
                      title: {
                        display: true,
                        text: 'Number of Buyouts', // Add title to the y-axis
                        color: 'white',
                      },
                    },
                    x: {
                      ticks: {
                        color: 'white',
                      },
                      grid: {
                        display: true, // Enable grid lines
                        color: 'gray',
                      },
                      title: {
                        display: true,
                        text: 'Council District', // Add title to the x-axis
                        color: 'white',
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      display: false, // Remove legend
                    },
                  },
                }}
              />
            ) : (
              <p>Loading data...</p>
            )}
          </div>
          <div className="w-full mb-8">
            <p className="pt-8 pb-4 text-center text-xl font-bold dark:text-white">Net Change in RSO Units by City Council District</p>
            {chartData3.labels ? (
              <Bar
                data={chartData3}
                options={{
                  scales: {
                    y: {
                      beginAtZero: true,
                      ticks: {
                        color: 'white',
                      },
                      grid: {
                        display: true, // Enable grid lines
                        color: 'gray',
                      },
                      title: {
                        display: true,
                        text: 'Net Change in RSO Units', // Add title to the y-axis
                        color: 'white',
                      },
                    },
                    x: {
                      ticks: {
                        color: 'white',
                      },
                      grid: {
                        display: true, // Enable grid lines
                        color: 'gray',
                      },
                      title: {
                        display: true,
                        text: 'Council District', // Add title to the x-axis
                        color: 'white',
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      display: false, // Remove legend
                    },
                  },
                }}
              />
            ) : (
              <p>Loading data...</p>
            )}
          </div>
          <div className="w-full mb-8">
            <h2 className="pt-8 pb-4 text-center text-2xl font-bold dark:text-white">
              Top 20 Zip Codes with the Most RSO Units (2024)
            </h2>
            <table className="table-auto w-full text-left text-black bg-white">
              <thead style={{ backgroundColor: '#41ffca', color: 'black' }}>
                <tr>
                  <th className="px-2 py-1 border border-gray-400">#</th>
                  <th className="px-2 py-1 border border-gray-400">Zip Code</th>
                  <th className="px-2 py-1 border border-gray-400">Communities</th>
                  <th className="px-2 py-1 border border-gray-400">Number</th>
                </tr>
              </thead>
              <tbody>
                {zipCodeData.map((item, index) => (
                  <tr key={item.zipCode}>
                    <td className="border px-2 py-1 border-gray-400">{index + 1}</td>
                    <td className="border px-2 py-1 border-gray-400">{item.zipCode}</td>
                    <td className="border px-2 py-1 border-gray-400">{item.communities}</td>
                    <td className="border px-2 py-1 border-gray-400">{item.number}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </center>
    </>
  );
}
