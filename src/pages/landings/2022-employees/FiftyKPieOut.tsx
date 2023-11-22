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
          "rgba(253, 224, 71, 0.8)",
          "rgba(65, 255, 202, 0.8)",
        ],
        borderColor: [
          "rgba(253, 224, 71, 0.8)",
          "rgba(65, 255, 202, 0.8)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
        color: "rgba(0, 0, 0, 1)",
        labels: {
          font: {
            weight: "bold",
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="mx-2">
      <h4 className="mb-2" style={{ color: isDark ? 'white' : 'black' }}>Payroll Employees <b>Outside</b> of City of LA<br></br>Making &gt;$50K</h4>
      <Pie data={data} height={150} options={options}/>
      <p className="mt-3" style={{ color: isDark ? 'white' : 'black' }}>Total # of Employees: <b>32,066</b></p>
    </div>
  );
}

export default FiftyKPie;