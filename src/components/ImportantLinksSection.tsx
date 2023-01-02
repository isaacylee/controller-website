import Link from 'next/link';
import * as React from 'react';

const links = [
  {
    name: '🤔 Send Us Your Questions',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSd3rORdW5vums-qtmLVc5BOZpxmPZAkstJViuFfWtbr2JoR7Q/viewform',
  },
  {
    name: '📰 Signup for Updates',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSfr1ndu5UaX3IPaxWi30tEpw3J7ZMB5d8HdKC9Uhg9IniIH5w/viewform',
  },
  { name: '📅 Payroll Calendar', url: '/payrollcalendar/' },
  { name: '📝 Public Records Request', url: '/public-records-request/' },
  { name: '🚨 Report Fraud, Waste, or Abuse', url: '/fwa/' },
];

export default function ImportantLinksSection(props: any) {
  return (
    <div className='grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-3'>
      {links.map((link, key) => (
        <Link href={link.url} key={key}>
          <a
            className='text-lg font-bold text-black underline dark:text-white'
            href={link.name}
            target='_blank'
            rel='noreferrer'
          >
            {link.name}
          </a>
        </Link>
      ))}
    </div>
  );
}
