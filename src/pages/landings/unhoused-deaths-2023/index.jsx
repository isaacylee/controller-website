'use client';
import Head from 'next/head';
import Link from 'next/link';
import React, {useEffect} from 'react';

import Navbar from '@/components/Navbar';

import DeathAge from './DeathAge';
import DeathCD from './DeathCD';
import DeathMode from './DeathMode';
import DeathMonth from './DeathMonth';
import DeathPlace from './DeathPlace';
import DeathRace from './DeathRace';

export default function CashForKeys() {
  useEffect(() => {
    const canvases = document.querySelectorAll('canvas');
    const labels = [
      'Bar chart of number of unhoused deaths in city of LA by mode in year 2023. 678 deaths by accident. 40 deaths by homicide. 160 deaths by natural causes. 16 deaths by suicide. 6 undetermined modes of death.',
      'Bar chart of number of unhoused deaths in city of LA by place in year 2023. 14 deaths in abandoned/vacant building. 19 deaths in business/restaurant/mall/plaza. 19 deaths in encampment. 3 deaths in facility/building. 4 deaths in garage. 135 deaths in healthcare facility. 20 deaths in hotel/motel. 2 deaths in jail. 9 deaths in mobilehome/motorhome/trailer. 18 deaths in other. 22 deaths outdoors (nature). 23 deaths at park/recreation areas. 31 deaths in parking. 12 deaths in patio/yard/shed. 24 deaths in public transit. 48 deaths in residence. 7 deaths in restroom/bathroom. 16 deaths in shelter. 338 deaths on street/freeway/tunnel/sidewalk. 38 deaths in tent. 70 deaths in vehicle.',
      'Bar chart of number of unhoused deaths in city of LA by race in year 2023. 4 American Indian. 17 Asian. 281 Black. 1 Hawaiian/Pacific Islander. 289 Hispanic/Latino. 1 Hispanic/Latino/Black. 6 Hispanic/Latino/White. 3 Middle Eastern. 24 Unknown. 274 White.',
      'Bar chart of number of unhoused deaths in city of LA by council district in year 2023. CD 1 had 105 deaths. CD 2 had 37 deaths. CD 3 had 20 deaths. CD 4 had 35 deaths. CD 5 had 45 deaths. CD 6 had 46 deaths. CD 7 had 36 deaths. CD 8 had 31 deaths. CD 9 had 40 deaths. CD 10 had 40 deaths. CD 11 had 48 deaths. CD 12 had 38 deaths. CD 13 had 77 deaths. CD 14 had 269 deaths. CD 15 had 33 deaths.',
      'Bar chart of number of unhoused deaths in city of LA by month in year 2023. 115 deaths in January. 100 deaths in February. 87 deaths in March. 81 deaths in April. 70 deaths in May. 76 deaths in June. 77 deaths in July. 81 deaths in August. 77 deaths in September. 71 deaths in October. 45 deaths in November. 20 deaths in December.',
    ];
  
    canvases.forEach((canvas, index) => {
      canvas.setAttribute('aria-label', labels[index]);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Unhoused Deaths 2023</title>
      </Head>
      <Navbar />
      <body
        className='container mx-auto px-4 dark:text-white sm:container lg:max-w-3xl xl:max-w-4xl'
        style={{ fontFamily: 'Helvetica' }}
      >
        <center>
          <div className='mx-2 flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl'>
            <h1 className='pt-8 pb-4 text-center text-3xl font-bold'>
              Unhoused Deaths 2023
            </h1>
          </div>
          <div className='mb-10'>
            <Link
              href='https://docs.google.com/spreadsheets/d/1d1dfpxcHKBXoqpGhzPxAbwcbovDVKwU5lZHWviwxQsE/edit?usp=sharing'
              passHref
              target='_blank'
            >
              <button
                className='mx-2 mb-4 rounded py-2 px-4 font-bold text-black'
                style={{
                  backgroundColor: '#41ffca',
                }}
              >
                Table Version
              </button>
            </Link>
            <Link
              href='https://unhoused-deaths-2023.vercel.app/'
              passHref
              target='_blank'
            >
              <button
                className='mx-2 mb-4 rounded py-2 px-4 font-bold text-black'
                style={{
                  backgroundColor: '#41ffca',
                }}
              >
                Map
              </button>
            </Link>
          </div>
          <div>
            <h2 className='mb-10 text-2xl font-bold'>
              <b>Summary and Analysis</b>
            </h2>
            <div className='text-left'>
              <p className='mb-4'>
                This map and analysis show details of deaths of unhoused people
                in the City of Los Angeles in 2023. The map can be viewed by
                race and Council District. Data shows location, race, age, sex,
                and mode…
              </p>
              <p className='mb-4'>
                This dataset was obtained from the LA County Coroner.
              </p>
            </div>
            <div className='mb-14'>
              <h3 className='text-left mt-10 mb-4 text-xl font-bold'>
                <b>Mode of Death:</b>
              </h3>
              <div className='mb-7 text-left'>
                <p className='mb-4'>
                  Mode of death can take a while to investigate and conclusions
                  are preliminary.
                </p>
                <p>
                  “Mode” vs “Cause”: Mode of death is the way in which cause
                  contributed to death. Cause of death is the specific factor
                  (e.g., injury, disease, etc.) that led to mode of death. Mode
                  of death is more established data.
                </p>
              </div>
              <div>
                <h4>Unhoused Deaths in City of LA by Mode, 2023</h4>
                <DeathMode />
              </div>
            </div>
            <div className='mb-14'>
              <h3 className='text-left mb-7 text-xl font-bold'>
                <b>Places of Death:</b>
              </h3>
              <div>
                <h4>Unhoused Deaths in City of LA by Place, 2023</h4>
              <DeathPlace />
              </div>
            </div>
            <div className='mb-14'>
              <h3 className='text-left mb-4 text-xl font-bold'>
                <b>Race:</b>
              </h3>
              <p className='mb-7 text-left'>
                Data including categories for race set by L.A. County
                Medical-Examiner Coroner.
              </p>
              <div>
                <h4>Unhoused Deaths in City of LA by Race, 2023</h4>
                <DeathRace />
              </div>
            </div>
            <div className='mb-14'>
              <h3 className='text-left mb-7 text-xl font-bold'>
                <b>Deaths by City Council:</b>
              </h3>
              <div>
                <h4>Unhoused Deaths in City of LA by Council District, 2023</h4>
                <DeathCD />
              </div>
            </div>
            <div className='mb-14'>
              <h3 className='text-left mb-7 text-xl font-bold'>
                <b>Deaths by Month:</b>
              </h3>
              <div>
                <h4>Unhoused Deaths in City of LA by Month, 2023</h4>
                <DeathMonth />
              </div>
            </div>
            <div className='mb-14'>
              <h3 className='text-left mb-7 text-xl font-bold'>
                <b>Deaths by Age:</b>
              </h3>
              <div>
                <h4>Unhoused Deaths in City of LA by Age, 2023</h4>
                <DeathAge />
              </div>
            </div>
          </div>
        </center>
      </body>
    </>
  );
}
