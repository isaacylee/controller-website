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

  const fixedCareData = {
    1: 603,
    2: 756,
    3: 278,
    4: 417,
    5: 352,
    6: 496,
    7: 360,
    8: 538,
    9: 269,
    10: 448,
    11: 471,
    12: 434,
    13: 508,
    14: 746,
    15: 425,
  };

  const fixedCarePlusData = {
    1: 342,
    2: 1144,
    3: 373,
    4: 291,
    5: 302,
    6: 469,
    7: 357,
    8: 367,
    9: 468,
    10: 486,
    11: 479,
    12: 436,
    13: 649,
    14: 649,
    15: 468,
  };

  const careChartData = {
    labels: Object.keys(fixedCareData),
    datasets: [
      {
        label: 'CARE Operations by CD',
        data: Object.values(fixedCareData),
        backgroundColor: '#41ffca',
        borderColor: '#41ffca',
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
        backgroundColor: '#41ffca',
        borderColor: '#41ffca',
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
      <div className="container mx-auto px-4 sm:container lg:max-w-3xl xl:max-w-4xl">
        <div className="py-4">
          <p className="pt-8 pb-4 text-center text-xl font-normal dark:text-white">
            {/* The Comprehensive Cleaning and Rapid Engagement (CARE) Program provides cleaning, public health and outreach services to neighborhoods and Angelenos experiencing homelessness.
            <br></br>
            Locations are prioritized by Council Office.
            <br></br>
            CARE Program deployment is coordinated through collaboration between Council offices and City Departments. */}
            {/* <br></br>
            The Bureau of Sanitation (LASAN) was provided funding in the 2023-24 Adopted Budget to
            continue the Comprehensive Cleaning and Rapid Engagement Program (CARE)
            Comprehensive Cleaning and Rapid Engagement Plus Program (CARE+). The CARE program
            ensures the City's sidewalks and other public areas are safe, clean, sanitary, and accessible for
            public use. The CARE+ program is responsible for removing abandoned waste from the public
            right of way and cleaning encampments. */}

          </p>
        </div>

        <center>
          <div className="mx-2 flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl">
            <h1 className="pt-8 pb-4 text-center text-3xl font-bold dark:text-white">
              Analysis
            </h1>
          </div>

          <div className="py-4">
            <p className="pt-8 pb-4 text-center text-xl font-bold dark:text-white">2023 CARE Operations by Council District </p>
            <Bar data={careChartData} options={chartOptions} />
          </div>

          <div className="py-4">
            <p className="pt-8 pb-4 text-center text-xl font-bold dark:text-white">2023 CARE+ Operations by Council District</p>
            <Bar data={carePlusChartData} options={chartOptions} />
          </div>
        </center>
      </div>

    </>
  );
}
