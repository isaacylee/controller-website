// eslint-disable-next-line simple-import-sort/imports
import Link from 'next/link';
import * as React from 'react';
import { titleCase } from 'true-case';

import { data } from '@/data.json';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';
import { SocialPageSeries } from '@/components/SocialPageSeries';

import { audits } from '@/audits.json';
import { finance } from '@/financeindex.json';
import { budgets } from '@/budget.json';
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

interface bigcardprops {
  key: number;
  link: string;
  image: string;
  year: string;
  dept?: any;
  name: string;
}

function LineCard(props: any) {
  return (
    <div
      key={props.key}
      className='mb-2 w-full  max-w-xs rounded-lg border border-gray-500 bg-gray-100 dark:border-gray-300 dark:bg-gray-800 dark:text-gray-100'
    >
      <a href={`${props.link}`} className=' dark:text-gray-50'>
        <div className=' px-2 py-2  dark:text-gray-50'>
          <p>
            {props.year} | <span>{props.dept}</span>
          </p>
          <p className='font-semibold'>{props.name}</p>
        </div>
      </a>
    </div>
  );
}

function BigCard(props: bigcardprops) {
  return (
    <div
      key={props.key}
      className={`mb-2 w-full max-w-xs rounded-lg bg-gray-200 dark:bg-gray-800 dark:text-gray-100
    ${props.key === 4 ? ' hidden md:block ' : ''}
    ${props.key === 5 ? ' hidden lg:block ' : ''}`}
    >
      <a href={`${props.link}`}>
        <img src={props.image} className='w-full'></img>
        <div className=' px-2 py-2  dark:text-gray-100'>
          <p>
            {props.year} | <span>{props.dept}</span>
          </p>
          <p className='font-semibold'>{props.name}</p>
        </div>
      </a>
    </div>
  );
}

