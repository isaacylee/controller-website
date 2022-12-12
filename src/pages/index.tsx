import * as React from 'react';

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

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Layout>
        {/* <Seo templateTitle='Home' /> */}

        <Seo />

        <div className='relative bg-dark px-4 py-8 text-base text-sm md:px-32 md:px-0 md:py-32 md:text-white'>
          <div className='background-1'>
            <div className='z-10 mx-auto max-w-7xl text-white'>
              <h2>Kenneth Mejia</h2>
              <h2>Controller of Los Angeles</h2>
            </div>
          </div>
        </div>

        <div className='container px-4 py-8  md:max-w-sm md:px-0 lg:mx-16'></div>
      </Layout>
    </>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      audits,
    },
  };
}
