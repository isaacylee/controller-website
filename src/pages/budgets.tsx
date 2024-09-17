import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';

import '@/styles/aboutstyles.module.css';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';

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

export default function Budgets(props: any) {
  return (
    <>
      <Head>
        <meta property='og:title' content='Budgets' />
        <meta
          property='og:description'
          content='View & Download City of Los Angeles Adopted Budgets'
        />
        <meta
          property='og:url'
          content='https://www.controller.lacity.gov/budgets'
        />
        <meta
          property='og:image'
          content='https://www.controller.lacity.gov/images/budget2024-25.png'
        />
        <meta property='og:type' content='website' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Budgets' />
        <meta
          name='twitter:description'
          content='View & Download City of Los Angeles Adopted Budgets'
        />
        <meta
          name='twitter:image'
          content='https://www.example.com/images/budget2024-25.png'
        />
      </Head>
      <Navbar />

      <Layout>
        {/* <Seo templateTitle='Home' /> */}

        <Seo
          title='Budgets'
          description='View & Download City of Los Angeles Adopted Budgets'
        />

        <div className='mx-2 flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl'>
          <h1 className='py-2 dark:text-white sm:pb-2 sm:pt-4'>Budgets</h1>

          <div className='grid grid-cols-3 gap-x-3 gap-y-3 sm:flex sm:flex-row sm:flex-wrap '>
            {budget.map((eachbudget: any, key: number) => (
              <Link href={`${eachbudget.link}`} key={key}>
                <div className='rounded-full bg-[#41ffca] px-4 py-2 font-semibold text-black dark:text-black'>
                  <p className='mx-auto'>{eachbudget.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
