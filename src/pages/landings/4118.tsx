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
          <h2 className='pt-8 pb-4 dark:text-white'>41.18 Arrests Map (Jan 2012 - May 2023)</h2>

       

   

 
<center>
  <img src="/images/4118/main.png" width="600" height="500" 
  alt="A bar chart called 'Case Submission Method' for year ended Dec 31, 2022. Web and Phone are the biggest bars. Web is 53% and phone is 39%. Other is 8%" />
</center>
</div>
<br />

<center><a
  href="https://4118-map.vercel.app/"
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

<center> <p className=' dark:text-white' style={{ fontFamily: "Helvetica" }}>
This map shows details of arrests under<br></br> <b> LA Municipal Code 41.18,
 which criminalizes sitting,<br></br> lying, & sleeping, or placing personal
  property in the public right-of-way in certain instances.</b>
</p></center>
<br></br>
<center><h1 className=' dark:text-white' style={{ fontFamily: "Helvetica"}}><b>Summary and Analysis</b></h1></center>
<br></br>
<center>
  <img src="/images/4118/numberOf.png" width="400" height="600" alt="A bar chart called 'Reporter Anonymity' for year ended Dec 31, 2022. Anonymous is 62%. Not Anonymous is 38%" />
</center>
<br></br>
<center> 
<strong>
  <span className=' dark:text-white' style={{ fontFamily: "Helvetica"  }}>From 2012-2022, LAPD made over 36,000 41.18 arrests.</span>
</strong></center>
<br />
<center> 
<strong>
  <span className=' dark:text-white' style={{ fontFamily: "Helvetica"  }}>📅 Average arrests/year:<br></br>2012-2018: 4,781 <br></br>2019-2022: 662</span>
</strong>
</center>
<br />
 <center> 
  <span className=' dark:text-white' style={{ fontFamily: "Helvetica"  }}>The drop in arrests followed the 2018 court ruling in the case<br></br>
   Martin v. Boise, barring cities from enforcing anti-camping laws without offering adequate shelter.</span>
 
</center>
<br />
 
<center>
  <img src="/images/4118/byRace.png" width="400" height="600" 
  alt="A bar chart called 'Reporter Anonymity' for year ended Dec 31, 2022. Anonymous is 62%. Not Anonymous is 38%" />
</center>
<br />
<center> 
<strong>
  <span className=' dark:text-white' style={{ fontFamily: "Helvetica" }}>41.18 Arrests by Race:<br></br>Black: 43% <br></br>White: 34% <br></br>Hispanic/Latin: 21%<br></br>Other: 2%</span>
</strong>
</center>
<br></br>
<center> 
<strong>
  <span className=' dark:text-white' style={{ fontFamily: "Helvetica" }}>LA Population by Race:<br></br>Black: 8% <br></br>White: 29% <br></br>Hispanic/Latin: 48%<br></br>Other: 15%</span>
</strong>
</center>
<center> <strong> <p className=' dark:text-white' style={{ fontFamily: "Helvetica"  }}>
43% of those arrested were Black.<br></br> Black people are only 8% of the general population of the City of LA.
</p></strong></center>
 <br></br>
 <center>
  <img src="/images/4118/byCD.png" width="400" height="600" alt="A bar chart called 'Reporter Anonymity' for year ended Dec 31, 2022. Anonymous is 62%. Not Anonymous is 38%" />
</center>
   <br></br>
   <center> 
<strong>
  <span className=' dark:text-white' style={{ fontFamily: "Helvetica"  }}>41.18 Arrests by Council District:</span>
</strong></center>
<br></br>
 
<center> <strong> <p className=' dark:text-white' style={{ fontFamily: "Helvetica"  }}>
Over 50% of 41.18 arrests were in Council District 14 (includes Skid Row, DTLA).
</p></strong></center>
<br></br>
<center> <strong> <p className=' dark:text-white' style={{ fontFamily: "Helvetica"  }}>
16% of arrests were in CD11 (includes Venice), and 14% of arrests were in CD13 (includes Hollywood).  
</p></strong></center>
<br></br>
<center>   <p className=' dark:text-white' style={{ fontFamily: "Helvetica"  }}>
All other Council Districts had less than 3% of arrests each .
</p></center>
<br></br>
 <center>
  <img src="/images/4118/byType.png" width="400" height="600" alt="A bar chart called 'Reporter Anonymity' for year ended Dec 31, 2022. Anonymous is 62%. Not Anonymous is 38%" />
</center>
 <br></br>
 <center> 
<strong>
  <span className=' dark:text-white' style={{ fontFamily: "Helvetica" }}>41.18 Arrests by Type:<br></br>Misdemeanors: 84% <br></br>Infractions: 16% </span>
</strong>
</center>
<br></br>
<center>   <p className=' dark:text-white' style={{ fontFamily: "Helvetica"  }}>
41.18 violations can be cited as either infractions or misdemeanors. <br></br>
Infractions can lead to a fine of up to $2,500.<br></br> Misdemeanors can result in 
up to 6 months of imprisonment & a fine of up to $1,000.
</p> </center>
<br></br>
<center>
  <img src="/images/4118/bySex.png" width="400" height="600" alt="A bar chart called 'Reporter Anonymity' for year ended Dec 31, 2022. Anonymous is 62%. Not Anonymous is 38%" />
