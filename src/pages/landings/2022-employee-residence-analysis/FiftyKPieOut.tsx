import { Chart, registerables } from "chart.js";
import React, {useState} from 'react';
import { Pie } from "react-chartjs-2";

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
    // const root = document.documentElement;
    // root.style.setProperty('--chart-label-color', isDark ? 'white' : 'black');
  }
}

updateChartLabelColor();

if (typeof window !== 'undefined') {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  darkModeMediaQuery.addEventListener('change', updateChartLabelColor);
}

function FiftyKPie() {
  const [LAEmployees] = useState([
    {
      id: 1,
      cityOfLA: 'NO',
      payGreater50K: 'Pay > $50K',
      noOfEmployees: 25716,
      percentOfGroup: 0.802,
      totalPayroll: 3513156405,
      percentOfTotalPayroll: 0.9665,
    },
    {
      id: 2,
      cityOfLA: 'NO',
      payGreater50K: 'Pay < $50K',
      noOfEmployees: 6350,
      percentOfGroup: 0.198,
      totalPayroll: 121934203,
      percentOfTotalPayroll: 0.0335,
    },
  ]);

  const isDark = isDarkMode();

  const data = {
    labels: LAEmployees.map((x: any) => x.payGreater50K),
    datasets: [
      {
        label: "# of Employees",
        data: LAEmployees.map((x: any) => x.noOfEmployees),
        backgroundColor: [
          "#41ffca",
          "#ffc021",
        ],
        borderColor: [
          "#41ffca",
          "#ffc021",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
        // color: "rgba(0, 0, 0, 1)",
        labels: {
          font: {
            weight: "bold",
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const label = context.label || '';
            const value = LAEmployees[context.dataIndex].noOfEmployees.toLocaleString(undefined, { maximumFractionDigits: 2 });
            const percentOfEmployees: string = (LAEmployees[context.dataIndex].percentOfGroup * 100).toFixed(2);

            return `${label}: ${value} (${percentOfEmployees}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="mx-2 mb-6">
      <h4 className="mb-2 bg-zinc-900 text-white rounded-md w-96 sm:w-80 md:w-80 lg:w-96 sm:text-sm md:text-base lg:text-lg">Payroll Employees <b>Outside</b> of City of LA<br></br>Making More Than $50K</h4>
      <Pie data={data} height={150} options={options}/>
      <p className="mt-3 bg-zinc-900 text-white rounded-md w-64">Total # of Employees: <b>32,066</b></p>
    </div>
  );
}

export default FiftyKPie;