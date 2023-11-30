'use client';

import Navbar from '@/components/Navbar';

import Bargaining from './Bargaining';
import CDBar2 from './CDBar2';
import Cities from './Cities';
import Department from './Department';
import CD from './EmployeesByCD';
import FiftyK from './FiftyK';
import FiftyKPieIn from './FiftyKPieIn';
import FiftyKPieOut from './FiftyKPieOut';
import HundredK from './HundredK';
import HundredKIn from './HundredKIn';
import HundredKOut from './HundredKOut';
import OutOfState from './OutOfState';
import Summary from './Summary';
import SummaryPie1 from './SummaryPie1';
import SummaryPie2 from './SummaryPie2';

export default function Employees() {
  return (
    <>
      <Navbar />
      <main className='md:max-w container mx-auto px-4 sm:container lg:max-w-3xl xl:max-w-4xl'>
        <center>
          <div className='mx-2 flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl'>
            <h1
              className='pt-8 pb-4 text-xl font-bold dark:text-white lg:text-3xl'
              style={{ fontFamily: 'Helvetica' }}
            >
              2022 City of LA Payroll Employee Residence Analysis
            </h1>
          </div>
          <div
            className='text-left dark:text-white'
            style={{ fontFamily: 'Helvetica' }}
          >
            <p className='mb-3'>
              When it comes to payroll, <b>where</b> do your tax dollars
              “literally” <b>go</b>?
            </p>
            <p className='mb-3'>
              Payroll is one of the largest expenses of our City's budget. Some
              questions we get asked frequently are{' '}
              <b>“How many City employees live in the City of LA?”</b> and{' '}
              <b>
                “What’s the potential amount of those dollars getting reinvested
                back into our city?”
              </b>
            </p>
            <p className='mb-4'>
              Although City employees are not required to live in the City, some
              of the benefits of City employees living in the city they work in
              include:
            </p>
            <ul className='mb-4 ml-10'>
              <li>
                &bull; Reinvesting tax dollars back into the city (e.g. local
                spending / local taxes)
              </li>
              <li>
                &bull; More engagement with the local communities they serve as
                City employees
              </li>
              <li>
                &bull; Shorter commutes and faster response time in case of work
                emergencies
              </li>
              <li>
                &bull; Less traffic, greenhouse gas emissions and stress on
                workers and their families
              </li>
            </ul>
            <p className='mb-3'>
              Where people choose to live is the product of many factors –
              including affordability, lifestyle choices and family ties. But a
              close match between City staff and the communities they serve
              strengthens not only the economic health of Los Angeles, it also
              strengthens the bonds of connection and public trust.
            </p>
            <p className='mb-10'>
              Programs like “Targeted Local Hire” foster that relationship, but
              reform of the Civil Service system is needed to expand those
              opportunities beyond entry-level positions. Other large cities
              have implemented incentives for employees, including first
              responders, to live in the communities they serve. Continued
              progress toward promoting additional affordable housing in our
              city, especially workforce housing and transit-oriented community
              projects, can offer more and better choices that are affordable to
              City workers.
            </p>
          </div>
          <div className='mb-6 sm:mb-8 md:mb-12 lg:mb-16'>
            {' '}
            <Summary />
          </div>
          <div className='mb-6 grid grid-cols-1 sm:mb-8 md:mb-12 md:grid-cols-2 md:gap-6 lg:mb-16'>
            <SummaryPie1 />
            <SummaryPie2 />
          </div>
          <div className='mb-6 sm:mb-8 md:mb-12 lg:mb-16'>
            {' '}
            <Cities />
          </div>
          <div className='mb-6 sm:mb-8 md:mb-12 lg:mb-16'>
            {' '}
            <OutOfState />
          </div>
          <div className='mb-6 sm:mb-8 md:mb-12 lg:mb-16'>
            {' '}
            <FiftyK />
          </div>
          <div className='mb-6 grid grid-cols-1 sm:mb-8 md:mb-12 md:grid-cols-2 md:gap-6 lg:mb-16'>
            <FiftyKPieOut />
            <FiftyKPieIn />
          </div>
          <div className='mb-6 sm:mb-8 md:mb-12 lg:mb-16'>
            {' '}
            <HundredK />
          </div>
          <div className='mb-6 grid grid-cols-1 sm:mb-8 md:mb-12 md:grid-cols-2 md:gap-6 lg:mb-16'>
            <HundredKOut />
            <HundredKIn />
          </div>
          <div className='mb-6 sm:mb-8 md:mb-12 lg:mb-16'>
            {' '}
            <CD />
          </div>
          <div className='mb-6 sm:mb-8 md:mb-12 lg:mb-16'>
            {' '}
            <CDBar2 />
          </div>
          <div className='mb-6 sm:mb-8 md:mb-12 lg:mb-16'>
            {' '}
            <Department />
          </div>
          <div className='mb-6 sm:mb-8 md:mb-12 lg:mb-16'>
            {' '}
            <Bargaining />
          </div>
        </center>
      </main>
    </>
  );
}
