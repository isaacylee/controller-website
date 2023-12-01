import React from 'react';

import Navbar from '@/components/Navbar';

export default function InterimHousing() {
  const buttonStyle = {
    backgroundColor: '#41ffca',
    color: 'black',
    padding: '10px 0',
    margin: '0 20px',
    textDecoration: 'none',
    border: '1.5px solid black',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '170px',
    height: '70px',
    textAlign: 'center',
  };

  return (
    <>
      <Navbar />
      <main className='md:max-w container mx-auto px-4 sm:max-w-4xl lg:max-w-6xl xl:max-w-7xl'>
        <center>
          <div className='mt-6'>
            <img
              src='/images/homelessaudit-sheltercover-site.png'
              alt='banner image of Homelessness Audit: Interim Housing & Shelter Bed Data'
            />
          </div>
          <div className='dark:text-white mt-7 mb-7'>
            <p>[insert short blurb here]</p>
          </div>
          <div className='flex flex-row justify-center mb-7'>
            <a href='' className='text-base sm:text-base md:text-lg lg:text-lg xl:text-lg' style={buttonStyle}>
              Full Report
            </a>
            <a href='' className='text-base sm:text-base md:text-lg lg:text-lg xl:text-lg' style={buttonStyle}>
              Shelter Bed Map<br></br>(Demo)
            </a>
          </div>
          <div>
            <p className='text-left dark:text-white mt-4 mb-5'>December 5, 2023</p>
            <p className='text-left dark:text-white mb-5'>
              Honorable Karen Bass, Mayor<br></br>Honorable Hydee Feldstein
              Soto, City Attorney<br></br>Honorable Members of the Los Angeles
              City Council
            </p>
            <p className='text-left dark:text-white mb-5'>RE: Interim Housing Bed Availability Data</p>
            <p className='text-left dark:text-white mb-5'>
              The results of the 2023 Greater Los Angeles Homeless count
              revealed that an estimated 46,260 people in the City were
              experiencing either sheltered or unsheltered homelessness, a
              figure exceeding the number of interim housing beds by nearly
              three times (16,100 beds). In December of 2022, Mayor Karen Bass
              declared a warranted State of Emergency around the homelessness
              crisis. Yet the woefully inadequate amount of both interim and
              permanent housing resources, as well as the antiquated and
              inefficient methods of data collection and housing referral
              processes, significantly inhibit efforts by the City to respond to
              the crisis with the urgency that it requires.{' '}
            </p>
            <p className='text-left dark:text-white mb-5'>
              In this audit, our office worked to analyze and review current
              methods used to gather, use, and improve interim housing data. Due
              to the extremely limited amount of interim housing beds within
              city limits, it is vital that we maximize their use and ensure
              that providers know, on an up-to-date and day-to-day basis, when
              beds become available. Achieving this requires good quality data
              and a high level of coordination between outreach workers, program
              operators, and others to place participants into a shelter.{' '}
            </p>
            <p className='text-left dark:text-white mb-5'>
              Right now, as documented by our Office’s audit, that data is
              lacking. We found:
            </p>
            <ul className='text-left dark:text-white mb-5 ml-10'>
              <li>
                &bull; Errors with data entry including instances of bed
                attendance containing over- and underutilization counts,
                pointing to issues with data quality
              </li>
              <li>
                &bull; LAHSA did not follow the federal government’s guidelines
                to investigate data quality issues that were clearly inaccurate
                (indicated by bed utilization rates below 65% or above 105%)
              </li>
              <li>
                &bull; A significant number of shelters have recently reported
                low bed utilization rates, increasing the risk that the number
                of sheltered homeless is being undercounted and that available
                beds may not be used efficiently.
              </li>
            </ul>
            <p className='text-left dark:text-white mb-5'>
              These data quality issues make it next to impossible for the City
              to have an accurate picture of how many beds we actually have
              available, and how many are being utilized in the City at any
              given time. When this information is considered alongside laws
              like Los Angeles Municipal Code section 41.18 - which prohibits
              unhoused individuals from sitting, sleeping, or lying in
              designated areas, having reliable information about shelter bed
              availability would help the City ensure it is abiding by the
              Constitution by better understanding the extent to which it is
              criminalizing individuals it cannot house. Under a federal court’s
              decision in the case of Martin v. Boise, the City of Los Angeles
              and other local jurisdictions in several western states cannot
              enforce local laws restricting camping in public spaces if they do
              not have sufficient shelter beds available for their homeless
              population.
            </p>
            <p className='text-left dark:text-white mb-5'>
              We recommend that the City collaborate with LAHSA to take new
              steps to create a functioning shelter bed availability system, and
              improve the data quality that supports the existing shelter
              system. Changes are necessary not only because of the work LAHSA
              has carried out over the recent years, but because of its
              expanding responsibility in newer City efforts, like Inside Safe.
              Specifically, LAHSA should:
            </p>
            <ul className='text-left dark:text-white mb-5 ml-10'>
              <li>
                &bull; Re-evaluate its information requirements and redesign a
                shelter bed availability system that is publicly accessible to
                facilitate referrals to all LAHSA-funded shelters;
              </li>
              <li>
                &bull; Develop and implement a plan to monitor, evaluate, and
                enforce its requirements on shelter program operators to enter
                bed availability and bed attendance data in a complete,
                accurate, and timely manner; and
              </li>
              <li>
                &bull; Follow up with all shelter program operators
                participating in the Annual Homeless Count that report bed
                utilization rates below 65% or more than 105%, and require them
                to correct their count of people experiencing homelessness in
                their shelter, or provide an explanation for low or high bed
                utilization rates.
              </li>
            </ul>
            <p className='text-left dark:text-white mb-5'>
              As this audit reveals, the City currently lacks a centralized
              database that tracks interim housing availability and criteria for
              entry for interim housing sites.{' '}
            </p>
            <p className='text-left dark:text-white mb-5'>
              To illustrate what our City needs, our team is launching an
              interim housing bed availability map that, while incomplete,
              serves as an example of what we could accomplish with more
              coordinated efforts across relevant stakeholders. The goal of this
              project is to centralize data on interim housing to make the
              landscape of resources more accessible and easier to understand.
              To date, our team has attempted to contact more than 350 interim
              housing sites in the City. We have collected information on
              population(s) served, requirements for entry, referral processes,
              current bed availability, and daily reporting practices for all
              sites.
            </p>
            <p className='text-left dark:text-white mb-5'>
              With the work we have done thus far, we believe that a system like
              this is possible. We invite all necessary stakeholders (including
              LAHSA and the service providers that it works with) to join
              efforts and make an achievable dream a reality: the people of Los
              Angeles, including all of its unhoused neighbors, should know how
              many interim shelter beds are available on any given night.{' '}
            </p>
          </div>
        </center>
      </main>
    </>
  );
}
