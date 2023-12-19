'use client';
import Link from 'next/link';

import Navbar from '@/components/Navbar';

import FairMarketRent from './FairMarketRent';
import NoticesByCd from './NoticesByCd';
import NoticesByMonth from './NoticesByMonth';
import NoticeType from './NoticeType';
import Top20Zip from './Top20Zip';

export default function Evictions() {
  return (
    <>
      <Navbar />
      <main className='container mx-auto px-4 sm:container lg:max-w-3xl xl:max-w-4xl'>
        <center>
          <div className='mx-2 flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl'>
            <h1 className='pt-8 pb-4 text-center text-3xl font-bold dark:text-white'>
              Eviction Notices (February - November 2023)
            </h1>
          </div>
          <div>
            <Link
              href='https://docs.google.com/spreadsheets/d/e/2PACX-1vTwkKXHVAsJjGwuEuzY7ILdmYtN_rCmZZsxjECdHK8kG1jGEMjpDa0VWR1UFy97vTNlgtfyysbDYQJL/pubhtml'
              passHref
              target='_blank'
            >
              <button
                className='mb-4 rounded py-2 px-4 font-bold text-black'
                style={{
                  backgroundColor: '#41ffca',
                }}
              >
                Table Version
              </button>
            </Link>
          </div>
          <div className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
            <h3 className='mb-12 text-2xl font-bold'>
              <b>Summary and Analysis</b>
            </h3>
          </div>
          <div
            className='text-left dark:text-white'
            style={{ fontFamily: 'Helvetica' }}
          >
            <p className='mb-2'>
              [December 2023 Update] We received updated data from the Los
              Angeles Housing Department (LAHD) through the month of November
              2023.
            </p>
            <p className='mb-4'>
              The data reveals that from February to November, LAHD has
              received a total of <b>71,429</b> eviction notices. <b>5,902</b>{' '}
              notices were filed for the month of November.
            </p>
            <ul className='mb-10 ml-10'>
              <li>
                &bull; <b>71,429 eviction notices were filed</b>
              </li>
              <li>
                &bull;{' '}
                <b>96% of eviction notices were for "non-payment of rent"</b>
              </li>
              <li>
                &bull; <b>91% came with a 3-day notice</b>
              </li>
              <li>
                &bull; <b>$3,760 is the average amount of rent owed</b>
              </li>
            </ul>
          </div>
          <div className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
            <h4 className='mb-4 text-xl font-bold'>
              <b>Number of Eviction Notices</b>
            </h4>
          </div>
          <div className='mb-16'>
            {' '}
            <NoticesByMonth />
          </div>
        </center>
        <center>
          <div>
            <h4
              className='mb-4 text-xl font-bold dark:text-white'
              style={{ fontFamily: 'Helvetica' }}
            >
              <b>Council District</b>
            </h4>
          </div>
          <div className='mb-16'>
            {' '}
            <NoticesByCd />
          </div>
          <div className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
            <h4 className='mb-4 text-xl font-bold dark:text-white'>
              <b>Top 20 Zip Codes with Highest Number of Eviction Notices</b>
            </h4>
          </div>
          <div className='mb-12'>
            {' '}
            <Top20Zip />
          </div>
          <div
            className='mb-16 text-left dark:text-white'
            style={{ fontFamily: 'Helvetica' }}
          >
            <p className='mb-4'>
              The table above shows the top 20 Zip Codes with the highest number
              of eviction notices filed with the City from February to November
              2023.
            </p>
            <p className='mb-4'>
              Units located within <b>90028</b> (Hollywood area) had the highest
              number of eviction notices filed with <b>4,778</b> followed by{' '}
              <b>90036</b> (Fairfax area) with <b>3,566</b>.
            </p>
          </div>
          {/* <div className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
            <h4 className='mb-4 text-xl font-bold dark:text-white'>
              <b>Rent Owed</b>
            </h4>
            <p className='mb-4 text-left'>
              The total amount of rent owed due to <b>Non-Payment of Rent</b> is{' '}
              <b>$186,491,100.99</b>.
            </p>
          </div>
          <div className='mb-16'>
            {' '}
            <RentOwed />
          </div> */}
          <div className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
            <h4 className='mb-4 text-xl font-bold dark:text-white'>
              <b>Fair Market Rent</b>
            </h4>
            <div className='mb-4 text-left'>
              <p className='mb-4'>
                The <b>Just Cause Ordinance (JCO)</b> contains a provision where
                a landlord can evict a tenant only if the amount due{' '}
                <u>exceeds</u> one month of fair market rent for the Los Angeles
                metro area.
              </p>
              <p>
                <b>11,461</b> eviction notices were filed where the amount of
                rent owed is below the Fair Market Rent (FMR) Limit.
              </p>
            </div>
          </div>
          <div className='mb-16'>
            {' '}
            <FairMarketRent />
          </div>
          <div className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
            <h4 className='mb-4 text-xl font-bold dark:text-white'>
              <b>Notice Types</b>
            </h4>
            <div className='mb-4 text-left'>
              <p>
                When served with an eviction, tenants are given a deadline to
                either pay rent owed or move out ("pay or quit") or to fix an
                issue or move out ("perform or quit"). Other notices will only
                give a deadline to move out (such as 30-day notices).
              </p>
            </div>
          </div>
          <div className='mb-16'>
            {' '}
            <NoticeType />
          </div>
          <div className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
            <h4 className='mb-4 text-xl font-bold dark:text-white'>
              <b>Tenant Protection Deadlines</b>
            </h4>
            <ul>
              <li className='mb-4 text-left'>
                &bull; Effective <b>February 1, 2024</b>:
              </li>
              <ul className='ml-10'>
                <li className='mb-4 text-left'>
                  <p className='mb-4 text-left'>
                    &#9702; Rent owed from October 1, 2021 to January 31, 2023
                    is due. If a tenant returned the Declaration of
                    COVID-19-Related Financial Distress form to the landlord
                    within 15 days of rent being due AND paid 25% of rent owed
                    from this period, they cannot be evicted for nonpayment of
                    rent.
                  </p>
                  <p>
                    However, since <b>March 27, 2023</b> landlords may not evict a
                    tenant who falls behind in rent unless the tenant owes an
                    amount higher than the <b>Fair Market Rent (FMR)</b>. The FMR
                    depends on the bedroom size of the rental unit.
                  </p>
                </li>
                <li className='mb-4 text-left'>
                  <p className='mb-4'>
                    &#9702; As amended by City Council, annual rent
                    increases will resume for rental units subject to the City’s
                    Rent Stabilization Ordinance (RSO) with the allowable rent
                    increase at 4% starting <b>February 1, 2024</b> through{' '}
                    <b>June 30, 2024</b>. If the tenant is provided with
                    electric service and/or gas by the landlord, rent can be
                    increased an additional 1-2% with a total increase of 5% or
                    6%.
                  </p>
                  <p>
                    State law requires that the landlord must provide an advance
                    30-day written notice for all rent increases of less than
                    10%.
                  </p>
                </li>
                <li className='mb-4 text-left'>
                  &#9702; Eviction protections for unauthorized occupants or
                  pets due to COVID-19 expire.
                </li>
              </ul>
              <li className='text-left'>
                &bull; If an eviction notice is not provided to LAHD, a tenant
                may raise an affirmative defense in an Unlawful Detainer case.
              </li>
            </ul>
          </div>
        </center>
      </main>
    </>
  );
}
