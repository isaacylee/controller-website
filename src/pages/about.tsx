import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
 
import Seo from '@/components/Seo';
import Image from 'next/image';
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
            <div className='max-w-2md z-10 mx-auto text-white'>
              <div className='flex flex-row'>
                <div className='my-auto'>
                  {' '}
                  <h2>About Kenneth Mejia</h2>
                  {/* <h2>Controller of Los Angeles</h2> */}
                </div>
               
           <div className="flex right-20 top-10 left-118 space-x-3 md:absolute md:flex">
           {/* flex ml-10 justify-center space-x-2 md:flex-row */}
 
           {/* facebook */}
           <a href=" https://www.facebook.com/lacontroller" target="_blank">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-7 h-7" fill="color: #1877f2;"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
          </a>

           {/*  instagram */ }
           <a href=" https://www.instagram.com/lacontroller" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-7 h-7" fill="color: #c13584;">
              
              <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
          </a>
          {/* tiktok */ }
        <a href=" https://www.tiktok.com/@lacontroller" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 448 512" className="w-7 h-7" fill="color: #6a76ac;">
            <path fill="currentColor" 
            d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
            </svg>
            </a>

        {/* twitter */ }
        <a href="https://twitter.com/lacontroller" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-7 h-7" fill="color: #1da1f2;"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
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

        <div className='timeline'>
          <div className='left container'>
            <div className='content'>
              <h2>
                I was born in Los Angeles and raised in the San Fernando Valley
              </h2>
              <p>
                With my three siblings in a Catholic household. Like many other
                immigrant families, my parents immigrated to the United States
                from the Philippines in search of better opportunities.
                Unfortunately when I was 7, my parents got divorced and I was
                raised by my mother. She worked from morning until night as a
                registered nurse to put food on the table and a roof over our
                heads. She even beat cancer twice and to this day, she cares for
                her elder siblings and grandchildren. My upbringing in a working
                class neighborhood in an immigrant single-mother household would
                eventually shape most of my life to work just as hard as her and
                to care for others.
              </p>
            </div>
          </div>
          <div className='right container'>
            <div className='content'>
              <div className='left-120 bottom-80 float-left md:absolute '>
                <img src='https://uploads-ssl.webflow.com/62703f612bf4b6c4cf204b98/627838cf1a089f68031678a2_kenneth-family-desktop-crop-p-500.png' />
              </div>

              <h2>2010</h2>
              <p>
                I graduated from Woodbury University with a Bachelor’s of
                Science in Accounting, and soon after, I received my Certified
                Public Accountant (CPA) license in the state of California
                working as an auditor for one of the big 4 accounting firms. I
                worked 60 hours a week auditing multi-million and billion-dollar
                private and public companies to ensure that their financial
                statements were in accordance with Generally Accepted Accounting
                Principles (GAAP). My audit experience taught me how to dig into
                the details, know where everything is, and ensure that every
                financial transaction had support behind it.
              </p>
            </div>
          </div>
          <div className='left container'>
            <div className='content'>
              <div className='h-70 -bottom-10 left-0 w-96 md:absolute'>
                <img src='https://uploads-ssl.webflow.com/62703f612bf4b6c4cf204b98/62783ca09c10c930020cf312_kenneth-toydrive.png' />
              </div>
            </div>
            <h2>2016</h2>
            <p>
              Co-funded a community service group While working as an auditor
              and accountant in LA, I would regularly see the poor living
              conditions of people living on the streets. Our unhoused
              population kept increasing every year and many working class
              families were a rent increase away from losing their homes. This
              prompted me in 2016 to co-found a community service group called
              “We Can Make a Difference – LA” where we provide essential
              supplies to unhoused communities and low-income families in Skid
              Row, Westlake, Koreatown, and Echo Park. We also fundraised for
              tenants fighting rent increases or evictions, and organized
              multiple environmental community clean ups throughout LA. Joined
              the LA Tenants Union In 2016, I joined the LA Tenants Union to
              organize and fight alongside tenants experiencing immoral rent
              increases, unjust evictions, and uninhabitable living conditions.
              The tenants had great victories over the years, such as organizing
              the largest rent strike in LA’s Westlake neighborhood, where the
              landlord refused to repair units to habitable conditions and then
              tried to evict striking tenants (she eventually dropped all the
              cases). Other victories include LA Tenants Union successfully
              organizing against unjust rent increases in Boyle Heights, where
              tenants received an $800-per-month rent increase.
            </p>
          </div>
          <div className='right container'>
            <div className='content'>
              <div className=' bottom-80 left-1 float-right md:absolute md:py-60 '>
                <img src='https://uploads-ssl.webflow.com/62703f612bf4b6c4cf204b98/62784e4d83e32b114484c5d6_kenneth-latu-left.png' />
              </div>
              <h2>2017-2018</h2>
              <p>
                Neighborhood Council Board Member From 2017 to 2018, I was a
                Neighborhood Council Board Member in Koreatown where I fought
                for working class families by advocating for tenant protections,
                affordable housing, and housing and shelter for the unhoused. I
                had the opportunity to represent my Neighborhood Council and
                Koreatown constituents when I advocated for tenant protections
                to the LA City Council. As a result of our advocacy, the City of
                Los Angeles endorsed the state measure to allow California
                cities to enact rent control. During my time organizing with We
                Can Make a Difference – LA, LA Tenants Union, and other housing
                advocacy groups, I found that our elected officials let us down
                constantly. While they refuse to pass policies that could help
                vulnerable Angelenos, volunteer and community organizations are
                doing their jobs for them. It seemed as though our resources are
                being used and spent elsewhere while critical issues like
                housing, homelessness, and the environment are forgotten.
              </p>
            </div>
          </div>

          <div className='content'>
            <div className='left-120 bottom-0 float-right md:absolute md:flex '>
              <img src='https://uploads-ssl.webflow.com/62703f612bf4b6c4cf204b98/6278582ccc3db484d87844ac_kenneth-cityhall-right-clip.png' />
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

  // By returning {props: {posts} }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      audits,
    },
  };
}
