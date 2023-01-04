import Link from 'next/link';
import * as React from 'react';

function EachDataButton(props: any) {
  return (
    <div>
      <Link href={props.link}>
        <div className='w-full'>
          <a href={props.link} target='_blank' rel='noopener noreferrer'>
            <div className='rounded-lg bg-gray-200 px-2 py-2 dark:bg-zinc-800 dark:text-gray-100 '>
              <h3>{props.name}</h3>
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
      link: 'https://lacity.payroll.finance.socrata.com/#!/year/2022/',
      lastupdated: '2022-12-30',
    },
    {
      name: 'Checkbook',
      link: 'https://lacity.spending.socrata.com/#!/year/2022/',
      lastupdated: '2023-01-03',
    },
    {
      name: 'Budget',
      link: 'https://controllerdata.lacity.org/browse?category=Budget',
    },
    {
      name: 'Revenue',
      link: 'https://controllerdata.lacity.org/browse?category=Revenue',
    },
  ];

  return (
    <div className='grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2 lg:grid-cols-4'>
      {datalinks.map((eachlink: any, eachlinknum: number) => (
        <EachDataButton
          key={eachlinknum}
          name={eachlink.name}
          link={eachlink.link}
        />
      ))}
    </div>
  );
}
