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
          <h2 className='pt-8 pb-4 dark:text-white'>LAPD Arrest Maps & Analysis (2019-22)
 </h2>

 {/* <center>
<a href="https://arrests.lacontroller.io/" target="_blank" rel="noopener noreferrer">
  <img src="/images/arrests/lapdarrests timelapse GIF.GIF" width="400" height="600" 
  alt="An animated gif of the map, showing each year, 2019 through 2022. Arrests appear to decrease significantly between 2019 and 2020, and then further decrease slightly each year over the following years." />  
  </a> 
</center> */}
<div style={{ display: "flex", alignItems: "center" }}>
  <img
    src="/images/arrests/lapdarrests timelapse GIF.GIF"
    alt="An animated gif of the map, showing each year, 2019 through 2022. Arrests appear to decrease significantly between 2019 and 2020, and then further decrease slightly each year over the following years."
    width="400"
    height="600"
    style={{ float: "left", marginRight: "20px" }}
  />
  <div style={{ flex: "1" }}>
    <p className="dark:text-white" style={{ fontFamily: "Helvetica" }}>
      This map shows locations and details of the nearly 300,000 arrests the Los Angeles Police Department
      made between 2019 and 2022. <br />
      Users can navigate the map and filter by race, Council District,
      LAPD Division, and arrest type.
      <br />
      <br />
      The data was obtained from the Los Angeles Police Department, but marks the <br />
      first time the data has been made accessible and mapped for the public without limitations.
    </p>
    <br></br>
    <br></br>
    <a
  href="https://arrests.lacontroller.io/"
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
    minWidth: "20px",
    textAlign: "center",
    direction: "ltr",
    letterSpacing: "0px"
  }}
  rel="noreferrer"
>
  Click Here to Open the Map
</a> 
  </div>
</div>
</div>
 
 
 <br></br>
<center> 
<div>
  <h3 className='dark:text-white' style={{ fontFamily: "Helvetica" }}><b>Summary and Analysis</b></h3>
</div>
</center>
<br></br>
<br></br>
<center> 
<div>
  <h3 className='dark:text-white' style={{ fontFamily: "Helvetica" }}><b>Race</b></h3>
</div>
</center>
<div className="image-container">
  <img src="/images/arrests/lapdarrests-race.png" width="400" height="600" alt="A bar chart of LAPD Arrests by Race, 2019-2022. The tallest bar is Hispanic/Latino, at 51%. Next is Black, at 27%, then White at 16%, then Other at 5%. Total arrests for each of the following 4 race categories are not more than 0%: Asian, Pacific Islander, Unknown, and American Indian/Alaskan Native. The Source of Data is LAPD." />
  <img src="/images/arrests/lapopulation.png" width="400" height="600" alt="A bar chart of Los Angeles Population by Race.  Hispanic/Latino is 48%.  Black is 8%. White is 29%. Other is 0%.  Asian is 12%, Pacific Islander is 0%, 2+ races is 3%, and American Indian/Alaskan Native is 0%. Source of Data is American Community Survey, 2021 5-Year Estimate." />
</div>
 
<center> 
<div>
  <strong>
    <span className='dark:text-white' style={{ fontFamily: "Helvetica" }}>
      <p>As the map highlights, Brown and Black people are arrested at a disproportionate rate,<br></br>making up an average of
         78.26% of all arrests over the past four years (2019-2022) <br></br>despite being only 56% of the LA County population 
         according to 2020 Census data. </p>
         <br></br>
    <ul>
      {/* <li>Brown and Black people are arrested at a disproportionate rate relative to the overall population  </li> */}
      <br></br>
      <li>Brown & Black people = 78.26% of all arrests from 2019-2022</li>
     
      <li>Brown & Black people = 56% of the LA County population (per 2020 Census data)</li>
      </ul> 
</span>
  </strong> 
</div>
 
</center>
<br></br>
<center> 
<div>
  <h3 className='dark:text-white' style={{ fontFamily: "Helvetica" }}><b>Council Districts</b></h3>
</div>
</center>
<div className="image-container">
  <img src="/images/arrests/lapdarrestsCD-2019.png" width="400" height="600" alt="A bar chart of LAPD Arrests by Council District, 2019. There are 15 Council Districts. Council District 14 has a much higher number of arrests than any other district, with around 14,000 arrests. There are several other Council Districts with around 7,000 to 9,000 arrests (CDs 1, 6, 8, 9, 13), The rest of the Council Districts have fewer than around 5,000 to 6,000 arrests. CDs 5 and 12 in particular have the fewest number of arrests, at around 2,500 arrests each. Source of data is LAPD." />
  <img src="/images/arrests/lapdarrestsCD-2020.png" width="400" height="600" alt="A bar chart of LAPD Arrests by Council District, 2020. There are fewer arrests overall compared to 2019. There are 15 Council Districts. Council District 14 has the highest number of arrests, at around 7,500 arrests,  but is also fairly close in number of arrests to districts 8 and 9, which are around 6,000 arrests.  CDs 1, 6, 10, 11, and 13 each have around 5,000 arrests. The rest of the Council Districts have much fewer than 5,000  arrests. CDs 5 and 12 have the fewest number of arrests, at under 2,500 arrests each. Source of data is LAPD." />

</div>

