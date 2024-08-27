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
  const [landUseCodeData, setLandUseCodeData] = useState([]);
  const [unitRangeData, setUnitRangeData] = useState({});
  const [netChangeData, setNetChangeData] = useState({});
  const [netGainData, setNetGainData] = useState([]);
  const [netLossData, setNetLossData] = useState([]);
  const [netGainByLuCodeData, setNetGainByLuCodeData] = useState([]);
  const [netLossByLuCodeData, setNetLossByLuCodeData] = useState([]);

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
      const response = await fetch('https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/rsoCsv/rsoUnitsByZipCode');
      const data = await response.json();
      setZipCodeData(data.rsoUnitsByZipCode);
    }
    async function fetchLandUseCodeData() {
      const response = await fetch('https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/rsoCsv/rsoUnitsByLuCode2024');
      const data = await response.json();
      setLandUseCodeData(data.rsoUnitsByLuCode2024);
    }

    async function fetchUnitRangeData() {
      const response = await fetch('https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/rsoCsv/rsoUnitsByUnitRange2024');
      const data = await response.json();
      const labels = data.rsoUnitsByUnitRange2024.map(item => item.unitRange);
      const units = data.rsoUnitsByUnitRange2024.map(item => item.number);

      setUnitRangeData({
        labels: labels,
        datasets: [
          {
            label: 'Number of RSO Units',
            data: units,
            backgroundColor: '#41ffca',
            borderColor: '#41ffca',
            borderWidth: 1,
          },
        ],
      });
    }

    async function fetchNetChangeData() {
      const response = await fetch('https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/rsoCsv/rsoUnitsNetChgByCd');
      const data = await response.json();
      const labels = data.rsoUnitsNetChgByCd.map(item => `CD ${item.cd}`);
      const units = data.rsoUnitsNetChgByCd.map(item => item.number);

      setNetChangeData({
        labels: labels,
        datasets: [
          {
            label: 'Net Change in RSO Units',
            data: units,
            backgroundColor: '#41ffca',
            borderColor: '#41ffca',
            borderWidth: 1,
          },
        ],
      });
    }

    async function fetchNetGainData() {
      const response = await fetch('https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/rsoCsv/netGainByZipCode');
      const data = await response.json();
      setNetGainData(data.netGainByZipCode);
    }

    async function fetchNetLossData() {
      const response = await fetch('https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/rsoCsv/netLossByZipCode');
      const data = await response.json();
      setNetLossData(data.netLossByZipCode);
    }

    async function fetchNetGainByLuCodeData() {
      const response = await fetch('https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/rsoCsv/netGainByLuCode');
      const data = await response.json();
      setNetGainByLuCodeData(data.netGainByLuCode);
    }

    async function fetchNetLossByLuCodeData() {
      const response = await fetch('https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/rsoCsv/netLossByLuCode');
      const data = await response.json();
      setNetLossByLuCodeData(data.netLossByLuCode);
    }



    fetchChartData1();
    fetchChartData2();
    fetchChartData3();
    fetchZipCodeData();
    fetchLandUseCodeData();
    fetchUnitRangeData();
    fetchNetChangeData();
    fetchNetGainData();
    fetchNetLossData();
    fetchNetGainByLuCodeData();
    fetchNetLossByLuCodeData();
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


          <div
            className='text-left dark:text-white'
            style={{ fontFamily: 'Helvetica' }}
          >
            <p className='mb-2'>
              Since going into effect in 1978, the Rent Stabilization Ordinance (RSO) has
              provided extensive protections to renters in the City of Los Angeles that in
              units covered by this ordinance.  Protections range from limiting the percentage
              rent can be increased to eviction protections.
            </p>
            <p className='mb-2'>
              Every year, the Los Angeles Housing Department (LAHD) updates the inventory of RSO units in the City of Los Angeles.
              Using updated data, we analyzed the most current inventory of RSO units (2024)
              and also compared it with the previous 5 years (2019-2023). The data from LAHD can be accessed on the Department’s Report Dashboard for RSO
              <a href="https://housing2.lacity.org/RSO" target='_blank'> https://housing2.lacity.org/RSO</a>

            </p>
            <p className='mb-4'>
              The data reveals that as of 2024,
              there are <b> 661,851</b> RSO units. From 2019 to 2024,
              there was a net increase of <b> 18,345</b> RSO units
              (a loss of <b>15,754</b> units but a gain of <b>34,099</b> units)



            </p>



            <br></br>
          </div>

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
            <p className="pt-8 pb-4 text-center text-xl font-bold dark:text-white">Number of RSO Units by Council District (2024)</p>
            <div
              className='text-left dark:text-white'
              style={{ fontFamily: 'Helvetica' }}
            >
              <p className='mb-4'>
                <b> Council District 13</b> has the highest number of RSO units with <b>78,958</b>, followed by <b>Council District 10</b> with <b>78,370 RSO </b> units.

              </p>
            </div>
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
          {/* <div className="w-full mb-8">
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
          </div> */}
          <div className="w-full mb-8">
            <h2 className="pt-8 pb-4 text-center text-2xl font-bold dark:text-white">
              Top 20 Zip Codes with the Most RSO Units (2024)
            </h2>
            <div
              className='text-left dark:text-white'
              style={{ fontFamily: 'Helvetica' }}
            >
              <p className='mb-4'>
                <b> 90019 </b> (Mid-Wilshire area) has the highest number of RSO units <b> (18,789)</b>, followed by <b>90026</b> (Echo Park) with <b> 17,830.
                </b>

              </p>
            </div>

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


          <div className="w-full mb-8">
            <h2 className="pt-8 pb-4 text-center text-2xl font-bold dark:text-white">
              Property Type (Land Use Code) in 2024
            </h2>
            <div
              className='text-left dark:text-white'
              style={{ fontFamily: 'Helvetica' }}
            >
              <p className='mb-4'>
                Land Use Codes, or Property Use Classifications, are assigned by the Los Angeles County Assessor’s Office to
                describe the actual current use of a property and are in the form of four character codes that are made up of
                either letters, numbers, or a combination of both. More information can be found on the LA County Assessor’s Portal
                <a href="https://portal.assessor.lacounty.gov/" target='_blank'> https://portal.assessor.lacounty.gov/ </a>
                using either an address or the Assessor Parcel Number (APN) in LAHD’s data.

              </p>
              <p className='mb-4'>
                In 2024, the highest number of RSO units were located on properties that contained five or more units but were four stories or less <b> (0500) </b>,
                with <b>297,713</b> units. Properties that contained two units made up of four less stories <b>(0200),</b> which includes duplexes,
                had the second highest number of RSO units at <b>97,641.</b>
              </p>
            </div>

            <table className="table-auto w-full text-left text-black bg-white">
              <thead style={{ backgroundColor: '#41ffca', color: 'black' }}>
                <tr>
                  <th className="px-2 py-1 border border-gray-400">Land Use Code</th>
                  <th className="px-2 py-1 border border-gray-400">Description</th>
                  <th className="px-2 py-1 border border-gray-400"># of RSO Units</th>
                </tr>
              </thead>
              <tbody>
                {landUseCodeData.map((item, index) => (
                  <tr key={item.landUseCode}>
                    <td className="border px-2 py-1 border-gray-400">{item.landuseCode}</td>
                    <td className="border px-2 py-1 border-gray-400">{item.description}</td>
                    <td className="border px-2 py-1 border-gray-400">{item.number}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


          <div className="w-full mb-8">
            <h2 className="pt-8 pb-4 text-center text-2xl font-bold dark:text-white">
              Number of RSO Units by Unit Range
            </h2>
            <div
              className="text-left dark:text-white"
              style={{ fontFamily: 'Helvetica' }}
            >
              <p className="mb-4">
                Unit Range is based on the number of RSO units located within a particular property.
              </p>
              <p className="mb-4">
                In 2024, <b>195,926</b> RSO units were located in properties that contained 11-49 units followed by <b>127,240</b> RSO units in properties that contained 5-10 units.
              </p>
            </div>
            {unitRangeData.labels ? (
              <Bar
                data={unitRangeData}
                options={{
                  scales: {
                    y: {
                      beginAtZero: true,
                      ticks: {
                        color: 'white',
                      },
                      grid: {
                        display: true,
                        color: 'gray',
                      },
                      title: {
                        display: true,
                        text: 'Number of RSO Units',
                        color: 'white',
                      },
                    },
                    x: {
                      ticks: {
                        color: 'white',
                      },
                      grid: {
                        display: true,
                        color: 'gray',
                      },
                      title: {
                        display: true,
                        text: 'Unit Range',
                        color: 'white',
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      display: false,
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
              Net Change in RSO Units by Council District (CD)
            </h2>
            <div
              className="text-left dark:text-white"
              style={{ fontFamily: 'Helvetica' }}
            >
              <p className="mb-4">
                Most Council Districts saw net increases in the number of RSO units over the past 6 years. Council District <b>12</b> saw the highest increase with <b>2,877</b> units followed by Council District <b>2</b> with <b>2,859</b>.
              </p>
              <p className="mb-4">
                Of the three Council Districts with net losses in RSO units, Council District <b>14</b> saw the most with a net loss of <b>868</b> RSO units followed by Council District <b>15</b> with a net loss of <b>490</b> units.
              </p>
            </div>
            {netChangeData.labels ? (
              <Bar
                data={netChangeData}
                options={{
                  scales: {
                    y: {
                      beginAtZero: true,
                      ticks: {
                        color: 'white',
                      },
                      grid: {
                        display: true,
                        color: 'gray',
                      },
                      title: {
                        display: true,
                        text: 'Net Change in RSO Units',
                        color: 'white',
                      },
                    },
                    x: {
                      ticks: {
                        color: 'white',
                      },
                      grid: {
                        display: true,
                        color: 'gray',
                      },
                      title: {
                        display: true,
                        text: 'Council District',
                        color: 'white',
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      display: false,
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
              Top 10 Zip Codes with the Highest Net Increases/Decreases in RSO Units
            </h2>
            <div
              className="text-left dark:text-white"
              style={{ fontFamily: 'Helvetica' }}
            >
              <p className="mb-4">
                The tables below show the ten ZIP codes with the highest net increases in RSO Units and the ten ZIP codes with the highest net decreases in RSO Units.
              </p>
              <p className="mb-4">
                The Zip code with the highest net increase is <b>91331 (Pacoima)</b> with <b>1,113</b> units followed by <b>91335 (Reseda)</b> with <b>1,110</b> units.
              </p>
              <p className="mb-4">
                The highest net decrease in RSO units occurred in <b>90014 (Downtown LA, Jewelry District)</b> with a net loss of <b>858</b> units, followed by <b>90732 (San Pedro)</b> with a net loss of <b>775</b> units.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-between">
              <table className="table-auto w-full sm:w-1/2 text-left text-black bg-white mb-4 sm:mb-0 sm:mr-2">
                <thead style={{ backgroundColor: '#41ffca', color: 'black' }}>
                  <tr>
                    <th className="px-4 py-2 border border-gray-400">Zip Code</th>
                    <th className="px-4 py-2 border border-gray-400">Communities</th>
                    <th className="px-4 py-2 border border-gray-400">Net Change (Units)</th>
                  </tr>
                </thead>
                <tbody>
                  {netGainData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="border px-4 py-2 border-gray-400">{item.zipCodes}</td>
                      <td className="border px-4 py-2 border-gray-400">{item.communities}</td>
                      <td className="border px-4 py-2 border-gray-400">{item.number}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table className="table-auto w-full sm:w-1/2 text-left text-black bg-white">
                <thead style={{ backgroundColor: '#41ffca', color: 'black' }}>
                  <tr>
                    <th className="px-4 py-2 border border-gray-400">Zip Code</th>
                    <th className="px-4 py-2 border border-gray-400">Communities</th>
                    <th className="px-4 py-2 border border-gray-400">Net Change (Units)</th>
                  </tr>
                </thead>
                <tbody>
                  {netLossData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="border px-4 py-2 border-gray-400">{item.zipCode}</td>
                      <td className="border px-4 py-2 border-gray-400">{item.communities}</td>
                      <td className="border px-4 py-2 border-gray-400">{item.number}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="w-full mb-8">
            <h2 className="pt-8 pb-4 text-center text-2xl font-bold dark:text-white">
              Net Change in RSO Units by Property Type (Land Use Code)
            </h2>
            <div
              className="text-left dark:text-white"
              style={{ fontFamily: 'Helvetica' }}
            >
              <p className="mb-4">
                The property type with the highest net increase in units overall are properties with two units <b>(0200)</b> with a net increase of <b>18,146</b>. Properties with five units that are four stories or less in height <b>(0500)</b> had the second highest net increase with <b>5,377</b> additional RSO units.
              </p>
              <p className="mb-4">
                Property types with the highest number of net losses include properties that had five units with a pool <b>(0501)</b> having a net decrease of <b>3,396</b>. This is followed by RSO units located in a mobile home park with a pool <b>(0901)</b> having a net decrease of <b>1,421</b> RSO units.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-between">
              <table className="table-auto w-full sm:w-1/2 text-left text-black bg-white mb-4 sm:mb-0 sm:mr-2">
                <thead style={{ backgroundColor: '#41ffca', color: 'black' }}>
                  <tr>
                    <th className="px-4 py-2 border border-gray-400" style={{ whiteSpace: 'normal', width: '10rem' }}>Land Use Code</th>
                    <th className="px-4 py-2 border border-gray-400">Description</th>
                    <th className="px-4 py-2 border border-gray-400"># Net Change</th>
                  </tr>
                </thead>
                <tbody>
                  {netGainByLuCodeData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="border px-4 py-2 border-gray-400">{item.landuseCode}</td>
                      <td className="border px-4 py-2 border-gray-400">{item.description}</td>
                      <td className="border px-4 py-2 border-gray-400">{item.netGain}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table className="table-auto w-full sm:w-1/2 text-left text-black bg-white">
                <thead style={{ backgroundColor: '#41ffca', color: 'black' }}>
                  <tr>
                    <th className="px-4 py-2 border border-gray-400" style={{ whiteSpace: 'normal', width: '10rem' }}>Land Use Code</th>
                    <th className="px-4 py-2 border border-gray-400">Description</th>
                    <th className="px-4 py-2 border border-gray-400"># Net Loss</th>
                  </tr>
                </thead>
                <tbody>
                  {netLossByLuCodeData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="border px-4 py-2 border-gray-400">{item.landuseCode}</td>
                      <td className="border px-4 py-2 border-gray-400">{item.description}</td>
                      <td className="border px-4 py-2 border-gray-400">{item.netLoss}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>




        </div>
      </center >



    </>
  );
}
