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
      <Navbar />

      <Layout>
        {/* <Seo templateTitle='Home' /> */}

        <Seo />

        <div className='mx-2 flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl'>
          <h1 className='py-2 dark:text-white sm:pt-4 sm:pb-2'>Budgets</h1>

          <div className='grid grid-cols-3 gap-x-3 gap-y-3 sm:flex sm:flex-row sm:flex-wrap '>
            {budget.map((eachbudget: any, key: number) => (
              <Link href={`${eachbudget.link}`} key={key}>
                <div className='rounded-full bg-[#41ffca] py-2 px-4 font-semibold text-black dark:text-black'>
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