</center>
<br></br>
<center> 
<strong>
  <span className=' dark:text-white' style={{ fontFamily: "Helvetica"  }}>41.18 Arrests by Sex:<br></br>73% of those arrested were male.  <br></br>27% were female. <br></br></span>
</strong>
</center>
<br>
</br>
<center>   <p className=' dark:text-white' style={{ fontFamily: "Helvetica"  }}>
The general population of the City of LA is 49% male and 51% female.
</p></center>
<br></br>
<center><hr style={{height: "2px", width: "50%"}}></hr></center>
<br></br>
<center><h1 className=' dark:text-white' style={{ fontFamily: "Helvetica"  }}><b>2012</b></h1></center>
<br></br>
<center>
  <img src="/images/4118/2012.png" width="400" height="600" alt="A bar chart called 'Reporter Anonymity' for year ended Dec 31, 2022. Anonymous is 62%. Not Anonymous is 38%" />
</center>
<br></br>
<center><h1 className=' dark:text-white' style={{ fontFamily: "Helvetica"  }}><b>2013</b></h1></center>
<br></br>
<center>
  <img src="/images/4118/2013.png" width="400" height="600" alt="A bar chart called 'Reporter Anonymity' for year ended Dec 31, 2022. Anonymous is 62%. Not Anonymous is 38%" />
</center>
<br></br>
<center><h1 className=' dark:text-white' style={{ fontFamily: "Helvetica" }}><b>2014</b></h1></center>
<br></br>
<center>
  <img src="/images/4118/2014.png" width="400" height="600" alt="A bar chart called 'Reporter Anonymity' for year ended Dec 31, 2022. Anonymous is 62%. Not Anonymous is 38%" />
</center>
<br></br>
<center><h1 className=' dark:text-white' style={{ fontFamily: "Helvetica"  }}><b>2015</b></h1></center>
<br></br>
<center>
  <img src="/images/4118/2015.png" width="400" height="600" alt="A bar chart called 'Reporter Anonymity' for year ended Dec 31, 2022. Anonymous is 62%. Not Anonymous is 38%" />
</center>
<br></br>
<center><h1 className=' dark:text-white' style={{ fontFamily: "Helvetica"  }}><b>2016</b></h1></center>
<br></br>
<center>
  <img src="/images/4118/2016.png" width="400" height="600" alt="A bar chart called 'Reporter Anonymity' for year ended Dec 31, 2022. Anonymous is 62%. Not Anonymous is 38%" />
</center>
<br></br>
<center><h1 className=' dark:text-white' style={{ fontFamily: "Helvetica"  }}><b>2017</b></h1></center>
<br></br>
<center>
  <img src="/images/4118/2017.png" width="400" height="600" alt="A bar chart called 'Reporter Anonymity' for year ended Dec 31, 2022. Anonymous is 62%. Not Anonymous is 38%" />
</center>
<br></br>
<center><h1 className=' dark:text-white' style={{ fontFamily: "Helvetica"  }}><b>2018</b></h1></center>
<br></br>
<center>
  <img src="/images/4118/2018.png" width="400" height="600" alt="A bar chart called 'Reporter Anonymity' for year ended Dec 31, 2022. Anonymous is 62%. Not Anonymous is 38%" />
</center>
<br></br>
<center><h1 className=' dark:text-white' style={{ fontFamily: "Helvetica"  }}><b>2019</b></h1></center>
<br></br>
<center>
  <img src="/images/4118/2019.png" width="400" height="600" alt="A bar chart called 'Reporter Anonymity' for year ended Dec 31, 2022. Anonymous is 62%. Not Anonymous is 38%" />
</center>
<br></br>
<center><h1 className=' dark:text-white' style={{ fontFamily: "Helvetica"  }}><b>2020</b></h1></center>
<br></br>
<center>
  <img src="/images/4118/2020.png" width="400" height="600" alt="A bar chart called 'Reporter Anonymity' for year ended Dec 31, 2022. Anonymous is 62%. Not Anonymous is 38%" />
</center>
<br></br>
<center><h1 className=' dark:text-white' style={{ fontFamily: "Helvetica"  }}><b>2021</b></h1></center>
<br></br>
<center>
  <img src="/images/4118/2021.png" width="400" height="600" alt="A bar chart called 'Reporter Anonymity' for year ended Dec 31, 2022. Anonymous is 62%. Not Anonymous is 38%" />
</center>
<br></br>
<center><h1 className=' dark:text-white' style={{ fontFamily: "Helvetica"  }}><b>2022</b></h1></center>
<br></br>
<center>
  <img src="/images/4118/2022.png" width="400" height="600" alt="A bar chart called 'Reporter Anonymity' for year ended Dec 31, 2022. Anonymous is 62%. Not Anonymous is 38%" />
</center>
<center><hr style={{height: "2px", width: "50%"}}></hr></center>
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
