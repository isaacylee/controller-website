'use client';
import Link from 'next/link';

import Navbar from '@/components/Navbar';

import BuyoutsByDistrict from './BuyoutsByDistrict';
import BuyoutsByDollars from './BuyoutsByDollars';
import BuyoutsByYear from './BuyoutsByYear';
import BuyoutsByZip from './BuyoutsByZip';

export default function CashForKeys() {
  return (
    <>
      <Navbar />
      <main className='container mx-auto px-4 sm:container lg:max-w-3xl xl:max-w-4xl'>
        <center>
          <div className='mx-2 flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl'>
            <h1 className='pt-8 pb-4 text-center text-3xl font-bold dark:text-white'>
              Cash For Keys (2019 - 2023)
            </h1>
          </div>
          <div>
            <Link
              href='https://docs.google.com/spreadsheets/d/1z8fp_xtRXbuXbO03dobT8lsh7y0Dlvg0ouZDKZR3K7U/edit?usp=sharing'
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
            <p className='mb-4'>
              Amid the ongoing housing crisis, our Office wanted to provide
              transparency on how many tenant buyouts, or “cash for keys”
              agreements (where a landlord pays a tenant to move out), are
              happening throughout the City, and where. Data includes all tenant
              buyout agreements filed between 2019 and 2023.
            </p>
            <p>
              <b>Between 2019-2023:</b>
            </p>
            <ul className='mb-10 ml-4 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-10'>
              <li>
                &bull;{' '}
                <b>
                  4,869 Tenant Buyout or “Cash for Keys” agreements were filed
                </b>
              </li>
              <li>
                &bull; <b>$24,704 was the average buyout amount</b>
              </li>
            </ul>
          </div>
          <div className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
            <h4 className='mb-4 text-xl font-bold'>
              <b>Number of Tenant Buyouts by Year</b>
            </h4>
          </div>
          <div className='mb-16'>
            {' '}
            <BuyoutsByYear />
          </div>
        </center>
        <center>
          <div>
            <h4
              className='mb-4 text-xl font-bold dark:text-white'
              style={{ fontFamily: 'Helvetica' }}
            >
              <b>Number of Tenant Buyouts by Council District</b>
            </h4>
            <p className='mb-4 text-left dark:text-white'>
              Units located within Council District <b>10</b> had the highest
              number of tenant buyouts <b>(997)</b>, followed by Council
              District <b>13 (970)</b>.
            </p>
          </div>
          <div className='mb-16'>
            {' '}
            <BuyoutsByDistrict />
          </div>
          <div className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
            <h4 className='mb-4 text-xl font-bold dark:text-white'>
              <b>
                Top 20 Zip Codes with Highest Number of Tenant Buyout Agreements
              </b>
            </h4>
            <p className='mb-4 text-left dark:text-white'>
              Units located within <b>90004</b> (Koreatown, Mid-Wilshire area)
              had the highest number of buyout agreements (<b>370</b>), followed
              by <b>90026</b> (Echo Park area) with <b>250</b>.
            </p>
          </div>
          <div className='mb-12'>
            {' '}
            <BuyoutsByZip />
          </div>
          <div className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
            <h4 className='mb-4 text-xl font-bold dark:text-white'>
              <b>Tenant Buyouts by $ Range</b>
            </h4>
            <p className='mb-4 text-left'>
              The total dollar amount of tenant buyouts was <b>$118,305,500</b>{' '}
              with an average tenant buyout amount of <b>$24,704 per unit</b>.
            </p>
          </div>
          <div className='mb-16'>
            {' '}
            <BuyoutsByDollars />
          </div>
          <div
            className='mb-16 dark:text-white'
            style={{ fontFamily: 'Helvetica' }}
          >
            <h4 className='mb-4 text-xl font-bold dark:text-white text-left'>
              <b>Tenant Rights</b>
            </h4>
            <p className='mb-4 text-left dark:text-white'>
              Tenants have a number of rights when presented with a "cash for
              keys" offer:
            </p>
            <ul>
              <li className='mb-4 text-left ml-4 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-10'>
                &bull; The tenant is not required to accept or sign the Buyout
                Agreement.
              </li>
              <li className='mb-4 text-left ml-4 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-10'>
                &bull; The tenant may consult with an attorney or call LAHD
                prior to accepting the landlord’s offer.
              </li>
              <li className='mb-4 text-left ml-4 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-10'>
                &bull; The tenant may cancel the Buyout Agreement up to{' '}
                <b>30 days</b> after signing it without obligation or penalty.
              </li>
              <li className='mb-4 text-left ml-4 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-10'>
                &bull; If the owner does not comply with the requirements above,
                then the tenant has the right to cancel the Buyout Agreement for
                any reason at any time without obligation or penalty.
              </li>
              <li className='mb-4 text-left ml-4 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-10'>
                &bull; If the owner does not comply with the requirements above,
                then the tenant may assert an affirmative defense to an Unlawful
                Detainer action and may have a private civil remedy against the
                owner.
              </li>
            </ul>
          </div>
          <div className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
            <h4 className='mb-4 text-xl font-bold dark:text-white text-left'>
              <b>About the Tenant Buyout Notification Program</b>
            </h4>
            <p className='mb-4 text-left dark:text-white'>
              The <b>Tenant Buyout Notification Program</b> went into effect on
              January 25, 2017 and amended the City’s Rent Stabilization
              Ordinance (RSO) to regulate tenant buyout agreements (also known
              as “cash for keys”) for rent-stabilized units. These agreements
              occur when a landlord pays a tenant to vacate.{' '}
            </p>
            <p className='mb-4 text-left dark:text-white'>
              Before this program, these buyout agreements, which amount to
              voluntary evictions, were not covered by the RSO.
            </p>
            <p className='mb-4 text-left dark:text-white'>
              This program requires landlords to provide a disclosure of tenant
              rights for these agreements, which allows tenants to refuse or
              rescind the offer, and provides a baseline of compensation.
            </p>
            <p className='mb-4 text-left dark:text-white'>
              Under this program, landlords are required to file tenant buyout
              agreements with the City.
            </p>
          </div>
        </center>
      </main>
    </>
  );
}
