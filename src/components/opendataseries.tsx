import byteSize from 'byte-size';
import Link from 'next/link';
import * as React from 'react';

import checkbookinfo from '@/checkbookfilesize.json';
import datainfo from '@/opendatasizes.json';

const ranges = [
  { divider: 1e18, suffix: 'E' },
  { divider: 1e15, suffix: 'P' },
  { divider: 1e12, suffix: 'T' },
  { divider: 1e9, suffix: 'G' },
  { divider: 1e6, suffix: 'M' },
  { divider: 1e3, suffix: 'k' },
];

function formatNumber(n: number) {
  for (let i = 0; i < ranges.length; i++) {
    if (n >= ranges[i].divider) {
      const numbersOfDigitsToShow = n / ranges[i].divider > 99 ? 0 : 1;

      return (
        (n / ranges[i].divider).toFixed(numbersOfDigitsToShow).toString() +
        ranges[i].suffix
      );
    }
  }
  return n.toString();
}

const kirbybutton =
  'w-content rounded-full bg-black px-4 py-2 font-bold text-white dark:bg-white dark:text-black';

function EachDataButton(props: any) {
  const byteSizeObj = byteSize(props.size);

  return (
    <div>
      <Link href={props.link}>
        <div className='w-full'>
          <a href={props.link} target='_blank' rel='noopener noreferrer'>
            <div className='rounded-lg bg-gray-200 px-2 py-2 dark:bg-zinc-800 dark:text-gray-100 '>
              <h3>{props.name}</h3>
              <div className='flex w-full flex-row gap-x-1'>
                {props.tags.includes('socrata') && (
                  <div className='rounded-full bg-gray-100 px-2 py-0.5 text-black dark:bg-zinc-700 dark:text-white'>
                    Socrata
                  </div>
                )}
                {props.tags.includes('buggy') && (
                  <div className='rounded-full bg-red-900 px-2 py-0.5 text-red-200 dark:bg-amber-900 dark:text-amber-300'>
                    ⚠️ Contains Bugs
                  </div>
                )}
              </div>
              <p className=''>
                Last Updated{' '}
                <span className='font-semibold'>
                  <time dateTime={props.lastupdated}>
                    <>
                      {new Date(props.lastupdated).toLocaleDateString(
                        'default',
                        {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        }
                      )}{' '}
                      <span className='font-normal'>
                        {new Date(props.lastupdated).toLocaleTimeString(
                          'default',
                          {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: false,
                          }
                        )}
                      </span>
                    </>
                  </time>
                </span>
              </p>
              <p className=''>
                Data Since <span className='font-semibold'>{props.since}</span>
              </p>
              <div className='flex flex-row gap-x-2'>
                <p className=''>
                  Size{' '}
                  <span className='font-semibold'>
                    {byteSizeObj.value}
                    {byteSizeObj.unit}
                  </span>
                </p>
                <p className=''>
                  Rows{' '}
                  <span className='font-semibold'>
                    {formatNumber(props.rowcount)}
                  </span>
                </p>
              </div>
            </div>
          </a>
        </div>
      </Link>
    </div>
  );
}

export default function OpenDataSeries() {
  const datalinks = [
    {
      name: 'Payroll',
      link: 'https://lacity-2.payroll.socrata.com/',
      tags: ['socrata'],
      lastupdated: datainfo.payroll.lastUpdatedAt,
      since: '2013',
      size: datainfo.payroll.csvsize,
      rowcount: datainfo.payroll.rowCount,
    },
    {
      name: 'Checkbook',
      link: 'https://lacity.spending.socrata.com/#!/year/2022/',
      tags: ['socrata'],
      lastupdated: datainfo.checkbook.lastUpdatedAt,
      size: checkbookinfo.checkbooklastupdated[0].filesize,
      rowcount: datainfo.checkbook.rowCount,
      since: '2012',
    },
    {
      name: 'All City Funds',
      link: 'https://controllerdata.lacity.org/Audits-and-Reports/All-City-Funds/ej7u-di9z/data',
      tags: ['socrata'],
      lastupdated: datainfo.cityfunds.lastUpdatedAt,
      since: '2014',
      size: datainfo.cityfunds.csvsize,
      rowcount: datainfo.cityfunds.rowCount,
    },
    {
      name: 'Revenue',
      link: 'https://controllerdata.lacity.org/browse?category=Revenue',
      tags: ['socrata'],
      lastupdated: datainfo.revenue.lastUpdatedAt,
      rowcount: datainfo.revenue.rowCount,
      size: datainfo.revenue.csvsize,
      since: '2012',
    },
  ];

  return (
    <div className='grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2 lg:grid-cols-4'>
      {datalinks.map((eachlink: any, eachlinknum: number) => (
        <EachDataButton
          key={eachlinknum}
          name={eachlink.name}
          link={eachlink.link}
          lastupdated={eachlink.lastupdated}
          since={eachlink.since}
          tags={eachlink.tags}
          size={eachlink.size}
          rowcount={eachlink.rowcount}
        />
      ))}
    </div>
  );
}
