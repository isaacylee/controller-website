import { Chart, registerables } from 'chart.js';
import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';

Chart.register(...registerables);

function isDarkMode() {
  if (typeof window !== 'undefined') {
    // Check local storage for user preference
    const userPreference = localStorage.getItem('theme');
    if (
      userPreference === 'dark' ||
      (userPreference === null &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      return true;
    }
  }
  // Default to light mode on the server or when no preference is set
  return false;
}

function updateChartLabelColor() {
  if (typeof window !== 'undefined') {
    const isDark = isDarkMode();
    console.log('isDark:', isDark);
    document.documentElement.style.setProperty(
      '--chart-label-color',
      isDark
        ? 'var(--chart-label-color-dark)'
        : 'var(--chart-label-color-light)'
    );
  }
}

updateChartLabelColor();

if (typeof window !== 'undefined') {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  darkModeMediaQuery.addEventListener('change', updateChartLabelColor);
}

function HundredKOut() {
  const [LAEmployees] = useState([
    {
      id: 1,
      cityOfLA: 'NO',
      payGreater100K: 'Pay < $100K',
      noOfEmployees: 13767,
      percentOfGroup: 0.4293,
      totalPayroll: 690709935,
      percentOfTotalPayroll: 0.19,
    },
    {
      id: 2,
      cityOfLA: 'NO',
      payGreater100K: 'Pay > $100K',
      noOfEmployees: 18299,
      percentOfGroup: 0.5707,
      totalPayroll: 2944380673,
      percentOfTotalPayroll: 0.81,
    },
  ]);

  const isDark = isDarkMode();

  const data = {
    labels: LAEmployees.map((x: any) => x.payGreater100K),
    datasets: [
      {
        label: '# of Employees',
        data: LAEmployees.map((x: any) => x.noOfEmployees),
        backgroundColor: [
          'rgba(1, 184, 193, 0.7)',
          'rgba(255, 117, 31, 0.7)',
        ],
        borderColor: [
          '#2dd4bf',
          '#fb923c',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
        // color: 'rgba(0, 0, 0, 1)',
        labels: {
          font: {
            weight: 'bold',
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className='mx-2'>
      <h4 className='mb-2' style={{ color: isDark ? 'white' : 'black' }}>
        Payroll Employees <b>Outside</b> of City of LA
        <br></br>Making &gt;$100K
      </h4>
      <Pie data={data} height={150} options={options} />
      <p className='mt-3' style={{ color: isDark ? 'white' : 'black' }}>
        Total # of Employees: <b>32,066</b>
      </p>
    </div>
  );
}

export default HundredKOut;
