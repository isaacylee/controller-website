'use client';

import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

export default function BuyoutsByDollars() {
  const [dollarBuyout, setDollarBuyout] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/tenantBuyoutsAnalysis/tenantBuyoutAmtRange'
      )
      .then((response) => {
        const data = response.data.tenantBuyoutAmtRange;
        // console.log('amt range', data);
        setDollarBuyout(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className='mt-4 px-1 sm:px-5 md:px-9 lg:px-20 xl:px-24'>
      <div className='bg-white p-2'>
        <table className='w-full table-auto'>
          <thead
            className='text-black'
            style={{ border: '1px solid black', backgroundColor: '#41ffca' }}
          >
            <tr>
              <th
                className='p-2 text-black text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl'
                style={{ border: '1px solid black' }}
              >
                Buyout Range
              </th>
              <th
                className='p-2 text-black text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl'
                style={{ border: '1px solid black' }}
              >
                # of Buyouts
              </th>
              <th
                className='p-2 text-black text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl'
                style={{ border: '1px solid black' }}
              >
                Amount
              </th>
            </tr>
          </thead>
          <tbody className='text-black' style={{ border: '1px solid black' }}>
            {dollarBuyout.map((row, index) => (
              <tr
                key={row.id}
                style={
                  index === dollarBuyout.length - 1
                    ? {fontWeight:'bold', backgroundColor: '#41ffca', border: '1px solid black' }
                    : { border: '1px solid black' }
                }
              >
                <td className='p-2 font-bold text-black text-base sm:text-base md:text-lg lg:text-xl xl:text-xl' style={{ border: '1px solid black' }}>
                  {row.buyoutRange}
                </td>
                <td className='p-2 text-black text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl' style={{ border: '1px solid black' }}>
                  {row['#OfBuyouts'].toLocaleString()}
                </td>
                <td className='p-2 text-right text-black text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl' style={{ border: '1px solid black' }}>
                  ${row.amount.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
