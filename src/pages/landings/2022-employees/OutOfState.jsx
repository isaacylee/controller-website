'use client';

import axios from 'axios';
import React from 'react';
import { useEffect,useState } from 'react';


export default function OutOfState() {
  const [outOfState, setOutOfState] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/2022PayrollEmployeeAnalysis/3Top15OutOfState'
      )
      .then((response) => {
        const data = response.data['3Top15OutOfState'];
        // console.log("out of state", data);
        setOutOfState(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  function addCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <div>
      <div className='overflow-x-auto bg-white p-2'>
        <table className='w-full table-auto'>
          <thead
            className=' text-xs font-bold text-black sm:text-sm md:text-base lg:text-lg'
            style={{ border: '1px solid black', backgroundColor: '#41ffca' }}
          >
            <tr>
              <th
                className='p-2 text-center text-black'
                style={{ border: '1px solid black' }}
                colSpan='3'
              >
                Top 15 Out of State
              </th>
            </tr>
          </thead>
          <thead
            className='text-xs text-black sm:text-xs md:text-sm lg:text-base'
            style={{ border: '1px solid black', backgroundColor: '#41ffca' }}
          >
            <tr>
              <th
                className='sm:p1 text-left text-black md:p-2 lg:p-2'
                style={{ border: '1px solid black' }}
              >
                Out of State
              </th>
              <th
                className='sm:p1 text-left text-black md:p-2 lg:p-2'
                style={{ border: '1px solid black' }}
              >
                # of Employees
              </th>
              <th
                className='sm:p1 text-black md:p-2 lg:p-2'
                style={{ border: '1px solid black' }}
              >
                Payroll Amount
              </th>
            </tr>
          </thead>
          <tbody
            className='text-xs text-black sm:text-xs md:text-sm lg:text-base'
            style={{ border: '1px solid black' }}
          >
            {outOfState.map((row) => (
              <tr key={row.id}>
                <td
                  className='sm:p1 text-black md:p-2 lg:p-2'
                  style={{ border: '1px solid black' }}
                >
                  {row.outOfState}
                </td>
                <td
                  className='sm:p1 text-black md:p-2 lg:p-2'
                  style={{ border: '1px solid black' }}
                >
                  {row['#OfEmployees'].toLocaleString()}
                </td>
                <td
                  className='sm:p1 text-black md:p-2 lg:p-2'
                  style={{ border: '1px solid black' }}
                >
                  ${row.payrollAmt.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}