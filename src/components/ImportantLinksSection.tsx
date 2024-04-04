import Link from 'next/link';
import React from 'react';

const links = [
  {
    //https://docs.google.com/forms/d/e/1FAIpQLSfr1ndu5UaX3IPaxWi30tEpw3J7ZMB5d8HdKC9Uhg9IniIH5w/viewform

    // -- use this for mailchimp forn /mailchimp
    name: '📰 Sign up for Newsletters/Texts',
    url: '/mailchimp', // Update the URL to point to the new route for the MailChimp page
    // url: 'https://docs.google.com/forms/d/e/1FAIpQLSfr1ndu5UaX3IPaxWi30tEpw3J7ZMB5d8HdKC9Uhg9IniIH5w/viewform', // Update the URL to point to the new route for the MailChimp page
    // url: 'http://eepurl.com/ihOabb', // Update the URL to point to the new route for the MailChimp page
  },
  { name: '📅 Payroll Calendar', url: '/payrollcalendar/' },
  {
    name: '📝 Public Records Request',
    url: 'https://recordsrequest.lacity.org/requests/new?dept_id=1219',
  },
  { name: '🚨 Report Fraud, Waste, or Abuse', url: '/fwa/' },
  {
    name: '💸 Collections Board of Review',
    url: '/collectionsboard/',
  },
];

export default function ImportantLinksSection(props: any) {
  return (
    <div className='grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-3'>
      {links.map((link, key) => (
        <div key={key}>
          <Link href={link.url} key={key} target='_blank' rel='noreferrer'>
            <p className='text-lg font-bold text-black underline dark:text-white'>
              {link.name}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
