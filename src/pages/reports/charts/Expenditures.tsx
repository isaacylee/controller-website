import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
interface RevenueSource {
  fiscalYear: number;
  category: string;
  department: string;
  finalBudget: number;
  salaries: number;
  others: number;
  totalExpenditures: number;
  id: number;
}

interface TotalExpenditure {
  fiscalYear: number;
  amount: number;
  budgetActual: string;
  id: number;
}

function Expenditures() {
  const [category, setCategory] = useState('Budgetary Department');
  const [fiscalYear, setFiscalYear] = useState(2023);
  const [revenueSourcesData, setRevenueSourcesData] = useState<RevenueSource[]>(
    []
  );
  const [totalExpendituresData, setTotalExpendituresData] = useState<
    TotalExpenditure[]
  >([]);

  useEffect(() => {
    axios
      .get(
        'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/pfr/expCategory'
      )
      .then((response) => {
        setRevenueSourcesData(response.data.expCategory);
      })
      .catch((error) => {
        console.error('Error fetching revenue sources data:', error);
      });

    axios
      .get(
        'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/pfr/totalExpenditures'
      )
      .then((response) => {
        setTotalExpendituresData(response.data.totalExpenditures);
      })
      .catch((error) => {
        console.error('Error fetching total expenditures data:', error);
      });
  }, []);

  const getFilteredRevenueData = () => {
    return revenueSourcesData.filter(
      (item) => item.category === category && item.fiscalYear === fiscalYear
    );
  };

  const getFilteredTotalExpendituresData = () => {
    return totalExpendituresData.filter(
      (item) => item.budgetActual === 'Final Budget'
    );
  };

  const revenueSourcesChartOptions = {
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          color: 'white',
        },
        title: {
          display: true,
          text: 'Amount',
          color: 'white',
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: 'white',
        },
        title: {
          display: true,
          text: 'Department',
          color: 'white',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white',
        },
      },
    },
  };

  const totalExpendituresChartOptions = {
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          color: 'white',
        },
        title: {
          display: true,
          text: 'Amount',
          color: 'white',
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: 'white',
        },
        title: {
          display: true,
          text: 'Fiscal Year',
          color: 'white',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white',
        },
      },
    },
  };

  return (
    <div>
      <br></br>
      <div>
        <center>
          <label style={{ marginRight: '10px' }}>Budgetary Department:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ color: 'black', marginRight: '10px' }}
          >
            <option value='Budgetary Department'>Budgetary Department</option>
            <option value='Non_Departmental'>Non-Departmental</option>
          </select>
          <label style={{ marginRight: '10px' }}>Fiscal Year:</label>
          <select
            value={fiscalYear}
            onChange={(e) => setFiscalYear(parseInt(e.target.value, 10))}
            style={{ color: 'black', marginRight: '10px' }}
          >
            <option value={2023}>2023</option>
            <option value={2022}>2022</option>
            <option value={2021}>2021</option>
            <option value={2020}>2020</option>
            <option value={2019}>2019</option>
            <option value={2018}>2018</option>
            <option value={2017}>2017</option>
            <option value={2016}>2016</option>
            <option value={2015}>2015</option>
            <option value={2014}>2014</option>
          </select>
        </center>

        <div className='chart-container'>
          <div>
            <h2>Total Expenditures by Department</h2>
            <Bar
              data={{
                labels: getFilteredRevenueData().map((item) => item.department),
                datasets: [
                  {
                    label: 'Total Expenditures',
                    data: getFilteredRevenueData()
                      .map((item) => item.totalExpenditures)
                      .sort((a, b) => b - a), // Sort data in descending order
                    backgroundColor: '#41ffca',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                  },
                ],
              }}
              options={{
                scales: {
                  x: {
                    beginAtZero: true,
                    ticks: {
                      color: 'white', // Set the text color to white for x-axis
                    },
                  },
                  y: {
                    beginAtZero: true,
                    ticks: {
                      color: 'white', // Set the text color to white for x-axis
                    },
                  },
                },
                indexAxis: 'y', // Set the chart to have horizontal bars
              }}
            />
          </div>
          <div>
            <h2>Total Expenditures Over Time</h2>
            <Bar
              data={{
                labels: getFilteredTotalExpendituresData().map(
                  (item) => item.fiscalYear
                ),
                datasets: [
                  {
                    label: 'Total Expenditures',
                    data: getFilteredTotalExpendituresData().map(
                      (item) => item.amount
                    ),
                    backgroundColor: '#41ffca',
                  },
                ],
              }}
              options={{
                scales: {
                  x: {
                    beginAtZero: true,
                    ticks: {
                      color: 'white', // Set the text color to white for x-axis
                    },
                  },
                  y: {
                    beginAtZero: true,
                    ticks: {
                      color: 'white', // Set the text color to white for x-axis
                    },
                  },
                },

                indexAxis: 'y', // Set the chart to have horizontal bars
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expenditures;
