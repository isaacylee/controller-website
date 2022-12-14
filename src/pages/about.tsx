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
