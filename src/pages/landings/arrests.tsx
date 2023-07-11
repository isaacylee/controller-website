import * as React from 'react';

import '@/styles/aboutstyles.module.css';

import { data } from '@/data.json';

import Navbar from '@/components/Navbar';

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

const kirbybutton =
  'w-content rounded-full bg-black px-4 py-2 font-bold text-white dark:bg-white dark:text-black';

export default function Data(props: any) {
  return (
    <>
      <Navbar />

     
   

       

        <div className='mx-2 flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl'>
          <h2 className='pt-8 pb-4 dark:text-white'>Arrests Maps (2019-2022) </h2>

       

   

 
          {/* <center>
<a href="https://4118arrests.lacontroller.io" target="_blank" rel="noopener noreferrer">
  <img src="/images/4118/year-animated-gif.gif" width="400" height="600" alt="An animated gif of each year of the map, from 2012-2022, along with percentages of arrests by race. For 2012-2018, there are a lot more total arrests and they are most concentrated in Downtown LA, Hollywood, and Venice. For 2019-2022, total arrests are down from previous years.  For 2012-2017, the percentage of those arrested who are Black is always between 40 to 50%. In 2018 the percentage of those arrested who are Black goes down each year. By 2022 Black people make up 19% of those arrested. From 2012-2017, White people make up about 30% of those arrested each year. Starting in 2018, White people makeup about 40% of those arrested each year. Hispanic/Latin people make up between 15-25% of those arrested each year from 2012-2019, and then arrests start rising in 2020 - they make up 38% of those arrested in 2022. 
  The areas that are most concentrated with the highest total arrests vary - in 2019 Skid Row and Venice have higher arrests. In 2020 Venice has higher arrests. In 2019 and 2020, West Los Angeles has higher arrests. In 2020, Chatsworth and Westlake-MacArthur Park have higher arrests too. 
  The Source of Data is LAPD." />  
  </a> 
</center> */}

</div>
<br />

<center><a
  href="https://2022arrests.lacontroller.io/"
  target="_blank"
  style={{
    backgroundColor: "#41ffca",
    borderRadius: "8px",
    border: "2px solid #000000",
    color: "#000000",
    // display: "block",
    fontFamily: "Lato, 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontSize: "24px",
    fontWeight: "normal",
    fontStyle: "normal",
    padding: "16px 28px",
    textDecoration: "none",
    minWidth: "30px",
    textAlign: "center",
    direction: "ltr",
    letterSpacing: "0px"
  }}
  rel="noreferrer"
>
  Click Here to Open the Map
</a></center>

<br></br>
<center> 
<div>
  <p className='dark:text-white' style={{ fontFamily: "Helvetica" }}>
  This map shows locations and details of the nearly 300,000 arrests the Los Angeles Police Department
   made between 2019 and 2022. <br></br>Users can navigate the map and filter by race, Council District, 
   LAPD Division, and arrest type.
   <br></br>
   <br></br>
   The data was obtained from the Los Angeles Police Department, but marks the <br></br>
   first time the data has been made accessible and mapped for the public without limitations. 

 
  </p>
</div>
</center>
<br></br>
<center> 
<div>
  <h3 className='dark:text-white' style={{ fontFamily: "Helvetica" }}><b>Summary and Analysis</b></h3>
</div>
</center>
<br></br>
<br></br>
<div className="image-container">
  <img src="/images/arrests/lapdarrests-race.png" width="400" height="600" alt="" />
  <img src="/images/arrests/lapopulation.png" width="400" height="600" alt="" />
</div>
<br></br>
<br></br>
<center> 
<div>
  <strong>
    <span className='dark:text-white' style={{ fontFamily: "Helvetica" }}>
    <ul>
      <li>Brown and Black people are arrested at a disproportionate rate relative to the overall population  </li>
      <li>Brown & Black people = 78.26% of all arrests from 2019-2022</li>
      <li>Brown & Black people = 56% of the LA County population (per 2020 Census data)</li>
      </ul> 
</span>
  </strong> 
</div>
</center>
<div className="image-container">
  <img src="/images/arrests/lapdarrestsCD-2019.png" width="400" height="600" alt="" />
  <img src="/images/arrests/lapdarrestsCD-2020.png" width="400" height="600" alt="" />

</div>

<div className="image-container">
<img src="/images/arrests/lapdarrestsCD-2021.png" width="400" height="600" alt="" />
  <img src="/images/arrests/lapdarrestsCD-2022.png" width="400" height="600" alt="" />
</div>
<br />
<center> 
<div>
  <strong>
    <span className='dark:text-white' style={{ fontFamily: "Helvetica" }}>
    For almost every year, Council District 14 leads all other districts for the total number of arrests. In 2021, 
    <br></br>
    it came in second to Council District 8 by a difference of only 3 arrests.
</span>
  </strong>
</div>
</center>
<br />
{/* <center> 
<div>
  <span className='dark:text-white' style={{ fontFamily: "Helvetica" }}>The drop in arrests followed the 2018 court ruling in the case<br></br>
    Martin v. Boise, barring cities from enforcing anti-camping laws without offering adequate shelter.</span>
</div>
</center> */}
<br />
<center> 
<span className='dark:text-white' style={{ fontFamily: "Helvetica" }}>Arrest Type</span></center>
<center>
<div className="image-container">
<img src="/images/arrests/lapdarrests-type2019.png" width="400" height="600" alt="" />
  <img src="/images/arrests/lapdarrests-type2020.png" width="400" height="600" alt="" />
</div>
<div className="image-container">
<img src="/images/arrests/lapdarrests-type2021.png" width="400" height="600" alt="" />
  <img src="/images/arrests/lapdarrests-type2022.png" width="400" height="600" alt="" />
</div>
  
  </center>
<br></br>
<center> 
<div>
  <strong>
    <span className='dark:text-white' style={{ fontFamily: "Helvetica" }}>
    The LAPD arrest types fall into five categories identified by the LAPD: (1) felony, <br></br>(2)
     misdemeanor, (3) infractions, (4) dependent, and (5) other. 
</span>
  </strong>
</div>
</center>
<br></br>
<center> 
<div>
   
    <span className='dark:text-white' style={{ fontFamily: "Helvetica" }}>
    Under California law, a felony is a crime that is punishable with death, by imprisonment in the <br></br>
    state prison, or . . . by imprisonment in a county jail under [certain provisions]. <br></br>Every other crime or 
    public offense is a misdemeanor except those offenses<br></br> that are classified as infractions. Misdemeanors and 
    infractions carry varying <br></br>degrees of financial and incarceration consequences.
</span>
 
</div>
</center>
<br></br>
<br></br>
<center> 
<div>
  <strong>
    <p className='dark:text-white' style={{ fontFamily: "Helvetica" }}>
    LAPD makes more arrests for misdemeanor and infraction offenses than for felonies.


    </p>
  </strong>
</div>
</center>
<br></br>
<center> 
<div>
  <strong>
    <span className='dark:text-white' style={{ fontFamily: "Helvetica" }}>
 

    <ul>
      <li>2019: 55,954 misdemeanor & infraction arrests vs. 33,663 felony arrests </li>
      <li>2020: 34,659 misdemeanor & infraction arrests vs. 31,015 felony arrests</li>
      <li>2021: 33,179 misdemeanor & infraction arrests vs. 32,597 felony arrests</li>
      <li>2022: 30,431 misdemeanor & infraction arrests vs. 30,378 felony arrests</li>
      </ul> 
      <br></br>
      <p className='dark:text-white' style={{fontFamily: "Helvetica"}}>According to LAPD data, <br></br>
      they make over 400 arrests each year in the “dependent” category. <br></br>This category includes children who 
      are taken into custody because<br></br> their parent or guardian has been accused of abuse, neglect, <br></br>or endangerment,
       as well as children <br></br> who are deemed to be runaways or beyond parental control. 

</p>
<br></br>
<p className='dark:text-white' style={{fontFamily: "Helvetica"}}>The data available is unclear about the 
nature of these interactions, <br></br> but raises questions about the frequency that children and youth are coming into 
contact with the LAPD. 
 <br></br>
   

</p>
<br></br>
<ul>
      <li>2019: 464 Dependent arrests </li>
      <li>2020:	429 Dependent arrests</li>
      <li>2021:	422 Dependent arrests</li>
      <li>2022:	545 Dependent arrests  </li>
      </ul> 
</span>
  </strong>
</div>
</center>
 
 

<br></br>

 
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
