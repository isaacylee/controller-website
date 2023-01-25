import * as Plot from '@observablehq/plot';
import * as d3 from 'd3';
import * as React from 'react';
import { useEffect } from 'react';
export function Changeinnetpos() {
  const [selectedYear, setSelectedYear] = React.useState(2022);
  const refOfLoadedData = React.useRef<any>(null);

  const refOfBoxToChange = React.useRef<any>(null);

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedYear(parseInt(event.target.value));
  };

  useEffect(() => {
    d3.csv('/pafr22visualise/3changeinnetpositiononly.csv').then(
      (changeinnetpositiononly: any) => {
        refOfLoadedData.current = changeinnetpositiononly;
      }
    );
  }, []);

  useEffect(() => {
    if (refOfLoadedData.current) {
      const changeinnetposyear = refOfLoadedData.current.filter(
        (eachItem: any) => eachItem.FiscalYear == selectedYear
      );
      console.log('filteredData', changeinnetposyear);

      const finishedPlotElement = Plot.plot({
        color: {
          legend: true,
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
          Plot.barX(changeinnetposyear, { x: 'Value', y: 'Business Type' }),
          Plot.ruleX([0]),
        ],
      });

      if (refOfBoxToChange.current) {
        refOfBoxToChange.current.innerHTML = '';
        refOfBoxToChange.current.append(finishedPlotElement);
      }
    }
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
        className='h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700'
      ></input>
      <br />
      <div ref={refOfBoxToChange} />
    </div>
  );
}
