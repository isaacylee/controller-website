'use client';
import Link from 'next/link';

import Navbar from '@/components/Navbar';

export default function OVPR() {
  return (
    <>
      <Navbar />
      <main className='container mx-auto px-4 sm:container lg:max-w-3xl xl:max-w-4xl'>
        <center>
          <div className='mx-2 flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl'>
            <h1 className='pt-8 pb-4 text-center text-3xl font-bold dark:text-white'>
              Los Angeles Municipal Code 80.69.4: Parking of Oversize Vehicles
            </h1>
          </div>
          <div className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
            <h3 className='mb-12 text-2xl'>
              <b>Summary and Analysis</b>
            </h3>
          </div>
          <div>
            <Link
              href='https://oversized-vehicles.vercel.app/'
              passHref
              target='_blank'
            >
              <button
                className='mb-12 rounded py-2 px-4 font-bold text-black'
                style={{
                  backgroundColor: '#41ffca',
                }}
              >
                Map
              </button>
            </Link>
          </div>
          <div
            className='text-left dark:text-white'
            style={{ fontFamily: 'Helvetica' }}
          >
            <p className='mb-4'>
              <Link
                href='https://clkrep.lacity.org/onlinedocs/2013/13-0793_MOT_06-19-13.pdf'
                passHref
                target='_blank'
                className='underline'
              >
                In 2013
              </Link>
              , LA City Council amended LAMC 80.69.4 to empower City
              Councilmembers to propose and pass resolutions prohibiting owners
              and/or drivers of oversized vehicles (over 22 feet in length or
              over 7 feet in height) from parking them during the hours of 2:00
              a.m. to 6:00 a.m. in restricted zones, as designated by street
              signs. In instances where the individual who parked the vehicle is
              not the owner, City law also may criminalize the owner of the
              vehicle.
            </p>
            <p className='mb-4'>
              Note: Enforcement can only take place when signs are in place
              giving notice of the restriction.
            </p>
            <p className='mb-4'>
              See more:{' '}
              <Link
                href='https://codelibrary.amlegal.com/codes/los_angeles/latest/lamc/0-0-0-166619'
                passHref
                target='_blank'
                className='underline'
              >
                https://codelibrary.amlegal.com/codes/los_angeles/latest/lamc/0-0-0-166619
              </Link>
            </p>
            <p className='mb-4'>
              Since 2013, hundreds of oversized vehicle parking restriction
              zones have been approved by the City Council. For over a decade,
              the City has been issuing these restrictions that criminalize
              individuals who own or park oversized vehicles in these zones, but
              has failed to track the zones and their locations. Our Office
              created this map to help the community understand where those
              zones are located. We created this map by downloading all publicly
              available relevant council files through the City Clerk’s Council
              File Management System, inputting the zone descriptions into a
              spreadsheet, and hand-drawing each zone. To our knowledge, this is
              the most comprehensive listing of all 80.69.4 zones in the City of
              LA.
            </p>
          </div>
        </center>
      </main>
    </>
  );
}
