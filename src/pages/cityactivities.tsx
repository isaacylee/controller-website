import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';
export default function pafr22(props: any) {
  return (
    <>
      <Navbar />
      <Seo
        title='Popular Annual Financial Report FY22'
        description='Report & Visualizations of Expenditures, Revenues, and Debt for the City of Los Angeles'
        image='https://controller.lacity.gov/images/pafrthumbnail3.png'
      />
      <Layout>
        <div className='flex flex-col pb-2 dark:text-white'>
          <div
            className=''
            style={{
              //url
              background: 'url(/images/acfr-coverphoto.png)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'bottom',
            }}
          >
            <div className=' container mx-0 px-2 pb-3 pt-5 dark:text-gray-100  sm:px-4 lg:mx-auto lg:max-w-7xl'>
              <div className='xl:mt-64'>
                <span className='xl:py-1'></span>
              </div>
              <h1 className='w-content mt-64 mb-64 ml-2 px-2 px-2  text-2xl text-white sm:px-4 sm:py-4 sm:text-3xl md:text-4xl lg:mb-96 lg:mt-96 xl:mb-32'>
                <span className='rounded-lg bg-black bg-opacity-60 px-2 py-1'>
                  City Activities
                </span>
              </h1>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