<div className="image-container">
<img src="/images/arrests/lapdarrestsCD-2021.png" width="400" height="600" alt="A bar chart of LAPD Arrests by Council District, 2021. There are still fewer arrests overall compared to 2019. There are 15 Council Districts. Council Districts  8 and 14 have the highest number of arrests, at around 6,000  arrests,  and are also fairly close in number of arrests to districts 9, and 11 which are also close to 6,000 arrests.  CDs 1, 6, and 13 each have around 5,000 arrests. The rest of the Council Districts havemuch fewer than 5,000  arrests. CDs 5 and 12 again have the fewest number of arrests, at under 2,500 arrests each. Source of data is LAPD." />
  <img src="/images/arrests/lapdarrestsCD-2022.png" width="400" height="600" alt="A bar chart of LAPD Arrests by Council District, 2022. There are still fewer arrests overall compared to 2019. There are 15 Council Districts. Council Districts 14, 8, and 1 have the highest number of arrests, at around 5,000 to 6,000  arrests,  and are also fairly close in number of arrests to districts 6, 9,  11, and 13 which are also close to 5,000 arrests. The rest of the Council Districts havemuch fewer than 5,000  arrests. CDs 4 and 5 have the fewest number of arrests, at under 2,500 arrests each. Source of data is LAPD. " />
</div>
<br />
<center> 
<div>
  <strong>

    <span className='dark:text-white' style={{ fontFamily: "Helvetica" }}>
    For almost every year, Council District 14 leads all other districts for the total number of arrests. In 2021, 
    <br></br>
    it came in second to Council District 8 by a difference of only three arrests.
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
<div>
  <h3 className='dark:text-white' style={{ fontFamily: "Helvetica" }}><b>Arrest Type</b></h3>
</div>
</center>
<center>
<div className="image-container">
<img src="/images/arrests/lapdarrests-type2019.png" width="400" height="600" alt="A donut chart of LAPD Arrests by Type, 2019. There are 2 categories: There’s Felony, and there’s Misdemeanor & Infraction. The bigger category is Misdemeanor & Infraction at 55,954, or 62.4%. Felony is 33,663, or 37.6%. Source of Data is LAPD. " />
  <img src="/images/arrests/lapdarrests-type2020.png" width="400" height="600" alt="A donut chart of LAPD Arrests by Type, 2020. There are 2 categories: There’s Felony, and there’s Misdemeanor & Infraction. The slightly bigger category is Misdemeanor & Infraction at 34,659, or 52.8%. Felony is 31,015, or 47.2%. Source of Data is LAPD. " />
</div>
<div className="image-container">
<img src="/images/arrests/lapdarrests-type2021.png" width="400" height="600" alt="A donut chart of LAPD Arrests by Type, 2021. There are 2 categories: There’s Felony, and there’s Misdemeanor & Infraction. They are almost even.Misdemeanor & Infraction is marginally bigger at 33,179, or 50.4%. Felony is 32,597, or 49.6%. Source of Data is LAPD." />
  <img src="/images/arrests/lapdarrests-type2022.png" width="400" height="600" alt="A donut chart of LAPD Arrests by Type, 2021. There are 2 categories: There’s Felony, and there’s Misdemeanor & Infraction. They are even.Misdemeanor & Infraction is marginally bigger at 30,431, or 50%. Felony is 30,378, or 50%. Source of Data is LAPD. " />
</div>
  
  </center>
<br></br>
<center> 
<div>
  <strong>
    <span className='dark:text-white' style={{ fontFamily: "Helvetica" }}>
    The LAPD arrest types fall into five categories identified by the LAPD: <br></br>(1) felony, (2)
     misdemeanor, (3) infractions, (4) dependent, and (5) other. 
</span>
  </strong>
</div>
</center>
<br></br>
<center> 
<div>
   
    <span className='dark:text-white' style={{ fontFamily: "Helvetica" }}>


        

Under California law, a felony is a crime that is punishable with death, by imprisonment in the  <br></br>
state prison, or . . . by imprisonment in a county jail under [certain provisions]. <br></br>Every other crime or public offense is a misdemeanor except those offenses 
<br></br> that are classified as infractions. Misdemeanors and
infractions carry varying <br></br>degrees of financial and incarceration consequences.
</span>
 
</div>
</center>
<br></br>
<br></br>
<center> 
<div>
 
    <p className='dark:text-white' style={{ fontFamily: "Helvetica" }}>
    LAPD makes more arrests for misdemeanor and infraction offenses than for felonies.


    </p>
   
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
      <div>
  <h3 className='dark:text-white' style={{ fontFamily: "Helvetica" }}><b>Dependent Arrests</b></h3>
</div>
      <p className='dark:text-white' style={{fontFamily: "Helvetica"}}> <br></br>
      According to LAPD data, they make over 400 arrests each year in the “dependent” category. <br></br>
      This category includes children who are taken into custody because their parent or <br></br>guardian 
      has been accused of abuse, neglect, <br></br> or endangerment, as well as children who are deemed to be 
      runaways or <br></br> beyond parental control. 

</p>
 
<p className='dark:text-white' style={{fontFamily: "Helvetica"}}> <br></br>
The data available is unclear about the nature of these interactions, <br></br>
but raises questions about the frequency that children and youth are coming into contact with the LAPD. 

</p>
<br></br>
<ul>
      <li>2019: 464 Dependent arrests </li>
      <li>2020: 429 Dependent arrests</li>
      <li>2021: 422 Dependent arrests</li>
      <li>2022: 545 Dependent arrests</li>
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
