import c from 'calendar';
import monthnpm from 'month';
import * as React from 'react';

import '@/styles/aboutstyles.module.css';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function PayrollCalendar(props: any) {
  const [selectedYear, setSelectedYear] = React.useState<number>(2023);
  const [calendar, setCalendar] = React.useState<Array<Array<Array<number>>>>(
    []
  );

  function generateCalendar() {
    const cal = new c.Calendar();

    const monthsarray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    const arraysofwholecalendar = monthsarray.map((month: number) => {
      return cal.monthDays(selectedYear, month);
    });

    setCalendar(arraysofwholecalendar);
  }

  React.useEffect(() => {
    generateCalendar();
  }, []);

  React.useEffect(() => {
    generateCalendar();
  }, [selectedYear]);

  return (
    <>
      <Navbar />

      <Layout>
        {/* <Seo templateTitle='Home' /> */}

        <Seo />

        <div className='mx-2 flex w-full flex-col px-4 py-2 dark:text-white sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl  xl:max-w-4xl'>
          <h1 className='pt-8 pb-4 dark:text-white'>Payroll Calendar</h1>

          <div className='sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-3'>
            {calendar.length != 0 &&
              calendar.map((month, monthindex: number) => (
                <div key={monthindex} className=''>
                  <h3 className='w-full text-center'>
                    {monthnpm(monthindex + 1)}
                  </h3>
                  <div className='mx-auto pt-2'>
                    {month.map((weekline, weeklineindex) => (
                      <div
                        key={weeklineindex}
                        className='grid grid-cols-7 content-center'
                      >
                        {weekline.map((day, dayindex) =>
                          day === 0 ? (
                            <div
                              key={dayindex}
                              className={`h-7 w-7
                            
                           
                            `}
                            ></div>
                          ) : (
                            <div
                              key={dayindex}
                              className='h-7 w-7 rounded-full'
                            >
                              <p className='m-auto'>{day}</p>
                            </div>
                          )
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
