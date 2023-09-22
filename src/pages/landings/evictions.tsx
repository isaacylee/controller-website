import * as React from 'react';

import Navbar from '@/components/Navbar';

export default function Evictions() {
  return (
    <>
      <Navbar />
      <div className='container mx-auto px-4 sm:container lg:max-w-3xl xl:max-w-4xl'>
        <center>
          <div className='mx-2 flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl'>
            <h2 className='pt-8 pb-4 text-center dark:text-white'>
              Eviction Notices (February - August 2023)
            </h2>
          </div>
          <div className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
            <h3 className='mb-12'>
              <b>Summary and Analysis</b>
            </h3>
          </div>
          <div className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
            <p className='mb-4'>
              Last month, we said that there were nearly 40,000 eviction notices
              from February to July 2023 filed in the City of LA. We have
              received updated data from the Los Angeles Housing Department
              (LAHD) through the month of August 2023 and the data reveals that
              from February to August 2023, LAHD has received a total of{' '}
              <b>50,000</b> eviction notices. <b>5,575</b> notices were filed
              for the month of August and <b>4,748</b> are part of updated
              numbers for February to July from eviction notices received via
              mail.
            </p>
            <ul className='mb-10'>
              <li>
                &bull; <b>50,000 eviction notices were filed</b>
              </li>
              <li>
                &bull;{' '}
                <b>96.1% of evictions notices were for "non-payment of rent"</b>
              </li>
              <li>
                &bull; <b>91% came with a 3-day notice</b>
              </li>
              <li>
                &bull; <b>$186.5M accumulated rent owed</b>
              </li>
            </ul>
          </div>
          <div className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
            <h4 className='mb-4'>
              <b>Number of Eviction Notices</b>
            </h4>
          </div>
          <div className='mb-16'>
            {' '}
            <img
              src='/images/evictions/notices-total-feb-aug.png'
              width='600'
              height='800'
              alt='Bar graph showing the Number of Eviction Notices filed with the City from February 2023 to July 2023. February 2023: 4952, March 2023: 7263, April 2023: 9858, May 2023: 9353, June 2023: 6975, July 2023: 5971, August 2023: 5575.'
            />
          </div>
        </center>
        <center>
          <div>
            <h4
              className='mb-4 dark:text-white'
              style={{ fontFamily: 'Helvetica' }}
            >
              <b>Council District</b>
            </h4>
          </div>
          <div className='mb-16'>
            {' '}
            <img
              src='/images/evictions/notices-cd-feb-aug.png'
              width='600'
              height='800'
              alt='Bar graph showing the Number of Eviction Notices filed with the City by City Council District (CD).  CD1: 4127, CD2: 3123, CD3: 4616, CD4: 3248, CD5: 4474, CD6: 2255, CD7: 641, CD8: 1508, CD9: 1930, CD10: 4507, CD11: 3373, CD12: 1373, CD13: 6445, CD14: 6798, CD15: 1323.'
            />
          </div>
          <div className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
            <h4 className='mb-4'>
              <b>Top 20 Zip Codes with highest number of eviction notices</b>
            </h4>
          </div>
          <div className='mb-12'>
            {' '}
            <img
              src='/images/evictions/notices-zip-feb-aug.png'
              width='500'
              height='800'
              alt='Table listing the top 20 Zip Codes with the highest number of eviction notices filed with the City.  First column lists the Zip Codes, second column lists the community or communities in the Zip Code, and the third column lists the number of eviction notices.  90028-Hollywood: 3585, 90036-Farifax: 2458, 91367-Woodland Hills: 2099, 90017-Westlake: 2076, 90014-Downtown LA/Jewelry District: 1590, 90012-Downtown LA/Chinatown: 1572, 90005-Koreatown/Mid-Wilshire: 1545, 90015-Downtown LA/South Park: 1447, 91601-North Hollywood: 1398, 90020-Koreatown/Mid-Wilshire: 1284, 90007-South LA: 1209, 90004-Koreatown/Mid-Wilshire: 1120, 90013-Downtown LA/Skid Row: 1049, 90057-Westlake: 1001, 91303-Canoga Park: 844, 90046-Hollywood: 843, 90045-Westchester: 767, 91406-Van Nuys: 639, 91335-Reseda: 624, 90038-Hollywood: 595. '
            />
          </div>
          <div
            className='mb-16 dark:text-white'
            style={{ fontFamily: 'Helvetica' }}
          >
            <p className='mb-4'>
              The table above shows the top 20 Zip Codes with the highest number
              of eviction notices filed with the City from February to August
              2023.
            </p>
            <p className='mb-4'>
              Units located within <b>90028</b> (Hollywood area) had the highest
              number of eviction notices filed with <b>3,585</b> followed by{' '}
              <b>90036</b> (Fairfax area) with <b>2,458</b>.
            </p>
          </div>
          <div className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
            <h4 className='mb-4'>
              <b>Rent Owed</b>
            </h4>
            <p className='mb-4'>
              The total amount of rent owed due to <b>Non-Payment of Rent</b> is{' '}
              <b>$186,491,100.99</b>.
            </p>
          </div>
          <div className='mb-16'>
            {' '}
            <img
              src='/images/evictions/rent-owed-feb-aug.png'
              width='500'
              height='800'
              alt='Table shows the amount of rent owed for non-payment of rent separated into 4 groups.  The table has three columns.  First column is the Amount of rent owed in dollars.  Second column is the number of eviction notices issued per grouping.  And the third column is the total amount of rent owed per grouping. For $0 to $500 in rent owed, there were 2,028 eviction notices issued and a total of $163,918.55 owed.  For $500 to $1000 in rent owed, there are 1,277 eviction notices issued and owed a total of $1,025,651.13.  For $1000 to $2000 in rent owed, 9,776 eviction notices were issued and owed a total of $15,830,646.80.  For $2000 to $3000 in rent owed, 15,652 units received eviction notices for a total of $38,892,957.69.  For $3000 or more in rent owed, 19,325 units received eviction notices for a total of $130,577,926.81.  In total 48,058 eviction notices were issued for non-payment of rent totaling $186,491,100.99.'
            />
          </div>
          <div className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
            <h4 className='mb-4'>
              <b>Fair Market Rent</b>
            </h4>
            <div className='mb-4'>
              <p className='mb-4'>
                The <b>Just Cause Ordinance (JCO)</b> contains a provision where
                a landlord can evict a tenant only if the amount due{' '}
                <u>exceeds</u> one month of fair market rent for the Los Angeles
                metro area.
              </p>
              <p>
                <b>6,062</b> eviction notices were filed where the amount of
                rent owed is below the Fair Market Rent (FMR) Limit.
              </p>
            </div>
          </div>
          <div className='mb-16'>
            {' '}
            <img
              src='/images/evictions/fair-market-feb-aug.png'
              width='500'
              height='800'
              alt='Table shows the number of eviction notices filed with rent owed amounts that do not exceed the Fair Market Rent amounts.  The table has three columns.  First column is bedroom size of the unit. Second column is the Fair Market Rent (FMR) limit. The third column is the number of eviction notices issued for each grouping.  For Efficiency sized units with an FMR of $1,534, 822 eviction notices were issued.  For 1-bedroom units with an FMR of $1,747, 2,514 eviction notices were issued.  For 2-bedroom units with an FMR of $2,222, 2,070 eviction notices were issued.  For 3-bedroom units with an FMR of $2,888, 477 eviction notices were issued.  And for 4-bedroom units with an FMR of $3,170, 179 eviction notices were issued.  In total, 6,602 units received eviction notices where their rent owed was below the Fair Market Rent.'
            />
          </div>
          <div className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
            <h4 className='mb-4'>
              <b>Notice Types</b>
            </h4>
            <div className='mb-4'>
              <p>
                When served with an eviction, tenants are given a deadline to
                either pay rent owed or move out ("pay or quit") or to fix an
                issue or move out ("perform or quit"). Other notices will only
                give a deadline to move out (such as 30-day notices).
              </p>
            </div>
          </div>
          <div className='mb-16'>
            {' '}
            <img
              src='/images/evictions/notice-type-feb-aug.png'
              width='500'
              height='800'
              alt='Table shows the number of eviction notices by the type of notices issued and the percentage issued.  First column lists the Notice Type (number of days to “pay or quit” or “perform or quit” or days given to move out.  For 3 Day notices, 45,547 notices were issued and make up 91.09% of total notices issued. Second is 30 Day notices with 3,648 issued and make up 7.30% of all notices.  624 were issued for 10 Day notices (1.25%).  146 issued for 60-day notices (0.29%).  17 issued for 90-day notices (0.03%).  11 was issued for a 15-day notice (0.02%).  And 7 were issued for 120-day notices (0.01%).'
            />
          </div>
          <div className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
            <h4 className='mb-4'>
              <b>Tenant Protection Deadlines</b>
            </h4>
            <ul>
              <li className='mb-4'>
                &bull; <b>August 1, 2023</b> – rent owed from March 1, 2020 to
                August 31, 2020 is due. If the Declaration of COVID-19-Related
                Financial Distress form was returned to the landlord within 15
                days of rent being due, they cannot be evicted for nonpayment of
                rent.
              </li>
              <li className='mb-4'>
                &bull; <b>February 1, 2024</b> – rent owed from October 1, 2021
                to January 31, 2023 is due. If a tenant returned the Declaration
                of COVID-19-Related Financial Distress form to the landlord
                within 15 days of rent being due AND paid 25% of rent owed from
                this period, they cannot be evicted for nonpayment of rent.
              </li>
              <li className='mb-4'>
                &bull; However, since <b>March 27, 2023</b>, landlords may not
                evict a tenant who falls behind in rent unless the tenant owes
                an amount higher than the <b>Fair Market Rent (FMR)</b>. The FMR
                depends on the bedroom size of the rental unit.
              </li>
              <li className='mb-4'>
                &bull; If an eviction notice is not provided to LAHD, a tenant
                may raise an affirmative defense in an Unlawful Detainer case.
              </li>
            </ul>
          </div>
        </center>
      </div>
    </>
  );
}
