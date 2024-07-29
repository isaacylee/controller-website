'use client';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

export default function Analysis() {
  const [careData, setCareData] = useState({});
  const [carePlusData, setCarePlusData] = useState({});
  const [expandedRows, setExpandedRows] = useState({});

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
    9: 753,
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

  const handleToggle = (index) => {
    setExpandedRows(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const departments = [
    { department: 'CAO', description: 'Outreach – Funding is provided to establish contracts with qualified providers to conduct direct homeless outreach and engagement in conjunction with CARE and CARE + teams.', budget: '$9,283,507' },
    { department: 'LASAN', description: 'Funding is provided for 303 positions to staff 22 CARE+ and five CARE teams, including 56 base budget positions.', budget: '$44,785,820' },
    { department: 'LASAN', description: 'Administrative Program Support – Funding is provided for two positions consisting of one Management Analyst and one Administrative Clerk. Funding and resolution authority is continued for 19 positions.', budget: '$1,776,189' },
    { department: 'LASAN', description: 'Program Support – Funding is provided for three positions consisting of one Senior Management Analyst I, one Service Coordinator, and one Management Analyst to support the CARE/CARE+ teams.', budget: '$11,080,902' },
    { department: 'LASAN', description: 'Information Services Oversight – Nine-months funding and resolution authority is provided for one Geographic Information Systems Supervisor I to oversee the CARE Program\'s digital data collection, service tracking, and reporting and other Livability Services data programs.', budget: '$89,609' },
    { department: 'LASAN', description: 'CARE+ Expansion Second Shift Team – Funding is provided for 11 positions consisting of one Refuse Collection Supervisor, one Senior Environmental Compliance Inspector, two Environmental Compliance Inspectors, three Refuse Collection Operator IIs, and four Maintenance Laborers to form an additional CARE+ team on a second shift.', budget: '$882,194' },
    { department: 'LASAN', description: 'Hollywood CARE+ – Funding and resolution authority is continued for 11 positions consisting of one Refuse Collection Supervisor, one Senior Environmental Compliance Inspector, two Environmental Compliance Inspectors, three Refuse Truck Collection Operator IIs, and four Maintenance Laborers for one CARE+ Team to service three Council Districts in the Hollywood area.', budget: '$1,120,694' },
    { department: 'LASAN', description: 'Livability Services Safety Training – Funding and resolution authority is continued for six positions consisting of one Safety Engineer, three Refuse Crew Field Instructors, and two Safety Engineering Associate Is, subject to pay grade determination by the Office of the City Administrative Officer, Employee Relations Division, to establish safety procedures and practices for CARE/CARE+ teams.', budget: '$546,537' },
    { department: 'LASAN', description: 'Budget, Finance and Innovation Report No. 68 - The Council modified the Mayor\'s Proposed Budget by adding nine-months funding and resolution authority for nine positions consisting of two Environmental Compliance Inspectors, three Refuse Truck Collection Operator IIs, and four Maintenance Laborers for one CARE+ Team to service the coastal area, including Venice, Pacific Palisades, Playa del Rey, and Playa Vista.', budget: '$772,828' },
  ];

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

          <div className="py-4">
            <p className="pt-8 pb-4 text-center text-xl font-bold dark:text-white">Total CARE & CARE+ Budget FY2023: $70,338,280
            </p>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {departments.map((dept, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">{dept.department}</td>
                    <td className="px-6 py-4 max-w-xs break-words whitespace-normal">
                      <div className="relative group">
                        <span className={`block ${expandedRows[index] ? 'max-h-full' : 'max-h-16'} overflow-hidden`}>{dept.description}</span>
                        {dept.description.length > 100 && (
                          <button
                            className="text-blue-600 hover:text-blue-900 ml-2"
                            onClick={() => handleToggle(index)}
                          >
                            {expandedRows[index] ? 'Show less' : 'Show more'}
                          </button>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{dept.budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </center>
      </div>
    </>
  );
}
