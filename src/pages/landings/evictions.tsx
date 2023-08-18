import * as React from 'react';

import Navbar from '@/components/Navbar';

export default function Evictions() {
  return (
    <>
      <Navbar />
      <center>
        <div className='mx-2 flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl'>
          <h2 className='pt-8 pb-4 text-center dark:text-white'>
            Eviction Notices (February - July 2023)
          </h2>
        </div>
        <div className='dark:text-white' style={{fontFamily: 'Helvetica'}}>
          <h3
            className='mb-12'
          >
            <b>Summary and Analysis</b>
          </h3>
        </div>
        <div className='dark:text-white' style={{fontFamily: 'Helvetica'}}> 
          <h4
            className='mb-4'
          >
            <b>Number of Eviction Notices</b>
          </h4>
        </div>
        <div className='dark:text-white' style={{fontFamily: 'Helvetica'}}>
          <p
            className='mb-4'
          >
            From the start of the filing requirement on 1/27/2023 to 7/31/2023,
            LAHD has received <b>39,766</b> eviction notices.
          </p>
          <p
            className='mb-3'
          >
            Of the 39,677 eviction notices:
          </p>
          <p
            className='mb-10'
          >
            &bull; <b>39,631</b> were for at-fault evictions (96% were for
            non-payment of rent)
          </p>
        </div>
        <div className='mb-16'>
          {' '}
          <img
            src='/images/evictions/notices.png'
            width='500'
            height='750'
            alt='Bar graph showing the Number of Eviction Notices filed with the City from February 2023 to July 2023. February 2023: 3945, March 2023: 6789, April 2023: 8339, May 2023: 7999, June 2023: 6660, July 2023: 5910'
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
            src='/images/evictions/cd-bargraph.png'
            width='600'
            height='800'
            alt='Bar graph showing the Number of Eviction Notices filed with the City by City Council District (CD).  CD1: 2819, CD2: 2297, CD3: 3301, CD4: 2532, CD5: 3857, CD6: 1684, CD7: 607, CD8: 1184, CD9: 828, CD10: 3697, CD11: 2700, CD12: 1492, CD13: 5246, CD14: 5819, CD15: 1016'
          />
        </div>
        <div className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
          <h4 className='mb-4'>
            <b>Zip Code</b>
          </h4>
        </div>
        <div className='mb-12'>
          {' '}
          <img
            src='/images/evictions/zipcode.png'
            width='500'
            height='800'
            alt='Table listing the top 20 Zip Codes with the highest number of eviction notices filed with the City.  First column lists the Zip Codes, second column lists the community or communities in the Zip Code, and the third column lists the number of eviction notices.  90028-Hollywood: 2923, 90036-Fairfax: 2228, 90015-Downtown LA/South Park: 1635, 90014-Downtown LA/Jewelry District: 1281, 90012-Downtown LA/Chinatown: 1272, 91367-Woodland Hills: 1265, 90005-Koreatown/Mid-Wilshire: 1178, 90017-Westlake: 1033, 91601-North Hollywood: 1023, 90020-Koreatown/Mid-Wilshire: 965, 90013-Downtown LA/Skid Row: 903, 90004-Koreatown/Mid-Wilshire: 850, 90057-Westlake: 759, 91303-Canoga Park: 747, 90046-Hollywood: 715, 90006-Koreatown/Pico: 703, 90045-Westchester: 532, 90038-Hollywood: 523, 91325-Northridge: 517, 91335-Reseda: 504 '
          />
        </div>
        <div
          className='mb-16 dark:text-white'
          style={{ fontFamily: 'Helvetica' }}
        >
          <p className='mb-4'>
            The table above shows the top 20 Zip Codes with the highest number
            of eviction notices filed with the City.
          </p>
          <p className='mb-4'>
            The highest number of eviction notices filed occurred in{' '}
            <b>90028</b> with 2,923 followed by <b>90036</b> with 2,228.
          </p>
        </div>
        <div className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
          <h4 className='mb-4'>
            <b>Rent Owed</b>
          </h4>
          <p className='mb-4'>
            In total, the amount of rent owed, as provided by the landlords
            submitting the eviction notices totals <b>$155,741,112.88</b>
          </p>
        </div>
        <div className='mb-16'>
          {' '}
          <img
            src='/images/evictions/rent-owed.png'
            width='500'
            height='800'
            alt='Table shows the amount of rent owed for non-payment of rent separated into 4 groups.  The table has three columns.  First column is the Amount of rent owed in dollars.  Second column is the number of eviction notices issued per grouping.  And the third column is the total amount of rent owed per grouping. For $0 to $500 in rent owed, there were 1,782 eviction notices issued and a total of $124,840.83 owed.  For $500 to $1000 in rent owed, there are 840 eviction notices issued and owed a total of $667,363.84.  For $1000 to $2000 in rent owed, 7,398 eviction notices were issued and owed a total of $12,164,033.24.  For $2000 to $3000 in rent owed, 12,434 units received eviction notices for a total of $30,862,311.67.  For $3000 or more in rent owed, 15,796 units received eviction notices for a total of $111,325,303.91.  In total 38,250 eviction notices were issued for non-payment of rent totaling $155,143,853,49.'
          />
        </div>
        <div className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
          <h4 className='mb-4'>
            <b>Notice Types</b>
          </h4>
          <p>
            When served with an eviction, tenants are given a deadline to either
          </p>
          <p>
            pay rent owed or move out ("pay or quit") or to fix an issue or move
            out ("perform or quit").
          </p>
          <p>
            Other notices will only give a deadline to move out such as 30-day
            notices.
          </p>
        </div>
        <div className='mb-16'>
          {' '}
          <img
            src='/images/evictions/notice-types.png'
            width='400'
            height='750'
            alt='Table shows the number of eviction notices by the type of notices issued and the percentage issued.  First column lists the Notice Type (number of days to “pay or quit” or “perform or quit” or days given to move out.  For 3 Day notices, 37,080 notices were issued and make up 93.56% of total notices issued. Second is 30 Day notices with 2,014 issued and make up 5.08% of all notices.  459 were issued for 10 Day notices (1.16%).  62 issued for 60-day notices (0.16%).  15 issued for 90-day notices (0.04%).  And lastly 1 was issued for a 15-day notice (0.003%).'
          />
        </div>
        <div className='dark:text-white' style={{ fontFamily: 'Helvetica' }}>
          <h4 className='mb-4'>
            <b>Tenant Protection Deadlines</b>
          </h4>
          <div className='mb-4'>
            <p>
              &bull; <b>August 1, 2023</b> – rent owed from March 1, 2020 to
              August 31, 2020 is due.
            </p>
            <p>
              If the Declaration of COVID-19-Related Financial Distress form was
              returned to the landlord within 15 days of rent being due,
            </p>
            <p>they cannot be evicted for nonpayment of rent.</p>
          </div>
          <div className='mb-4'>
            <p>
              &bull; <b>February 1, 2024</b> – rent owed from October 1, 2021 to
              January 31, 2023 is due.
            </p>
            <p>
              If a tenant returned the Declaration of COVID-19-Related Financial
              Distress form to the landlord
            </p>
            <p>
              within 15 days of rent being due AND paid 25% of rent owed from
              this period,
            </p>
            <p>they cannot be evicted for nonpayment of rent.</p>
          </div>
          <div className='mb-4'>
            <p>
              &bull; However, since <b>March 27, 2023</b>, landlords may not
              evict a tenant who falls behind in rent
            </p>
            <p>
              unless the tenant owes an amount higher than the{' '}
              <b>Fair Market Rent (FMR)</b>.
            </p>
            <p>The FMR depends on the bedroom size of the rental unit.</p>
          </div>
        </div>
      </center>
    </>
  );
}
