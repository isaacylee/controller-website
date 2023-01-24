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
      />
      <Layout>
        <div className='flex flex-col py-2 dark:text-white'>
          <div className='container mx-4 px-4 pb-3 pt-5  dark:text-gray-100 lg:mx-auto lg:max-w-7xl'>
            {' '}
            <h1 className='2xl dark:text-white'>
              Popular Annual Financial Report FY22
            </h1>{' '}
            <br></br>
            <p>
              The Government Finance Officers Association of the United States
              and Canada (GFOA) has given an Award for Outstanding Achievement
              in Popular Annual Financial Reporting to the City of Los Angeles
              for its Popular Annual Financial Report for the fiscal year ended
              June 30, 2021. The Award for Outstanding Achievement in Popular
              Annual Financial Reporting is a prestigious national award
              recognizing conformance with the highest standards for preparation
              of state and local government popular reports.
              <br />
              To receive the award, a government unit must publish a Popular
              Annual Financial Report, whose contents conform to program
              standards of creativity, presentation, understandability, and
              reader appeal. The award is valid for a period of one year only.
              We believe our current report continues to conform to the Popular
              Annual Financial Reporting requirements, and we are submitting it
              to GFOA to determine its eligibility for another Award.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
