import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import CityRevenue from '@/components/pafr22visualise/cityrevenue';
import { Credit } from '@/components/pafr22visualise/credit';
import Seo from '@/components/Seo';
export default function pafr22(props: any) {
  return (
    <>
      <Navbar />
      <Seo
        title='Popular Annual Financial Report FY22'
        description='Report & Visualizations of Expenditures, Revenues, and Debt for the City of Los Angeles'
      />
      <Layout>
        <div className='flex flex-col py-2 dark:text-white'>
          <div className='container mx-0 px-2 pb-3 pt-5 dark:text-gray-100  sm:px-4 lg:mx-auto lg:max-w-7xl'>
            {' '}
            <h1 className='2xl dark:text-white'>
              Popular Annual Financial Report FY22
            </h1>{' '}
            <br />
            <h2>About Popular Annual Financial Reporting</h2>
            <p className='mt-2  lg:max-w-5xl'>
              The Government Finance Officers Association of the United States
              and Canada (GFOA) has given an Award for Outstanding Achievement
              in Popular Annual Financial Reporting to the City of Los Angeles
              for its Popular Annual Financial Report for the fiscal year ended
              June 30, 2021. The Award for Outstanding Achievement in Popular
              Annual Financial Reporting is a prestigious national award
              recognizing conformance with the highest standards for preparation
              of state and local government popular reports.
              <br />
              To receive the award, a government unit must publish a Popular
              Annual Financial Report, whose contents conform to program
              standards of creativity, presentation, understandability, and
              reader appeal. The award is valid for a period of one year only.
              We believe our current report continues to conform to the Popular
              Annual Financial Reporting requirements, and we are submitting it
              to GFOA to determine its eligibility for another Award.
            </p>
            <h2 className='mt-3'>Local Economy</h2>
            <p className='mt-2 lg:max-w-5xl'>
              The City and its surrounding metropolitan region feature
              incredible diversity in both population and the economy. Tourism
              and hospitality, professional and business services, international
              trade, entertainment production, and wholesale trade and logistics
              all contribute significantly to local employment. The Port of Los
              Angeles handles the largest volume of containerized cargo of all
              U.S. ports and ranks as number one in cargo value for U.S.
              waterborne foreign traffic. According to preliminary ACI
              statistics, in the calendar year 2021, Los Angeles International
              Airport (LAX) was the fifth busiest airport in the world in terms
              of total passengers and 8th busiest airport in the world in terms
              of total cargo metric tons.
              <br />
              <br />
              The passage of the federal American Rescue Plan Act (ARPA) in
              March 2021 significantly changed City’s fiscal outlook after the
              pandemic downturn. ARPA, which provided $1.3 billion in direct
              financial assistance to the City over the last two fiscal years
              helped fill the revenue gap and eliminated the need to dip into
              the reserves to balance the books.
              <br />
              <br />
              At the beginning of fiscal year 2022, as COVID-19 vaccine became
              widely available and the economy reopened, the unemployment in the
              City of Los Angeles began its steady decline from 7.2% in October
              2021 to 4.6 percent as of October 2022. With the improving economy
              throughout fiscal 2022, most economic sensitive revenue rebounded.
              The improvement in revenue along with the federal assistance
              allowed the City to close fiscal year 2022 in a strong financial
              position. While most revenue sources have remained stable during
              the earlier months of fiscal year 2023, the economic outlook for
              the remainder of the fiscal year remains uncertain. According to
              the University of California (UCLA) Anderson Forecast, the
              employment picture in California has evolved slightly in recent
              months as the three sectors of health care and social services,
              leisure and hospitality, and education have shown the largest
              gains in jobs. And despite the statewide gains in leisure and
              hospitality employment, the landscape for that sector remains
              difficult in the City of Los Angeles. Without increased employment
              gains in the hospitality and leisure sector, full economic
              recovery is expected to remain on a shallow trend. In addition,
              whether the economy slips into a recession or not depends largely
              on whether inflation continues to stay elevated, and any
              additional actions the Federal Reserve takes to bring down
              inflation.
              <br />
              <br />
              While the City is currently in a strong fiscal position,
              significant challenges lie ahead. The almost $2 billion in
              one-time revenue from the federal government available during the
              last two years is no longer available for future budgets. The City
              faces difficult decisions on how to continue the programming those
              funds made possible while simultaneously facing potential
              increased cost and lower receipts arising from the impact of
              rising interest rates. Higher mortgage interest rates have led to
              declining real estate sales volume and decreasing prices, which
              would impact documentary tax receipt, a key revenue source for the
              City. In its Second Financial Status Report issued on December 1,
              2022, the Chief Administrative Officer reported that declining
              sales have already resulted in $23 million in documentary transfer
              tax receipts shortfall during the first four months of fiscal year
              2023. Voters in the last election passed Measure ULA, which
              increases the tax to provide revenue. More worrisome is that sales
              volume is expected to continue to slide. According to the
              California Association of Realtors’ October 2022 forecast, sales
              volume is expected to decline by 7.2 percent and prices are
              expected to decrease by 8.8 percent in 2023. This would likely
              result in increasing monthly shortfalls and lower year-end
              documentary receipts. In addition, the increasing probability of a
              recession, the unresolved war abroad, global supply chain issues,
              and energy costs contribute to downward economic pressures which
              could negatively affect other economically sensitive revenue
              sources.
            </p>
            {/* Add Visual - Demographic and Economic Data */}
            {/* Add Visual - Principal Employers */}
          </div>
          <div className='container mx-0 px-2 pb-3 pt-5 dark:text-gray-100  sm:px-4 lg:mx-auto lg:max-w-7xl'>
            <h2 className='mt-3'>City Organization</h2>

            <p className='mt-2 lg:max-w-5xl'>
              The City operates under a Mayor-Council form of government. The
              Mayor supervises the administrative processes of the City and
              works with the City Council in matters relating to legislation,
              budget and finance. The 15-member City Council enacts ordinances,
              levies taxes, authorizes contracts and public improvements, adopts
              zoning and other land use contracts, and provides necessary
              resources for the budgetary departments and offices of the City.
              The City Controller and City Attorney are independently elected
              citywide.
              <br />
              <br />
              The City has 46 departments, bureaus, commissions and offices, 39
              of which have their operating funds annually budgeted by the City
              Council. The Department of Water and Power, Harbor Department, and
              the Department of Airports are publicly-owned entities under the
              control of boards appointed by the Mayor and confirmed by the City
              Council. Several other departments are fiscally independent or
              under the control of independent boards.
              <br />
              <br />
              Public services provided by the City include police, fire and
              paramedics, residential refuse collection and disposal, wastewater
              collection and treatment, street maintenance and traffic
              management, enforcement of building safety laws, libraries,
              recreation and parks, community development, housing and services
              for seniors, planning; two airports, harbor, power and water
              services, and the convention center. Performance data on some of
              these services is collected below in the “City Activities”
              section.
            </p>
            <br />

            <div className='mt-2 rounded-lg border-4 border-mejito bg-mejito bg-opacity-30 px-2 py-2 dark:bg-opacity-20 lg:max-w-5xl'>
              {/* Pick of sherlock killa of the left side insert here later */}
              <img
                src='/sherlockcorgi.png'
                className='float-left mb-1 mr-1 w-32'
              />
              <p>
                In the visualisations below, The Business Type Funds refers to
                proprietary departments, which operate the business-like
                activities of the government. Los Angeles's proprietary
                departments are the Department of Water and Power, Los Angeles
                World Airports, Convention Center, and the Harbor Department.
                These departments collect revenue directly from the users of
                their services.
                <br />
                <br />
                Government funds refer to the core functions of the city, such
                as Police, Fire, Transportation, Libraries, Rec & Parks, etc.
                This money comes from the general fund.
              </p>
            </div>
          </div>
          <div className='container mx-0 px-2 pb-3 pt-5 dark:text-gray-100  sm:px-4 lg:mx-auto lg:max-w-7xl'>
            <h1 className='mt-3'>Management's Discussion and Analysis</h1>

            <p className='mt-2 lg:max-w-5xl'>
              For the fiscal year that ended on June 30, 2022, total City
              revenues were $20.0 billion, an increase of 8.7% over the prior
              year. Expenses were $16.6 billion, 4.5% less than the prior year.
            </p>
          </div>

          <div className='container mx-0 px-4 pb-3 pt-3  dark:text-gray-100 lg:mx-auto lg:max-w-7xl'>
            <h3 className='mt-3'>FY 22 City Revenues $20.0 billion</h3>
            {/* Add Visual - City Revenues */}
            <CityRevenue />
          </div>
          <h3 className='mt-3'>Credit Ratings by Various Agencies over Time</h3>
          <Credit />
        </div>
      </Layout>
    </>
  );
}
