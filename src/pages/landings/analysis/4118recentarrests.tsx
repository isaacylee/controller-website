'use client';
import React, { useState } from 'react';

import BarChart from './charts/BarChart';
import NumberOfArrests from './charts/NumberOfArrests';
import RaceBarChart from './charts/RaceBarChart';
import RacePieChart from './charts/RacePieChart';
import TypePieChart from './charts/TypePieChart';
export default function Home() {
  const [loader, setLoader] = useState(false);
  const [intakeData, setIntake] = useState({});

  const [showBarChart, setShowBarChart] = useState(true);
  const toggleChart = () => {
    setShowBarChart(!showBarChart);
  };

  return (
    <section className='flex min-h-screen flex-col p-10'>
      <div className='text-center'>
        <h1 className='mt-5 text-3xl font-bold' style={{ color: '#ffca41' }}>
          Summary & Analysis
        </h1>

        <br />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a
            href='https://docs.google.com/spreadsheets/d/1llilA7y0LiHjM_0s9lrFJPdZAGfSaOnWjJo_dkKZhHo/edit?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button
              style={{
                marginRight: '10px',
                backgroundColor: '#41ffca',
                color: 'black',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              TABLE VERSION
            </button>
          </a>
        </div>
      </div>

      <div id='overview' className='md:col-span-1'>
        <br></br>
        <p>
          This map and analysis show details of arrests under LA Municipal Code
          41.18, which criminalizes sitting, lying, and sleeping, or placing
          personal property in the public right-of-way in certain instances.
        </p>
        <br></br>
        <p>
          On{' '}
          <u>
            <b>
              <a
                href='https://clkrep.lacity.org/onlinedocs/2020/20-1376-S1_ord_187127_09-03-21.pdf'
                target='_blank'
                rel='noopener noreferrer'
              >
                July 29, 2021
              </a>
            </b>
          </u>
          , the City of LA amended 41.18 in an attempt to comply with the 2018
          Ninth Circuit Court of Appeals ruling in{' '}
          <span style={{ fontStyle: 'italic' }}>Martin v. Boise</span>, which
          prohibits cities from enforcing anti-camping laws if they do not have
          enough shelter beds for unhoused residents. Following the 2018{' '}
          <span style={{ fontStyle: 'italic' }}>Martin v. Boise</span> ruling
          and prior to the City’s 2021 amendment, enforcement of 41.18 was
          unconstitutional under the Eighth Amendment’s prohibition on cruel and
          unusual punishment. The constitutionality of the current version of
          41.18 is still disputed.
        </p>

        <br></br>
        <p>
          This map and analysis display 41.18 arrest data obtained from the Los
          Angeles Police Department beginning on January 1, 2021, through
          September 15, 2023, to encapsulate enforcement in the months leading
          up to the July 29, 2021, 41.18 amendment and the most recent available
          data.
        </p>
      </div>

      <div id='overview' className='md:col-span-1'>
        <p className='mt-7'>
          From January 1, 2021 to September 15, 2023, there were 3,003 41.18
          arrests in the City of LA.
        </p>
        <p className='mt-7'>
          41.18 violations can be cited as either infractions or misdemeanors.
          Infractions can lead to a fine of up to $2,500. Misdemeanors can
          result in a fine plus up to 6 months in jail.
        </p>
        <br />
        <br />
        <hr />
      </div>

      <br></br>

      <center>
        {' '}
        <div className='chart-container'>
          <center>
            <h1 className='mt-5 text-2xl font-bold'>
              Number of 41.18 Arrests Per Year:
            </h1>
          </center>
          <br></br>
          <br></br>
          <center>
            <NumberOfArrests />
          </center>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className='chart-container'>
          <br></br>
          <center>
            <h1 className='mt-5 text-2xl font-bold'>
              41.18 Arrests by Council District:
            </h1>
          </center>
          <br></br>
          <center>
            <BarChart />
          </center>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div
          className='chart-container'
          style={{ width: '100%', height: '100%' }}
        >
          <br />
          <br />
          <center>
            <h1 className='mt-5 text-2xl font-bold'>41.18 Arrests by Race:</h1>
          </center>
          <center>
            <label>{showBarChart ? 'Bar chart' : 'Pie chart'}</label>
            <input
              type='checkbox'
              onChange={toggleChart}
              checked={showBarChart}
            />
            {showBarChart ? <RaceBarChart /> : <RacePieChart />}
          </center>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className='chart-container'>
          <center>
            <h1 className='mt-5 text-2xl font-bold'>41.18 Arrests by Type</h1>
          </center>
          <br></br>
          <center>
            <TypePieChart />
          </center>
        </div>
      </center>

      <br></br>
      <style>
        {`
      
          @tailwind base;
          @tailwind components;
          @tailwind utilities;

          :root {
            background-color: black;
            color: white;
          }

          @media (prefers-color-scheme: dark) {
            :root {
              --foreground-rgb: 255, 255, 255;
              --background-start-rgb: 0, 0, 0;
              --background-end-rgb: 0, 0, 0;
            }
          }

          body {
            color: rgb(var(--foreground-rgb));
            background: linear-gradient(
                to bottom,
                transparent,
                rgb(var(--background-end-rgb))
              )
              rgb(var(--background-start-rgb));
          }

    
          .chart-container {
            max-width: 900px;
            height: 500px;
            text-align: center;
          }

   
          @media (max-width: 767px) {
            .chart-container {
       
            }
          }

          @media (max-width: 600px) {
            .chart-container {
       
              max-width: 100%;
              height: auto;
            }
          }
        `}
      </style>
      <br></br>
      <br></br>
    </section>
  );
}
