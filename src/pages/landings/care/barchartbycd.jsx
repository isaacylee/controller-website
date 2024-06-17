'use client';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

export default function Analysis() {
  const [careData, setCareData] = useState({});
  const [carePlusData, setCarePlusData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/updatedCarePlusGeocodedNew/updatedCarePlusGeocodedNewCsv');
      const data = await response.json();
      const careOperations = {};
      const carePlusOperations = {};
      const allDistricts = Array.from({ length: 15 }, (_, i) => i + 1); // Array of 1 to 15 for council districts

      // Initialize all districts with 0 count
      allDistricts.forEach(district => {
        careOperations[district] = 0;
        carePlusOperations[district] = 0;
      });

      data.updatedCarePlusGeocodedNewCsv.forEach(entry => {
        const cd = entry.councilDistrict;
        const operationType = entry.operationType;

        if (cd && cd >= 1 && cd <= 15) { // Ensure cd is within valid range
          if (operationType === 'CARE') {
            careOperations[cd] += 1;
          } else if (operationType === 'CARE+') {
            carePlusOperations[cd] += 1;
          }
        }
      });

      setCareData(careOperations);
      setCarePlusData(carePlusOperations);
    }

    fetchData();
  }, []);

  // Fixed dataset based on the provided image
  const fixedCarePlusData = {
    1: 243,
    2: 478,
    3: 165,
    4: 209,
    5: 155,
    6: 246,
    7: 197,
    8: 309,
    9: 213,
    10: 270,
    11: 196,
    12: 201,
    13: 426,
    14: 577,
    15: 191
  };

  const careChartData = {
    labels: Object.keys(careData),
    datasets: [
      {
        label: 'CARE Operations by CD',
        data: Object.values(careData),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const carePlusChartData = {
    labels: Object.keys(fixedCarePlusData),
    datasets: [
      {
        label: 'CARE+ Operations by CD',
        data: Object.values(fixedCarePlusData),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        ticks: {
          color: 'white',
        },
      },
      y: {
        ticks: {
          color: 'white',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white',
        },
      },
    },
  };

  return (
    <>
      <Head>
        <title>Analysis</title>
      </Head>
      <Navbar />
      <div className='container mx-auto px-4 sm:container lg:max-w-3xl xl:max-w-4xl'>
        <center>
          <div className='mx-2 flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl'>
            <h1 className='pt-8 pb-4 text-center text-3xl font-bold dark:text-white'>
              Analysis
            </h1>
          </div>
          <div className='py-4'>
            <Bar data={careChartData} options={chartOptions} />
          </div>
          <div className='py-4'>
            <Bar data={carePlusChartData} options={chartOptions} />
          </div>
        </center>
      </div>
    </>
  );
}
