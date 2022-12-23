import * as React from 'react';

import '@/styles/aboutstyles.module.css';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';

import { data } from './../data.json';

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

export default function Data(props: any) {
  return (
    <>
      <Navbar />

      <Layout>
        {/* <Seo templateTitle='Home' /> */}

        <Seo />

        <div className='mx-2 flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl'>
          <h1 className='pt-8 pb-4 dark:text-white'>Data Stories & Map</h1>

          <div className='md:hidden'>
            {data.map((eachaudit: any, eachauditnum: number) => (
              <div
                key={eachauditnum}
                className='mb-2 rounded-lg bg-gray-200 px-2 py-2'
              >
                <a href={`${eachaudit.link}`}>
                  <p>
                    {eachaudit.year} | <span>{eachaudit.dept}</span>
                  </p>
                  <p className='font-bold'>{eachaudit.name}</p>
                </a>
              </div>
            ))}
          </div>

          <div className='hidden md:block'>
            <div className='grid grid-cols-3 gap-x-6 gap-y-4 lg:grid-cols-3'>
              {data.map((eachaudit: any, eachauditnum: number) => (
                <div
                  key={eachauditnum}
                  className='mb-2 w-full max-w-xs rounded-lg bg-gray-200'
                >
                  <a
                    href={`${eachaudit.link}`}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img src={eachaudit.image} className='w-full'></img>
                    <div className=' px-2 py-2'>
                      <p>
                        {eachaudit.year} | <span>{eachaudit.dept}</span>
                      </p>
                      <p className='font-bold'>{eachaudit.name}</p>
                    </div>
                  </a>
                </div>
              ))}
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

  const newaudits = data.map((eachItem: any) => {
    delete eachItem.textofpage;
    delete eachItem.pdflink;
    return eachItem;
  });
  return {
    props: {
      newaudits,
    },
  };
}
