import { Chart, registerables } from 'chart.js';
import Image from 'next/image';

import Debt from '@/pages/reports/charts/Debt';
import Expenditures from '@/pages/reports/charts/Expenditures';
import Reserve from '@/pages/reports/charts/Reserve';
import Revenue from '@/pages/reports/charts/Revenue';
Chart.register(...registerables);

const Home = () => {
  const buttonStyle = {
    backgroundColor: '#41ffca',
    color: 'black',
    padding: '10px 20px',
    margin: '0 10px',
    textDecoration: 'none',
    borderRadius: '5px',
    display: 'inline-block',
  };

  const pdfLink =
    'https://firebasestorage.googleapis.com/v0/b/lacontroller-2b7de.appspot.com/o/FY2022-23%20Preliminary%20Financial%20Report_FINAL.pdf?alt=media&token=354c5120-c47a-4774-aeab-abb40178ef77'; // Replace with the actual PDF link

  const coverLetterText = `
    Cover Letter
    October 18, 2023

    Honorable Karen Bass, Mayor
    Honorable Members of the Los Angeles City Council

  Re: Preliminary Financial Report for Fiscal Year 2022-2023

  Each year at this time, the Controller’s Office submits the Preliminary Financial Report
  (PFR) to review the City of Los Angeles’ financials for the prior fiscal year. Our report is
  the City’s primary look back at municipal finances after the close of the fiscal year,
  providing an overview and analysis of revenues, expenditures, reserves and bonded
  indebtedness. In January 2024, the Controller’s Office will follow up by issuing the
  Annual Comprehensive Financial Report for 2022-2023, which is prepared in
  accordance with Generally Accepted Accounting Principles and audited by an
  independent firm of certified public accountants.

  Accompanying this report are online interactive visualizations with 10 years of data,
  which may be found at lacontroller.org/pfr2023. Information on special fund balances
  and uses, historic Reserve Fund balances, and other budgetary information may also
  be found on my website.

  While this report covers the previous fiscal year, it is meant to help City leaders
understand and assess the health of the City’s finances – as well as to address future
challenges.

   
Continued Recovery

General Fund revenues were marked by strong 9% growth over the previous fiscal year.
That performance exceeded the adopted budget projections by $135.7 million. General
Fund budgetary department’s actual expenditures increased by 6.6% over the previous
fiscal year and exceeded the adopted budget by nearly $200 million or 4.1%. This was
offset by savings of $120 million in the Unappropriated Balance and $155 million in
General City Purposes spending. The combination of higher than anticipated revenues
and lower than expected total expenses saw the City’s General Fund begin this fiscal
year with General Fund reserves (Reserve Fund, Budget Stabilization Fund and
Unappropriated Balance line item set aside for mid-year adjustments) at a record-high
$876.3 million or 11.1% of the General Fund, exceeding the City’s goal of 10%
reserves.

Overall, all City spending for all budgeted funds (including the General Fund) was $1.2
billion below the level in the Adopted Budget. Special purpose funds accounted for 

nearly $600 million of those savings, along with $316 million in underspending on
capital projects.
The report highlights a number of key indicators:

● Major contributors to the strong revenue increase include Utility Users Tax
revenue ($93 million above budget) primarily from higher natural gas and electric
prices; franchise income ($53.7 million above); Transient Occupancy (Hotel) Tax
$46.8 million above); and Business Tax ($38.9 million above).
● Some revenue sources fell below budget projections: Documentary Transfer Tax
($77.3 million below); Licenses, Permits and Fines ($40.8 million below); Parking
Fines ($21.million below); and Grant Receipts ($15.6 million below).
● While staff vacancies resulted in $118 million in savings among civilian
employees, Police and Fire salaries were $29 million over their budgeted
amount. The overspending was attributed to increased overtime, unbudgeted
salary payouts associated with agreements with sworn employee unions and
excess sick payouts.
● Liability pay-outs of $172.5 million exceeded budget by nearly 100%.
● The City’s debt ratio remains well below the limits under City policy, providing the
potential for expanded capital investment if revenue flows can support new
borrowing.
● The City is not spending what it is budgeting for which means less services,
resources, and infrastructure are being provided for Angelenos.
● While chronic staffing shortages reduce compensation outlays, retaining and
attracting staff to fill those jobs puts a double strain on finances going forward as
raises and new hires absorb higher revenues. 

Hard choices lie ahead
While the post-Pandemic revenue growth has been strong, efforts to rein in inflation are
likely to cool economic growth and potentially tip the economy into recession at some
point. There are also serious long-term fiscal strains that will not be solved by kicking
the can down the road: 

• Despite widespread staff vacancies, General Fund departmental spending
actually exceeded last year’s adopted budget by nearly $200 million, meaning
that rebuilding the City’s workforce will make it more difficult to balance the
General Fund budget in the future.
• The contract for rank and file police staff will add nearly a billion dollars in
additional costs over the next four years, with the likelihood of commensurate
increases in compensation for police management and the larger civilian
workforce. All by themselves, these adjustments tilt future budgets into structural
deficits.
• As our Office has consistently pointed out, pension debt and citywide deferred
maintenance of vital infrastructure require urgent attention. Last year’s
underspending of $316 million in budgeted capital expenditures underscores that
the City continues to fall behind – which means even higher costs in the long run.

• Again, as we have warned, staff shortages and underinvestment in the training,
technology, equipment and facilities for our workforce hobbles productivity and
shortchanges our residents. All these pressures will tempt decision-makers to
utilize the City’s reserves for short-term fixes, dashing the hard-won gains of
fiscal prudence for maintaining those funds to protect against genuine
emergencies and maintain strong credit ratings to minimize the cost of capital
bonding.
    
To address these sobering concerns, this Office continues to advocate for reform of the
City’s outmoded budget practices. A transition to a two-year cycle would save enormous
staff time, give greater opportunity for meaningful community participation and allow for
a more strategic approach to the City’s Finances. The City also needs a transparent
Capital Improvement Program beyond the current wish list of billions of dollars in
unfunded projects. Participatory budgeting, expanded beyond its current experimental
pilot, would offer greater citizen engagement in the City’s fiscal health. 

The City should also break with the opaque process where annual departmental
budgets are simply marginally adjusted (up or down) without fundamentally altering the
long-standing budgetary status quo. Given the daunting financial realities, the City
needs to undertake a strategic reallocation of resources to what matters most to the
long-term wellbeing of all of our residents. Budgets are not just numbers, they are a
statement of values. As our city changes, so should our financial priorities. 

By taking the long view and reforming our budgeting practices, the City can better serve
everyone in our community. Budget reform and more accountable stewardship of the
public’s resources can also minimize abrupt service cuts (which disproportionately hurt
our most vulnerable) if economic conditions deteriorate. 

My staff and I appreciate the cooperation shown by City departments as we prepared
this report. Should you have questions or require additional information, please contact
my Director of Financial Analysis and Reporting, Wally Oyewole at
rahoof.oyewole@lacity.org. 

 Respectfully submitted,


 KENNETH MEJIA
 L.A. Controller

    cc:    Rick Cole, Chief Deputy Controller
           Sharon Tso, Chief Legislative Analyst
           Matt Szabo, City Administrative Officer
  `;

  const containerStyle: React.CSSProperties = {
    maxWidth: '0 auto',
    margin: '0 auto',
    padding: '20px',

    // textAlign: 'left', // Remove this line
  };

  return (
    <div style={{ color: 'white' }}>
      <br />
      <center>
        <h1>Preliminary Financial Report FY23</h1>
        <br></br>
        <h2>2023 Financial Report</h2>
        <br></br>
        <a
          href={pdfLink}
          target='_blank'
          rel='noopener noreferrer'
          style={buttonStyle}
        >
          View Report
        </a>
        {/* Display the cover letter text in a responsive container */}
        <div style={containerStyle}>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{coverLetterText}</pre>
        </div>

        <div
          style={{
            maxWidth: '300px',
            margin: '0 auto',
            textAlign: 'center',
            marginTop: '-213px',
          }}
        >
          <Image
            src='/KM-Sign.PNG' // Replace with the actual path to your image
            alt='Kenneth Mejia Signature'
            width={500} // Set the width of the image
            height={200} // Set the height of the image
          />
        </div>
      </center>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Revenue />
      <br></br>
      <br></br>
      <Expenditures />
      <br></br>
      <br></br>
      <Reserve />
      <br></br>
      <Debt />
    </div>
  );
};

export default Home;
