// eslint-disable-next-line simple-import-sort/imports
import Link from 'next/link';
import * as React from 'react';
import { titleCase } from 'true-case';

import { data } from '@/data.json';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';
import { SocialPageSeries } from '@/components/SocialPageSeries';

import { audits } from '@/auditsindex.json';
import { finance } from '@/financeindex.json';
import { budget } from '@/budget.json';
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
            <div className='flex flex-row'>
              <Link href='/audits'>
                <div className='w-content rounded-full bg-black px-4 py-2 font-bold text-white'>
                  All Audits
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* Budgets */}
        <div className='container mx-auto px-4 md:px-0'>
          <h2 className=''>
            <Link href='/budgets'>
              <span className='pt-8 pb-4 dark:text-white'>Budgets</span>
            </Link>
          </h2>
          <div className=' hidden grid-cols-3 gap-x-4 gap-y-4 sm:grid md:grid-cols-4 lg:grid-cols-5'>
            {budget.slice(0, 5).map((eachaudit: any, key: number) => (
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
              {budget.slice(0, 5).map((eachitem: any, key: number) => (
                <LineCard
                  key={key}
                  link={`${eachitem.link}`}
                  image={eachitem.image}
                  year={eachitem.year}
                  dept={titleCase(eachitem.dept)}
                  name={eachitem.name}
                />
              ))}
            </div>
          </div>
          <div>
            <div className='flex flex-row'>
              <Link href='/data' target='_blank' rel='noreferrer'>
                <div className='w-content rounded-full bg-black px-4 py-2 font-bold text-white'>
                  All Budgets
                </div>
              </Link>
            </div>
          </div>
        </div>

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
                <div className='w-content rounded-full bg-black px-4 py-2 font-bold text-white'>
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
  const newaudits = audits.slice(0, 7);
  // By returning {props: {posts} }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      newaudits,
    },
  };
}
