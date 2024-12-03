'use client';
import Head from 'next/head';
import Link from 'next/link';

import FairMarketRent from '@/components/eviction/FairMarketRent';
import NoticesByCd from '@/components/eviction/NoticesByCd';
import NoticesByMonth from '@/components/eviction/NoticesByMonth';
import NoticeType from '@/components/eviction/NoticeType';
import Top20Zip from '@/components/eviction/Top20Zip';
import Navbar from '@/components/Navbar';

export default function Evictions() {
  return (
    <>
      <Head>
        <title>
          Eviction Notices (February 2023 - November 17, 2024) Summary and
          Analysis
        </title>
      </Head>
      <Navbar />
      <main className='container mx-auto mb-12 px-4 sm:container lg:max-w-3xl xl:max-w-4xl'>
        <center>
          <div className='mx-2 flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl'>
            <h1 className='pb-4 pt-8 text-center text-3xl font-bold dark:text-white'>
              Eviction Notices (February 2023 - November 17, 2024)
            </h1>
          </div>
          <div>
            <Link
              href='https://docs.google.com/spreadsheets/d/e/2PACX-1vTwkKXHVAsJjGwuEuzY7ILdmYtN_rCmZZsxjECdHK8kG1jGEMjpDa0VWR1UFy97vTNlgtfyysbDYQJL/pubhtml'
              passHref
              target='_blank'
            >
              <button
                className='mb-4 rounded px-4 py-2 font-bold text-black'
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
              [December 2024 Update] We analyzed updated data from the Los
              Angeles Housing Department (LAHD) from February 2023 through
              November 17, 2024.
            </p>
            <p className='mb-4'>
              The data reveals that from February 2023 to November 17, 2024,
              LAHD received a total of
              <b> 166,433</b> eviction notices. <b>5,136</b> notices were filed
              for November 2024 (as of 11/17/2024).
            </p>
            <ul className='mb-10 ml-10'>
              <li>
                &bull; <b>166,433 eviction notices were filed</b>
              </li>
              <li>
                &bull;{' '}
                <b>94% of eviction notices were for “non-payment of rent”</b>
              </li>
              <li>
                &bull; <b>90% came with a 3-day notice</b>
              </li>
              <li>
                &bull; <b>$3,960 is the average amount of rent owed</b>
              </li>
            </ul>

            <br></br>
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
              of eviction notices filed with the City from February 2023 to
              November 17, 2024.
            </p>
            <p className='mb-4'>
              Units located within <b>90028 </b>(Hollywood area) had the highest
              number of eviction notices filed with <b>10,239</b> followed by{' '}
              <b>90012</b> (Downtown LA, Chinatown area) with <b>8,078</b>.
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
                a landlord can evict a tenant only if the amount due exceeds one
                month of fair market rent for the Los Angeles metro area.
              </p>
              <p>
                <b>28,352 </b> eviction notices were filed where the amount of
                rent owed is below the Fair Market Rent (FMR) Limit.
              </p>
            </div>
          </div>
          <div className='mb-16'>
            {' '}
            <FairMarketRent />
            <p className='italic dark:text-white'>
              Note: The Fair Market Rent (FMR) amounts are adjusted each Fiscal
              Year (July to June).
            </p>
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
            <ul className='list-disc'>
              <li className='mb-4 text-left'>
                Effective <b>February 1, 2024</b>:
              </li>
              <ul className='ml-10 list-[circle]'>
                <li className='mb-4 text-left'>
                  <p className='mb-4 text-left'>
                    Rent owed from October 1, 2021 to January 31, 2023 is due.
                    If a tenant returned the Declaration of COVID-19-Related
                    Financial Distress form to the landlord within 15 days of
                    rent being due AND paid 25% of rent owed from this period,
                    they cannot be evicted for nonpayment of rent.
                  </p>
                  <p>
                    However, since <b>March 27, 2023</b> landlords may not evict
                    a tenant who falls behind in rent unless the tenant owes an
                    amount higher than the <b>Fair Market Rent (FMR)</b>. The
                    FMR depends on the bedroom size of the rental unit.
                  </p>
                </li>
                <li className='mb-4 text-left'>
                  <p className='mb-4'>
                    As amended by City Council, annual rent increases will
                    resume for rental units subject to the City’s Rent
                    Stabilization Ordinance (RSO) with the allowable rent
                    increase at 4% starting <b>February 1, 2024</b> through{' '}
                    <b>June 30, 2024</b>. If the tenant is provided with
                    electric service and/or gas by the landlord, rent can be
                    increased an additional 1-2% with a total increase of 5% or
                    6%.
                  </p>
                  <p className='mb-4'>
                    The allowable rent increase of 4% is still in effect
                    starting on <b>July 1, 2024</b> through <b>June 30, 2024</b>
                    . The additional 1-2% is still applicable if the tenant is
                    provided with electric service and/or gas by the landlord,
                    totaling 5-6%.
                  </p>
                  <p>
                    State law requires that the landlord must provide an advance
                    30-day written notice for all rent increases of less than
                    10%.
                  </p>
                </li>
              </ul>
              <li className='mb-4 text-left'>
                Effective <b>February 5, 2024</b>:
              </li>
              <ul className='ml-10 list-[circle]'>
                <li className='mb-4 text-left'>
                  Eviction protections will continue for tenants with
                  unauthorized pets obtained during the COVID-19 emergency.
                  Tenants had until <b>March 5, 2024</b> to inform their
                  landlord of their unauthorized pet if they had not yet done so
                  already. This protection does not apploy to unauthorized pets
                  that began residing in the rental until after{' '}
                  <b>January 31, 2024</b>.
                </li>
              </ul>
              <li className='text-left'>
                If an eviction notice is not provided to LAHD, a tenant may
                raise an affirmative defense in an Unlawful Detainer case.
              </li>
            </ul>
            <br></br>
            <p className='text-left'>
              For future updates on eviction notices, please visit LAHD’s{' '}
              <b>Eviction Notices Filed</b> dashboard:
              <a
                href='https://housing2.lacity.org/residents/renters/eviction-notices-filed'
                target='_blank'
                className='text-blue-500 underline'
                rel='noreferrer'
              >
                {' '}
                https://housing2.lacity.org/residents/renters/eviction-notices-filed
              </a>
              .
            </p>
          </div>
        </center>
      </main>
    </>
  );
}
