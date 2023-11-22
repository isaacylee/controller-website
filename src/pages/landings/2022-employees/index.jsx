'use client';

import Navbar from '@/components/Navbar';

import Bargaining from './Bargaining';
import Cities from './Cities';
import Department from './Department';
import CD from './EmployeesByCD';
import EmployeesByCDBar from './EmployeesByCDBar';
import FiftyK from './FiftyK';
import HundredK from './HundredK';
import OutOfState from './OutOfState';
import Summary from './Summary';

export default function Evictions() {
  return (
    <>
      <Navbar />
      <main className='container mx-auto px-4 sm:container lg:max-w-3xl xl:max-w-4xl'>
        <center>
          <div className='mx-2 flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl'>
            <h1
              className='pt-8 pb-4 text-xl font-bold dark:text-white lg:text-3xl'
              style={{ fontFamily: 'Helvetica' }}
            >
              2022 City of LA Payroll Employee Analysis
            </h1>
          </div>
          <div
            className='text-left dark:text-white'
            style={{ fontFamily: 'Helvetica' }}
          >
            <p className='mb-2'>
              When it comes to payroll, <b>where</b> do your tax dollars
              “literally” <b>go</b>?
            </p>
            <p className='mb-2'>
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
            <ul className='mb-10 ml-10'>
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
            </ul>
            <p className='mb-4'>
              <b>2022 HIGHLIGHTS:</b>
            </p>
            <ul className='mb-10 ml-10'>
              <li>
                &bull; <b>6.4 out of every 10 (64%)</b> City employees (minus DWP) lived <b>outside the City of LA.</b><br/>
                <ul className='ml-7'>
                  <li>
                  &#9702; Amounts to 32,066 employees
                  </li>
                  <li>
                  &#9702; Amounts to $3.6 billion in payroll
                  </li>
                </ul>
              </li>
              <li>
                &bull; <b>3.6 out of every 10 (36%)</b> City employees (minus DWP) lived <b>in the City of LA.</b><br/>
                <ul className='ml-7'>
                  <li>
                  &#9702; Amounts to 18,246 employees
                  </li>
                  <li>
                  &#9702; Amounts  to $1.2 billion in payroll
                  </li>
                </ul>
              </li>
              <li>
                &bull; 20% (6,350 employees) of the 32,066 City employees that lived OUTSIDE the City of LA made less than $50,000.
              </li>
              <li>
                &bull; 49% (9,008 employees) of the 18,246 City employees that lived IN the City of LA made less than $50,000.
              </li>
              <li>
                &bull; 506 City employees lived out of state.
              </li>
              <li>
                &bull; Amounts to $65 million in payroll
              </li>
              <li>
                &bull; Top departments/offices where employees lived OUTSIDE the City of LA 
                <ul className='ml-7'>
                  <li>
                  &#9702; Fire (86%) or $656 million in payroll
                  </li>
                  <li>
                  &#9702; Police (81%) or $1.45 billion in payroll
                  </li>
                  <li>
                  &#9702; Pension (77%) or $14 million in payroll
                  </li>
                  <li>
                  &#9702; Information Technology Agency (75%) or $33 million in payroll
                  </li>
                </ul>
              </li>
              <li>
                &bull; Top departments/offices where employees lived IN the City of LA
                <ul className='ml-7'>
                  <li>
                  &#9702; Aging (72%) or $2.6 million in payroll
                  </li>
                  <li>
                  &#9702; Recreation and Parks (70%) or $109 million in payroll
                  </li>
                  <li>
                  &#9702; Council (66%) or $23 million in payroll
                  </li>
                  <li>
                  &#9702; Library (63%) or $47 million in payroll
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='mb-6 sm:mb-8 md:mb-12 lg:mb-16'>
            {' '}
            <Summary />
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
          <div className='mb-6 sm:mb-8 md:mb-12 lg:mb-16'>
            {' '}
            <HundredK />
          </div>
          <div className='mb-6 sm:mb-8 md:mb-12 lg:mb-16'>
            {' '}
            <CD />
          </div>
          <div className='lg:mb-16 md:mb-12 sm:mb-8 mb-6'>
            {' '}
            <EmployeesByCDBar />
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
