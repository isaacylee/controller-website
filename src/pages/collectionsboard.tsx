import Link from 'next/link';
import * as React from 'react';

import '@/styles/aboutstyles.module.css';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';

import collections from '@/collectionsboard.json';

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

/*

Copied from the original site using this 
https://gist.github.com/kylerchin/cecf448ee67c57d3b05b4b25593d0c59
*/

export default function CollectionsBoard(props: any) {
  return (
    <>
      <Navbar />

      <Layout>
        {/* <Seo templateTitle='Home' /> */}

        <Seo
          title='Collections Board of Review'
          description='View Minutes and Agendas of Meetings'
        />

        <div className='mx-2 flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl'>
          <h1 className='py-2 dark:text-white sm:pt-4 sm:pb-2'>
            Collections Board of Review
          </h1>

          <br />
          <p className='dark:text-white'>
            The Los Angeles Administrative Code Section 5.182 establishes a
            Collections Board of Review (Board) to review uncollectible accounts
            of City departments, bureaus and offices. The Board consists of the
            Controller, Director of Finance and the City Administrative Officer,
            or duly appointed representatives of each. The Controller is the
            Chair of the Board. The Board is authorized to approve write off of
            uncollectible accounts when the amount involved is less than $5,000.
            If the uncollectible account is $5,000 or over, the Board may
            recommend write off to the City Council. The Board generally meets
            on the last Wednesday of the months of January, April, July and
            October at 9:00 am in the Controller’s office.
          </p>

          <div className=' '>
            <table>
              <tbody>
                {collections.map((eachmeeting: any, key: number) => (
                  <tr className='dark:text-white' key={key}>
                    <td>{eachmeeting.date}</td>

                    <td>
                      <Link href={eachmeeting.agenda}>Agenda</Link>
                    </td>

                    {eachmeeting.minutes ? (
                      <td>
                        <td>
                          <Link href={eachmeeting.minutes}>Minutes</Link>
                        </td>
                      </td>
                    ) : (
                      <td></td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </>
  );
}
