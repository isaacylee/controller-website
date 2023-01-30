import * as Plot from '@observablehq/plot';
import * as d3 from 'd3';
import * as React from 'react';

import {
  getHeightPlot,
  getWidthPlot,
} from '@/components/pafr22visualise/processwidthandheight';
import { processEachValueIntoTextMore } from '@/components/utils';

import { processcsvcityactivities } from './cityactivitiescsvprocess';
function isvalidnumber(value: string) {
  if (value === '' || value === null || value === undefined) {
    return false;
  } else {
    return !isNaN(Number(value));
  }
}

export function CityActivities() {
  const [cleaneddataset, setCleaneddataset] = React.useState<any>(null);
  const [constantlist, setConstantlist] = React.useState<any>([]);
  const puttheplotsinhere = React.useRef<any>(null);

  const [selectedDepartment, setSelectedDepartment] =
    React.useState<string>('Aging');

  const [innerwidth, setinnerwidth] = React.useState<number>(
    typeof window != 'undefined' ? window.innerWidth : 1000
  );

  const [listofdepartments, setlistofdepartments] = React.useState<string[]>(
    []
  );

  const yearsallowed = Array.from(new Array(19), (x, i) => i + 2004).map(
    (bruh) => String(bruh)
  );

  React.useEffect(() => {
    addEventListener('resize', () => {
      setinnerwidth(window.innerWidth);
    });

    d3.csv('/csvsforpafr22/9cityactivities.csv').then((data: any) => {
      setCleaneddataset(processcsvcityactivities(data));

      // console.log(cleaneddataset, 'cleaneddataset');
    });
  }, []);

  const renderAllChartsForDepartment = () => {
    //render all charts for department

    if (puttheplotsinhere.current) {
      if (cleaneddataset) {
        const selecteddepartmentsdata: any = cleaneddataset[selectedDepartment];

        if (typeof selecteddepartmentsdata != 'undefined') {
          console.log('selecteddepartmentsdata', selecteddepartmentsdata);
        }

        setConstantlist(
          Object.values(selecteddepartmentsdata).filter(
            (eachmetric: any) => eachmetric.constant === true
          )
        );

        //create div
        const divforplots = document.createElement('div');

        const sizes = [
          {
            screen: 350,
            width: 300,
            height: 250,
            fullscreen: true,
          },
          {
            screen: 500,
            width: 400,
            height: 200,
            fullscreen: true,
          },
          {
            screen: 600,
            width: 500,
            height: 300,
            fullscreen: true,
          },
          {
            screen: 750,
            width: 650,
            height: 300,
            fullscreen: true,
          },
          {
            screen: 800,
            width: 750,
            height: 300,
          },
          {
            screen: 1000,
            width: 700,
            height: 400,
          },
          {
            screen: 1200,
            width: 1000,
            height: 400,
          },
        ];

        const listofplots = Object.values(selecteddepartmentsdata)
          .filter((eachmetric: any) => eachmetric.constant === false)
          .map((eachMetric: any) => {
            const arrayofmetric: Array<any> = [];

            //transform into array
            yearsallowed.forEach((eachYear: string) => {
              if (isvalidnumber(eachMetric[eachYear]))
                arrayofmetric.push({
                  year: eachYear,
                  value: parseInt(eachMetric[eachYear]),
                });
            });

            const theplotforthischart = Plot.plot({
              width: getWidthPlot(sizes),
              height: getHeightPlot(sizes),
              x: {
                tickFormat: (tick: any) =>
                  innerWidth < 640 ? `'` + tick.slice(-2) : tick,
              },

              marks: [
                Plot.line(arrayofmetric, {
                  x: 'year',
                  y: 'value',
                  strokeWidth: 2,
                }),
                Plot.ruleY([0]),
                Plot.dot(arrayofmetric, {
                  x: 'year',
                  y: 'value',
                }),

                Plot.text(arrayofmetric, {
                  x: 'year',
                  y: 'value',
                  text: (d: any) =>
                    processEachValueIntoTextMore({
                      value: d.value,
                      digits: 1,
                      dollarsign: false,
                    }),
                  dy: (d: any) =>
                    innerwidth < 640
                      ? Number(d.year) % 2 === 0
                        ? -15
                        : 15
                      : -15,
                }),
              ],
              y: {
                tickFormat: (tick: any) =>
                  d3.format('~s')(tick).replace('G', 'B'),
                label: eachMetric['UOM DESCRIPTION'],
                grid: true,
              },
            });

            //create p tag
            const ptag = document.createElement('p');
            ptag.innerHTML = eachMetric['OPERATING INDICATOR / ASSET'];

            //set class
            ptag.className = 'text-lg font-semibold dark:text-white';
            divforplots.append(ptag);
            divforplots.append(theplotforthischart);

            return true;
          });

        puttheplotsinhere.current.innerHTML = '';
        puttheplotsinhere.current.append(divforplots);
      }
    }
  };

  React.useEffect(() => {
    console.log(cleaneddataset, 'cleaneddataset');

    if (cleaneddataset) {
      setlistofdepartments(Object.keys(cleaneddataset));
    }

    renderAllChartsForDepartment();
  }, [cleaneddataset]);

  React.useEffect(() => {
    console.log('list of depts updated to', listofdepartments);
  }, [listofdepartments]);

  React.useEffect(() => {
    renderAllChartsForDepartment();
  }, [selectedDepartment]);

  React.useEffect(() => {
    renderAllChartsForDepartment();
  }, [innerwidth]);

  return (
    <>
      <div className='flex flex-wrap gap-x-2 gap-y-1'>
        {listofdepartments.sort().map((eachdept: string) => (
          <button
            key={eachdept}
            onClick={() => {
              setSelectedDepartment(eachdept);
            }}
            className={`rounded-lg border-2 px-2 py-1  text-sm font-semibold dark:text-white md:text-base ${
              eachdept === selectedDepartment
                ? 'border-green-800 bg-green-500 dark:bg-green-600'
                : ' border-slate-300 bg-gray-100 dark:border-slate-600 dark:bg-gray-900'
            }`}
          >
            {eachdept}
          </button>
        ))}
      </div>
      {constantlist.length > 0 && (
        <>
          <p className='mt-4 text-lg font-semibold dark:text-white'>
            Constants (2004-2022)
          </p>
          <div className='mt-2 grid grid-cols-2 gap-x-2 gap-y-2 sm:grid-cols-3 md:grid-cols-5'>
            {constantlist.map((eachconstant: any) => (
              <div
                className='rounded-lg bg-gray-100 p-2 text-center dark:bg-zinc-700'
                key={eachconstant['OPERATING INDICATOR / ASSET']}
              >
                <h6 className='dark:text-white'>
                  {eachconstant['OPERATING INDICATOR / ASSET']}
                </h6>
                <p className='dark:text-white sm:text-lg md:text-xl'>
                  {eachconstant['2022']}
                </p>
                <p className='dark:text-white'>
                  {eachconstant['UOM DESCRIPTION']}
                </p>
              </div>
            ))}
          </div>
        </>
      )}

      <div ref={puttheplotsinhere} className='mt-2'></div>
    </>
  );
}
