import * as d3 from 'd3';
import * as React from 'react';
import { useEffect } from 'react';

import { formatBillions } from '@/components/utils';

export function ChangeinnetposGen() {
  const [selectedYear, setSelectedYear] = React.useState(2022);
  const refOfLoadedData = React.useRef<any>(null);

  const refOfBoxToChange = React.useRef<any>(null);

  const [data, setData] = React.useState<any>(null);
  const [dataOriginal, setDataOriginal] = React.useState<any>(null);

  const [tablefiltered, setTablefiltered] = React.useState<any>({});

  const [masterSumTable, setMasterSumTable] = React.useState<any>({});

  const [innerwidth, setinnerwidth] = React.useState<number>(
    typeof window != 'undefined' ? window.innerWidth : 1000
  );

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedYear(parseInt(event.target.value));
    console.log('changed to', parseInt(event.target.value));
  };

  useEffect(() => {
    d3.csv('/csvsforpafr22/6condensedstatementofnetposition.csv').then(
      (changeinnetpositiononly: any) => {
        console.log('recieved', changeinnetpositiononly);
        refOfLoadedData.current = changeinnetpositiononly.map(
          (eachItem: any) => {
            return {
              ...eachItem,
              Value: parseInt(eachItem.Value) * 1000,
            };
          }
        );
        setData(
          changeinnetpositiononly.map((eachItem: any) => {
            return {
              ...eachItem,
              Value: parseInt(eachItem.Value) * 1000,
            };
          })
        );
      }
    );

    d3.csv('/csvsforpafr22/6condensedstatementofnetposition.csv').then(
      (changeinnetposition: any) => {
        setDataOriginal(
          changeinnetposition.map((eachItem: any) => {
            return {
              ...eachItem,
              Value: parseInt(eachItem.Value) * 1000,
            };
          })
        );
      }
    );
  }, []);

  const columns = [
    'Category',
    'Description',
    'Business-Type',
    'Governmental',
    'Total',
  ];

  let headcolumns = columns;

  if (typeof window != 'undefined') {
    if (window.innerWidth < 640) {
      headcolumns = ['Category', 'Desc.', 'Business', 'Gov.', 'Total'];
    }
  }

  const filterTable = () => {
    if (dataOriginal) {
      const changeinnetposyear = dataOriginal
        .filter((eachItem: any) => eachItem.Year == String(selectedYear))
        .map((eachItem: any) => {
          return {
            ...eachItem,
            'Business-Type': formatBillions(eachItem['Business-Type']),
            Governmental: formatBillions(eachItem['Governmental']),
            Total: formatBillions(eachItem['Total']),
          };
        });

      console.log(
        'change in net pos generally year for table',
        changeinnetposyear
      );

      const netpostgendiv = document.querySelector('#netposgen');

      if (netpostgendiv) {
        netpostgendiv.innerHTML = '';
      }

      const table = d3
        .select('#netposgen')
        .append('table')
        .attr('class', 'divide-y divide-gray-200 dark:divide-gray-500');
      const thead = table
        .append('thead')
        .attr('class', 'bg-gray-50 dark:bg-gray-800');
      const tbody = table
        .append('tbody')
        .attr(
          'class',
          'divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900'
        );

      thead
        .append('tr')
        .selectAll('th')
        .data(headcolumns)
        .enter()
        .append('th')
        .attr('class', 'px-2 text-wrap max-w-xs')
        .text((d: any) => {
          return d;
        });

      const rows = tbody
        .selectAll('tr')
        .data(changeinnetposyear)
        .enter()
        .append('tr');

      const cells = rows
        .selectAll('td')
        .data(function (row: any) {
          return columns.map(function (column) {
            return { column: column, value: row[column] };
          });
        })
        .enter()
        .append('td')
        .attr('class', 'text-sm sm:text-base px-1 md:px-2')
        .text(function (d: any) {
          return d.value;
        });

      return table;
    }
  };

  useEffect(() => {
    filterTable();
  }, [data]);

  useEffect(() => {
    filterTable();
  }, [dataOriginal]);

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
    filterTable();
  }, [selectedYear]);

  return (
    <div>
      <label htmlFor='default-range' className='font-semibold'>
        Currently selected year: {selectedYear}
      </label>
      <br />
      <input
        id='default-range'
        type='range'
        value={selectedYear}
        onChange={handleRangeChange}
        min={2016}
        max={2022}
        className='h-3 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700 sm:max-w-md'
      ></input>
      <br />
      <br />
      <div id='netposgen'></div>
    </div>
  );
}
