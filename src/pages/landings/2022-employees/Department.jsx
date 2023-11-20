'use client';

import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

export default function Department() {
  const [department, setDepartment] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/2022PayrollEmployeeAnalysis/7Department'
      )
      .then((response) => {
        const data = response.data['7Department'];
        // console.log("department", data);
        setDepartment(data);
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
                colSpan='8'
              >
                Payroll Employee Analysis by Department
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
                Department
              </th>
              <th
                className='sm:p1 text-left text-black md:p-2 lg:p-2'
                style={{ border: '1px solid black' }}
              >
                City of LA
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
                % of Dept.
              </th>
              <th
                className='sm:p1 text-black md:p-2 lg:p-2'
                style={{ border: '1px solid black' }}
              >
                Payroll Amount
              </th>
              <th
                className='sm:p1 text-black md:p-2 lg:p-2'
                style={{ border: '1px solid black' }}
              >
                % of Dept. Payroll
              </th>
              <th
                className='sm:p1 text-black md:p-2 lg:p-2'
                style={{ border: '1px solid black' }}
              >
                % of Total Payroll
              </th>
            </tr>
          </thead>
          <tbody
            className='text-xs text-black sm:text-xs md:text-sm lg:text-base'
            style={{ border: '1px solid black' }}
          >
            {department.map((row) => (
              <tr key={row.id}>
                <td
                  className='sm:p1 text-black md:p-2 lg:p-2'
                  style={{ border: '1px solid black' }}
                >
                  {row.department}
                </td>
                <td
                  className='sm:p1 text-black md:p-2 lg:p-2'
                  style={{ border: '1px solid black' }}
                >
                  {row.cityOfLa}
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
                  {(row['%OfDept'] * 100).toFixed(2)}%
                </td>
                <td
                  className='sm:p1 text-black md:p-2 lg:p-2'
                  style={{ border: '1px solid black' }}
                >
                  ${addCommas(row.payrollAmt.toFixed(2))}
                </td>
                <td
                  className='sm:p1 text-black md:p-2 lg:p-2'
                  style={{ border: '1px solid black' }}
                >
                  {(row['%OfDeptPayroll'] * 100).toFixed(2)}%
                </td>
                <td
                  className='sm:p1 text-black md:p-2 lg:p-2'
                  style={{ border: '1px solid black' }}
                >
                  {(row['%OfTotalPayroll'] * 100).toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
