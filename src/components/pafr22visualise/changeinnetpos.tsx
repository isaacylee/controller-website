import * as Plot from '@observablehq/plot';
import * as d3 from 'd3';
import * as React from 'react';
import { useEffect } from 'react';

import { getHeightPlot, getWidthPlot } from './processwidthandheight';
export function Changeinnetpos() {
  const [selectedYear, setSelectedYear] = React.useState(2022);
  const refOfLoadedData = React.useRef<any>(null);

  const refOfBoxToChange = React.useRef<any>(null);

  const [data, setData] = React.useState<any>(null);
  const [dataOriginal, setDataOriginal] = React.useState<any>(null);

  const [tablefiltered, setTablefiltered] = React.useState<any>({});

  const [innerwidth, setinnerwidth] = React.useState<number>(
    typeof window != 'undefined' ? window.innerWidth : 1000
  );

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedYear(parseInt(event.target.value));
    console.log('changed to', parseInt(event.target.value));
  };

  const sizes = [
    {
      screen: 350,
      width: 300,
      height: 250,
    },
    {
      screen: 500,
      width: 400,
      height: 200,
    },
    {
      screen: 600,
      width: 500,
      height: 300,
    },
    {
      screen: 750,
      width: 600,
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

  useEffect(() => {
    d3.csv('/csvsforpafr22/3changeinnetpositiononly.csv').then(
      (changeinnetpositiononly: any) => {
        console.log('recieved', changeinnetpositiononly);
        refOfLoadedData.current = changeinnetpositiononly;
        setData(changeinnetpositiononly);
      }
    );

    d3.csv('/csvsforpafr22/3changeinnetposition.csv').then(
      (changeinnetposition: any) => {
        setDataOriginal(changeinnetposition);
      }
    );
  }, []);

  const processEachValueIntoText = (value: any) => {
    let neg = false;

    if (value < 0) {
      neg = true;
    }
  };

  const filterTable = (data: any, selectedYear: number) => {
    if (dataOriginal) {
      const changeinnetposyear = dataOriginal.filter(
        (eachItem: any) => eachItem.Year == String(selectedYear)
      );

      const tables: any = {};

      changeinnetposyear.forEach((eachItem: any) => {
        if (tables[eachItem['Account Activity']] == undefined) {
          tables[eachItem['Account Activity']] = {};
        }

        tables[eachItem['Account Activity']][eachItem['Business Type']] =
          eachItem['Value'];
      });

      setTablefiltered(tables);

      console.log('tables', tables);
    }
  };

  const renderChart = () => {
    console.log('data is ', refOfLoadedData.current);
    console.log('data2 is ', data);
    if (data) {
      const changeinnetposyear = data.filter(
        (eachItem: any) => eachItem.Year == String(selectedYear)
      );
      console.log('filteredData', changeinnetposyear);

      const greenvaluetopick = '#22c55e';

      const querybody = document.querySelector('body');
      /*

      if (querybody) {
        if (querybody.classList.contains('dark')) {
        }
      }
      */

      const finishedPlotElement = Plot.plot({
        width: getWidthPlot(sizes),
        height: getHeightPlot(sizes),
        color: {
          domain: ['loss', 'gain'],
          range: ['#f43f53', greenvaluetopick],
          pivot: 0,
        },
        y: {
          domain: [
            'Airports',
            'Convention Center',
            'Harbor',
            'Power',
            'Water',
            'Sewer',
          ],
        },
        x: {
          label: '$ Change',
          tickFormat: '$s',
          domain: [-200000, 500000],
        },
        marks: [
          Plot.barX(changeinnetposyear, {
            x: 'Value',
            y: 'Business Type',
            fill: (d: any) => (d.Value >= 0 ? 'gain' : 'loss'),
          }),
          Plot.ruleX([0]),
        ],
      });
      if (refOfBoxToChange.current) {
        refOfBoxToChange.current.innerHTML = '';
        refOfBoxToChange.current.append(finishedPlotElement);
      }
    }
  };

  useEffect(() => {
    renderChart();
  }, [data]);

  useEffect(() => {
    renderChart();
  }, [innerwidth]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      addEventListener('resize', () => {
        console.log('resize triggered');
        setinnerwidth(window.innerWidth);
        return true;
      });
    }
  }, []);

  useEffect(() => {
    renderChart();
  }, [selectedYear]);

  return (
    <div>
      <label
        htmlFor='default-range'
        className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
      >
        Selected Year
      </label>
      <p>Currently selected year: {selectedYear}</p>
      <input
        id='default-range'
        type='range'
        value={selectedYear}
        onChange={handleRangeChange}
        min={2016}
        max={2022}
        className='h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700 sm:max-w-md'
      ></input>
      <br />
      <div ref={refOfBoxToChange} />
    </div>
  );
}