export default function HomePage(props: any) {
  return (
    <>
      <Navbar />
      {/* <Translate /> */}
      <Layout>
        {/* <Seo templateTitle='Home' /> */}

        <Seo />

        <div className='bgColorHeader relative px-4 pt-8 text-base text-sm md:px-32 md:px-0 md:pt-24 md:text-white'>
          <div className='background-1'>
            <div className='z-10 mx-auto pl-2 pr-0 text-white md:px-4 lg:max-w-6xl lg:px-16 xl:max-w-7xl'>
              <div className='flex flex-row'>
                <div className='my-auto'>
                  {' '}
                  <h2>Kenneth Mejia</h2>
                  <h2>Controller of Los Angeles</h2>
                </div>

                <SocialPageSeries />

                <div className='ml-auto'>
                  <img
                    src='/images/ken-new-blob-big.png'
                    alt=''
                    className='w-96 lg:w-[500px]'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className='flex space-x-4'>
          <a
            href='https://controllerdata.lacity.org/browse?limitTo=datasets'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='inline-flex items-center rounded bg-gray-300 py-2 px-4 font-bold text-gray-800 hover:bg-gray-400'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
                />
              </svg>

              <span>All Data</span>
            </button>
          </a>

          <a
            href='http://lacity.payroll.finance.socrata.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='inline-flex items-center rounded bg-gray-300 py-2 px-4 font-bold text-gray-800 hover:bg-gray-400'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z'
                />
              </svg>

              <span>Payroll</span>
            </button>
          </a>

          <a
            href='https://lacity.spending.socrata.com/#!/year/2022/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='inline-flex items-center rounded bg-gray-300 py-2 px-4 font-bold text-gray-800 hover:bg-gray-400'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75'
                />
              </svg>

              <span>Checkbook</span>
            </button>
          </a>
        </div>
        <div className='container mx-auto px-4 md:px-0 '>
          <Link href='/audits'>
            <h2 className='pt-8 pb-4 dark:text-white'> Audits & Reports</h2>
          </Link>

          <div className='hidden grid-cols-3 gap-x-4 gap-y-4 md:grid  md:grid-cols-4 lg:grid-cols-5'>
            {audits.slice(0, 5).map((eachaudit: any, key: number) => (
              <BigCard
                key={key}
                link={`/audits/${eachaudit.link}`}
                image={eachaudit.image}
                year={eachaudit.year}
                dept={titleCase(eachaudit.dept)}
                name={eachaudit.name}
              />
            ))}
          </div>
          <div>
            <div className='rounded-lg  sm:hidden'>
              {audits.slice(0, 6).map((eachaudit: any, key: number) => (
                <LineCard
                  key={key}
                  link={`/audits/${eachaudit.link}`}
                  image={eachaudit.image}
                  year={eachaudit.year}
                  dept={titleCase(eachaudit.dept)}
                  name={eachaudit.name}
                />
              ))}
            </div>
          </div>
          <div>
            <div className='flex flex-row'>
              <Link href='/audits'>
                <div className='w-content rounded-full bg-black px-4 py-2 font-bold text-white'>
                  All Audits
                </div>
                <br></br>
              </Link>
            </div>
          </div>
        </div>

        <div className='container mx-auto px-4 md:px-0 '>
          <Link href='/reports'>
            <h2 className='pt-8 pb-4 dark:text-white'>Financial Reports</h2>
          </Link>

          <div className='hidden grid-cols-3 gap-x-4 gap-y-4 md:grid  md:grid-cols-4 lg:grid-cols-5'>
            {finance.slice(0, 5).map((eachaudit: any, key: number) => (
              <BigCard
                key={key}
                link={`/reports/${eachaudit.link}`}
                image={eachaudit.image}
                year={eachaudit.year}
                dept={titleCase(eachaudit.dept)}
                name={eachaudit.name}
              />
            ))}
          </div>
          <div>
            <div className='rounded-lg  sm:hidden'>
              {finance.slice(0, 6).map((eachaudit: any, key: number) => (
                <LineCard
                  key={key}
                  link={`/reports/${eachaudit.link}`}
                  image={eachaudit.image}
                  year={eachaudit.year}
                  dept={titleCase(eachaudit.dept)}
                  name={eachaudit.name}
                />
              ))}
            </div>
          </div>
          <div>
            <br></br>
            <div className='flex flex-row'>
              <Link href='/reports'>
                <div className='w-content rounded-full bg-black px-4 py-2 font-bold text-white'>
                  All Financials
                </div>
              </Link>
            </div>
          </div>
        </div>
        <br></br>
        {/* Budgets */}
        <div className='container mx-auto px-4 md:px-0'>
          <h2 className=''>
            <Link href='/budgets'>
              <span className='pt-8 pb-4 dark:text-white'>Budgets</span>
            </Link>
          </h2>
          <div className=' hidden grid-cols-3 gap-x-4 gap-y-4 sm:grid md:grid-cols-4 lg:grid-cols-5'>
            {budgets.slice(0, 5).map((eachaudit: any, key) => (
              <BigCard
                key={key}
                link={`${eachaudit.link}`}
                image={eachaudit.image}
                year={eachaudit.year}
                dept={titleCase(eachaudit.dept)}
                name={eachaudit.name}
              />
            ))}
          </div>

          <div>
            <div className='rounded-lg  sm:hidden'>
              {budgets.slice(0, 5).map((eachaudit: any, key: number) => (
                <LineCard
                  key={key}
                  link={`${eachaudit.link}`}
                  image={eachaudit.image}
                  year={eachaudit.year}
                  dept={titleCase(eachaudit.dept)}
                  name={eachaudit.name}
                />
              ))}
            </div>
          </div>
          <div>
            <div className='flex flex-row'>
              <Link href='/budgets' target='_blank' rel='noreferrer'>
                <div className='w-content rounded-full bg-black px-4 py-2 font-bold text-white'>
                  All Budgets
                </div>
                <br></br>
              </Link>
            </div>
          </div>
        </div>
        <br></br>
        {/* Data stories list below */}
        <div className='container mx-auto px-4 md:px-0'>
          <h2 className=''>
            <Link href='/data'>
              <span className='pt-8 pb-4 dark:text-white'>
                Data Stories & Map
              </span>
            </Link>
          </h2>
          <div className=' hidden grid-cols-3 gap-x-4 gap-y-4 sm:grid md:grid-cols-4 lg:grid-cols-5'>
            {data.slice(0, 5).map((eachaudit: any, key) => (
              <BigCard
                key={key}
                link={`${eachaudit.link}`}
                image={eachaudit.image}
                year={eachaudit.year}
                dept={titleCase(eachaudit.dept)}
                name={eachaudit.name}
              />
            ))}
          </div>

          <div>
            <div className='rounded-lg  sm:hidden'>
              {data.slice(0, 5).map((eachaudit: any, key: number) => (
                <LineCard
                  key={key}
                  link={`${eachaudit.link}`}
                  image={eachaudit.image}
                  year={eachaudit.year}
                  dept={titleCase(eachaudit.dept)}
                  name={eachaudit.name}
                />
              ))}
            </div>
          </div>
          <div>
            <div className='flex flex-row'>
              <Link href='/data' target='_blank' rel='noreferrer'>
                <div className='w-content pl-= mt-5 rounded-full bg-black px-4 py-2 font-bold text-white'>
                  All Data
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const newaudits = audits.slice(0, 7).map((eachItem: any) => {
    delete eachItem.textofpage;
    delete eachItem.pdflink;
    return eachItem;
  });
  // By returning {props: {posts} }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      newaudits,
    },
  };
}
