import Image from 'next/image';
import * as React from 'react';

import Footer from '@/components/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';

import { audits } from '../audits.json';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function About() {
  return (
    <>
      <Navbar />
      <Layout>
        <Seo />

        <div className='bgColorHeader relative px-4 pt-8 text-base text-sm md:px-32 md:px-0 md:pt-24 md:text-white'>
          <div className='background-1'>
            {/* max-w-2md z-10 mx-auto text-white */}
            <div className='z-10 mx-auto max-w-7xl text-white'>
              <div className='mx-auto flex flex-row lg:max-w-3xl'>
                <div className='my-auto'>
                  {' '}
                  <h2>About Kenneth Mejia</h2>
                  {/* <h2>Controller of Los Angeles</h2> */}
                </div>

                <div className='left-118 right-20 top-10 flex space-x-3 md:absolute md:flex'>
                  {/* flex ml-10 justify-center space-x-2 md:flex-row */}

                  {/* facebook */}
                  <a
                    href=' https://www.facebook.com/lacontroller'
                    target='_blank'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 320 512'
                      className='h-7 w-7'
                      fill='color: #1877f2;'
                    >
                      <path
                        fill='currentColor'
                        d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'
                      />
                    </svg>
                  </a>

                  {/*  instagram */}
                  <a
                    href=' https://www.instagram.com/lacontroller'
                    target='_blank'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 448 512'
                      className='h-7 w-7'
                      fill='color: #c13584;'
                    >
                      <path
                        fill='currentColor'
                        d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
                      />
                    </svg>
                  </a>
                  {/* tiktok */}
                  <a
                    href=' https://www.tiktok.com/@lacontroller'
                    target='_blank'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 448 512'
                      className='h-7 w-7'
                      fill='color: #6a76ac;'
                    >
                      <path
                        fill='currentColor'
                        d='M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z'
                      />
                    </svg>
                  </a>

                  {/* twitter */}
                  <a
                    href='https://twitter.com/lacontroller'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'
                      className='h-7 w-7'
                      fill='color: #1da1f2;'
                    >
                      <path
                        fill='currentColor'
                        d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'
                      />
                    </svg>
                  </a>
                </div>
                <div className='ml-auto'>
                  <Image
                    src='/images/627836e7efcd351d09a5d8da_kenneth-blob-bio-2.png'
                    alt=''
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='timeline mt-10'>
          {/* <div className='leftTimeline containerTimeline'> */}
          {/* <div className='contentTimeline'> */}

          <p className='text-black-500 dark:text-black-400 mb-3 font-light md:relative md:py-2'>
            The City Controller is the elected paymaster, auditor and chief
            accounting officer for the City of Los Angeles. Along with the Mayor
            and City Attorney, the Controller is one of three offices elected
            every four years by citywide popular vote.
          </p>
          <p className='text-black-500 dark:text-black-400 mb-3 font-light md:relative'>
            In 1878, the position was created as the City Auditor, becoming an
            elected office in 1889. The 1925 City Charter changed the name of
            the position to City Controller. In 2000, a City Charter update
            granted the Controller the power to conduct performance audits of
            City departments, allowing an examination of departmental
            effectiveness.
          </p>

          <p className='text-black-500 dark:text-black-400 mb-3 font-light md:relative'>
            Kenneth Mejia is the City’s 20th Controller, elected in November
            2022. Controller Mejia oversees a team of more than 160 employees
            who conduct independent audits, manage the City’s payroll and
            spending, report on the City’s finances, and provide City metrics
            and data online.
          </p>
          <p className='text-black-500 dark:text-black-400 mb-3 font-light md:relative'>
            In order to fulfill the Controller’s Charter-mandated functions, the
            City Controller’s office has three major divisions – Audit Services,
            Accounting Operations, and Financial Reporting and Analysis – in
            addition to Executive Office and Management Services leadership and
            staff.
          </p>
          <p className='text-black-500 dark:text-black-400 mb-3 font-light md:relative'>
            The Executive Office supports the Controller with staff dedicated to
            communications and innovation, scheduling and office operations,
            community engagement and government affairs. Management Services is
            responsible for all aspects of personnel, departmental payroll,
            budgeting, accounting and facility management for the Controller’s
            office. Below is a closer look at Audit Services, Accounting
            Operations and Financial Reporting and Analysis.
          </p>

          {/* address */}
          <div className='text-left md:text-center'>
            <p className='content-center break-normal font-bold md:relative'>
              200 N. Main Street, Suite 300 Los Angeles, CA 90012
            </p>
            <p className='content-center break-normal font-bold md:relative'>
              Phone: 213.978.7200,
            </p>
            <p className='content-center break-normal font-bold md:relative'>
              Fax: 213.978.7211,
            </p>
            <p className='content-center break-normal font-bold md:relative'>
              controller.mejia@lacity.org
            </p>
          </div>
          {/* leadership */}
          <p className='content-center break-normal font-bold underline-offset-8 md:relative md:py-2'>
            Leadership
          </p>
          <p className='content-center break-normal  font-bold md:relative'>
            Kenneth Mejia
          </p>
          <p className='content-center break-normal   md:relative '>
            LA City Controller
          </p>
          <p className='content-center break-normal  font-bold md:relative '>
            Jane Nguyen
          </p>
          <p className='content-center break-normal  md:relative'>
            Chief of Staff
          </p>
          <p className='content-center break-normal font-bold md:relative'>
            Rick Cole
          </p>
          <p className='content-center break-normal md:relative'>
            Chief Deputy Controller
          </p>
          <p className='content-center break-normal font-bold md:relative'>
            Sergio Perez
          </p>
          <p className='content-center break-normal  md:relative'>
            Chief of Accountability & Oversight
          </p>
          {/* innovation */}
          <p className='content-center  break-normal font-bold underline-offset-8 md:relative md:py-2'>
            Innovation and Communications
          </p>
          <p className='content-center break-normal  font-bold md:relative'>
            Kyler Chin
          </p>
          <p className='content-center break-normal   md:relative '>
            Director of Technology & Innovation
          </p>
          <p className='content-center break-normal  font-bold md:relative '>
            Diana Chang
          </p>
          <p className='content-center break-normal   md:relative '>
            Director of Communications
          </p>
          {/* Community Engagement */}
          <p className='content-center break-normal font-bold underline-offset-8 md:relative md:py-2'>
            Community Engagement
          </p>
          <p className='content-center break-normal  font-bold md:relative'>
            Shekinah Deocares
          </p>
          <p className='content-center break-normal   md:relative '>
            Director of Community Engagement
          </p>
          {/* Government Affairs */}
          <p className='content-center break-normal font-bold underline-offset-8 md:relative md:py-2'>
            Government Affairs
          </p>
          <p className='content-center break-normal  font-bold md:relative'>
            Michael Shear
          </p>
          <p className='content-center break-normal   md:relative '>
            Director of Research & Government Affairs
          </p>
          {/* Executive Aides */}
          <p className='content-center break-normal font-bold underline-offset-8 md:relative md:py-2'>
            Executive Aides
          </p>
          <p className='content-center break-normal  font-bold md:relative'>
            Jacky Rodarte
          </p>
          <p className='content-center break-normal   md:relative '>
            Vincent de Vera
          </p>
          {/* Payroll Operations */}
          <p className='content-center break-normal font-bold underline-offset-8 md:relative md:py-2'>
            Payroll Operations
          </p>
          <p className='content-center break-normal  font-bold md:relative'>
            James Robinson
          </p>
          <p className='content-center break-normal   md:relative '>
            Principal Deputy Controller
          </p>
          {/* Audit Services */}
          <p className='content-center break-normal font-bold underline-offset-8 md:relative md:py-2'>
            Audit Services
          </p>
          <p className='content-center break-normal  font-bold md:relative'>
            Devang Panchal
          </p>
          <p className='content-center break-normal   md:relative '>
            Director of Auditing
          </p>
          {/* Management Services */}
          <p className='content-center break-normal font-bold underline-offset-8 md:relative md:py-2'>
            Management Services
          </p>
          <p className='content-center break-normal  font-bold md:relative'>
            Jovonne Lavender
          </p>
          <p className='content-center break-normal   md:relative '>
            Chief Management Analyst
          </p>

          <h1 className='md:py-4'>Audit Services Division</h1>
          <p className='text-black-500 dark:text-black-400 mb-3 font-light md:relative md:py-2'>
            The Audit Services Division of the Controller’s Office conducts
            scheduled audits, special audits, and audits requested by the City
            Council or City management. Audits determine if existing controls in
            City departments are adequate, gauge whether departments are
            operating efficiently and effectively, and ensure that revenues and
            expenditures are properly recorded in conformance with applicable
            laws and regulations. City auditors recommend improvements that
            promote efficiency and effectiveness of City operations and save
            taxpayer dollars. This division conducts the following types of
            audits:
          </p>
          <h3>Financial and Compliance Audits</h3>
          <p className='text-black-500 dark:text-black-400 mb-3 font-light md:relative md:py-8'>
            Financial-related audits determine whether financial information is
            presented in accordance with established or stated criteria, and
            whether the internal control structure over financial reporting and
            safeguarding of assets is suitably designed and implemented to
            achieve its objectives. These audits also include routine payroll
            observations and reviews of departmental bank accounts.
          </p>
          <h3>Performance Audits</h3>
          <p className='text-black-500 dark:text-black-400 mb-3 font-light md:relative md:py-8'>
            Performance and operational audits of City departments and programs
            are mandated by the City Charter, and assess whether government
            programs or functions are efficiently and effectively achieving
            their goals.
          </p>
          <h3>Special Analysis and Reviews</h3>
          <p className='text-black-500 dark:text-black-400 mb-3 font-light md:relative md:py-8'>
            These are different types of reports that do various things, such as
            tracking the implementation status of audit recommendations as
            asserted by management, follow-up audits to independently ensure
            implementation status, and other special assignments as directed. On
            an as-needed basis, the division also performs information systems
            audits, such as general control reviews, application reviews, and
            post-implementation systems reviews to ensure system functionality
            and data integrity. In addition, the division performs vendor
            reviews for selected contracts.
          </p>
          <h3>Fraud, Waste and Abuse Unit</h3>
          <p className='text-black-500 dark:text-black-400 mb-3 font-light md:relative md:py-8'>
            The City of Los Angeles aims to be as transparent and efficient as
            possible, going above and beyond to protect taxpayers’ assets and
            preserve government integrity. Critical to these efforts is tracking
            reports of fraud, waste and abuse of City resources, a core function
            of the Controller’s office for 15 years.
          </p>
          <p className='text-black-500 dark:text-black-400 mb-3 font-light md:relative md:py-8'>
            Since its creation, the Controller’s Fraud, Waste and Abuse Unit has
            sought to identify, stop and, ultimately, prevent the misuse of City
            resources by employees and others. This is done through a 24-hour
            telephone hotline and web-based complaint form, along with citywide
            education and training programs.
          </p>

          <div className='break-normal'></div>

          <h1>Accounting Operations Division</h1>
          <p className='text-black-500 dark:text-black-400 mb-3 font-light md:relative md:py-8'>
            The Accounting Operations Division is responsible for paying
            employees and vendors, budgetary control of all City funds as
            authorized by ordinance, pre- and post-audit approval, and release
            of City funds. This division is comprised of the following sections:
          </p>
          <h3>Funds and Appropriations Section</h3>
          <p className='text-black-500 dark:text-black-400 mb-3 font-light md:relative md:py-8'>
            The Funds and Appropriations Section is responsible for budgetary
            control of all City funds authorized by ordinance, the Mayor and
            City Council. The section verifies the availability of funds before
            releasing expenditures for all City departments. This section also
            sets up the budget appropriations within the City’s General Ledger
            in accordance with the approved budget. It reviews, analyzes and
            audits all journal entries to ensure compliance with the City
            Charter, Administrative Code and Generally Accepted Accounting
            Principles.
          </p>
          <h3>Fiscal Oversight and Support Section</h3>
          <p className='text-black-500 dark:text-black-400 mb-3 font-light md:relative md:py-8'>
            Fiscal Oversight and Support is responsible for the review and
            approval of demands (payments) against the City Treasury. The
            section establishes Citywide policies and procedures regarding
            receipt of goods and services, payment processing, and disbursement
            of City funds. The section is also responsible for the filing and
            remittance of payroll, sales, and use taxes to federal and State
            agencies. The section also administers the Citywide Travel and
            Purchasing Card programs.
          </p>
          <h3>Payroll Section</h3>
          <p className='text-black-500 dark:text-black-400 mb-3 font-light md:relative md:py-8'>
            The Payroll Section is the central payroll-processing unit for the
            City of Los Angeles. It ensures that the City processes its payroll
            and pays its employees in a timely manner and in accordance with the
            City Charter, Administrative Code (Division 4), Civil Service Rules,
            Department Personnel Ordinances, Memorandums of Understandings, and
            state and federal regulations. This section also provides support to
            PaySR, the City’s payroll system and is responsible for system
            enhancements and updates.
          </p>
          <h3>Paymaster Section</h3>
          <p className='text-black-500 dark:text-black-400 mb-3 font-light md:relative md:py-8'>
            The Paymaster Section is responsible for the security, control and
            disbursement of all warrants (checks) for City vendors, workers’
            compensation and payroll. This section is also responsible for
            enforcing legal wage garnishments against City employees and
            vendors, and disbursing funds collected through the voluntary child
            and spousal support payroll deduction program.
          </p>

          <div className='break-normal'></div>

          <h1>Financial Analysis and Reporting Division</h1>
          <p className='text-black-500 dark:text-black-400 mb-3 font-light md:relative md:py-8'>
            The Financial Analysis and Reporting Division is responsible for
            producing federal, state and local financial compliance reports, and
            providing financial reports and forecasts to the City Council and
            management. The Division also include oversight of the City’s
            Financial System, FMS. The following are the sections of the
            division:
          </p>
          <h3>GAAP Compliance Section</h3>
          <p className='text-black-500 dark:text-black-400 mb-3 font-light md:relative md:py-8'>
            Produces the City’s Annual Financial Report (AFR) in accordance with
            Generally Accepted Accounting Practices (GAAP) and in compliance
            with accounting standards set by the Government Accounting Standards
            Board (GASB). The CAFR is the official financial report of the City
            of Los Angeles. In compiling the AFR, the GAAP section converts
            non-GAAP budgetary basis (cash) financial data to a GAAP format
            (modified and full accrual) for financial statement presentation.
            The section provides GAAP conversion guidelines to all City
            Departments as well as training and guidance.
          </p>
          <h3>General Accounting Section</h3>
          <p className='text-black-500 dark:text-black-400 mb-3 font-light md:relative md:py-8'>
            The General Accounting Section tracks, forecasts and reports on City
            receipts, cash flows, debt levels and the status of the Reserve
            Fund. The section prepares the Controller’s annual March 1 revenue
            forecast for the General Fund and the Preliminary Financial Report —
            the first official financial information available on the prior
            fiscal year — and performs the accounting function for the Municipal
            Improvement Corporation of Los Angeles.
          </p>
          <h3>Single Audit Section</h3>
          <p className='text-black-500 dark:text-black-400 mb-3 font-light md:relative md:py-8'>
            The Single Audit Section produces the Single Audit in support of
            $426 million in grants awarded to the City each year, in compliance
            with the Federal Single Audit Act of 1984, the Single Audit
            Amendments of 1996 and Office of Management and Budget (OMB)
            Circular A-133.
          </p>
          <h3>Cost Allocation Plan (CAP) Section</h3>
          <p className='text-black-500 dark:text-black-400 mb-3 font-light md:relative md:py-8'>
            The Cost Allocation Plan Section produces the City’s
            federally-approved Cost Allocation Plan. The CAP shows how indirect
            costs — pensions and benefits, central services, and department
            administration and support — are allocated across City operations.
            The methodology and resulting rates are audited and approved by the
            federal government, and the rates are used to secure reimbursement
            for these indirect costs associated with grants and other federally
            funded programs. The reimbursements average about $20 million
            annually.
          </p>
          <h3>Check Reconciliation Section</h3>
          <p className='text-black-500 dark:text-black-400 mb-3 font-light md:relative md:py-8'>
            This section reconciles all warrants issued against warrants paid,
            taking into account all adjustments. The Check Reconciliation
            Section protects the City by ensuring that the banks only honor the
            checks that are issued by the City and not fraudulent checks. This
            section is responsible for processing remakes of checks, issuance of
            duplicate and emergency checks and the processing of returned
            checks.
          </p>
          <h3>Financial Management System Section</h3>
          <p className='text-black-500 dark:text-black-400 mb-3 font-light md:relative md:py-8'>
            The Financial Management System Section (FMS) is the City’s
            financial system of record and integrated to the business processes
            of virtually all aspects of the Controller’s office. FMS provides
            four major functions and a business intelligence tool for the City
            of Los Angeles.
          </p>
          <p className='text-black-500 dark:text-black-400 mb-3 font-light md:relative md:py-8'>
            The FMS group provides support, reporting, and troubleshooting for
            approximately 2,000 users, along with project management for FMS
            upgrades and enhancements.
          </p>
          <h3>Open Data Section</h3>
          <p className='text-black-500 dark:text-black-400 mb-3 font-light md:relative md:py-8'>
            The Controller’s Open Data section develops, implements, supports
            and maintains Control Panel L.A., and collaborates with other City
            and proprietary departments to publish financial information related
            to audits and reports in a centralized location. Control Panel L.A.
            promotes accessibility and transparency by allowing users to search,
            download and share City financial data and providing an interactive
            experience. It includes Checkbook L.A., Payroll Explorer, Inside
            L.A. City Finances, departmental statistical and metrics, and other
            information.
          </p>

          {/* </div> */}
        </div>

        <div className='leftTimeline containerTimeline'>
          {/* <div className='contentTimeline'>
              <div className='h-70 -bottom-10 right-0 w-96 md:absolute'>
                <img src='https://uploads-ssl.webflow.com/62703f612bf4b6c4cf204b98/62783ca09c10c930020cf312_kenneth-toydrive.png' />
              </div>
            </div> */}
        </div>

        <div className='contentTimeline'></div>
        {/* </div> */}

        <div className='containerTimeline px-4 py-8  md:max-w-sm md:px-0 lg:mx-16'></div>
      </Layout>

      <Footer />
    </>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts

  // By returning {props: {posts} }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      audits,
    },
  };
}
