'use client';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
// Define data types and interfaces
interface DebtDataItem {
  fiscalYear: string;
  budgetStabilizationFund: number;
  reserveFund: number;
  budgetStabilizationFundPercentage: number;
  reserveFundPercentage: number;
}

// Define state types
type SelectedOption = 'reserveFund' | 'reserveFundPercentage';
const BarChartForDebt = () => {
  const [reserveData, setReserveData] = useState<DebtDataItem[] | undefined>();
  const [selectedOption, setSelectedOption] =
    useState<SelectedOption>('reserveFund'); // Default selection

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/reserves/reservesCsv'
        );
        const data = await response.json();

        setReserveData(data.reservesCsv);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const labels = reserveData?.map((item) => item.fiscalYear);

  const selectedData =
    selectedOption === 'reserveFund'
      ? {
          labels,
          datasets: [
            {
              label: 'Reserve Fund',
              data: reserveData?.map((item) => item.reserveFund),
              backgroundColor: '#ffca41',
            },
            {
              label: 'Budget Stabilization Fund',
              data: reserveData?.map((item) => item.budgetStabilizationFund),
              backgroundColor: '#41ffca',
            },
          ],
        }
      : {
          labels,
          datasets: [
            {
              label: 'Reserve Fund Percentage',
              data: reserveData?.map((item) => item.reserveFundPercentage),
              backgroundColor: '#ffca41',
            },
            {
              label: 'Budget Stabilization Fund Percentage',
              data: reserveData?.map(
                (item) => item.budgetStabilizationFundPercentage
              ),
              backgroundColor: '#41ffca',
            },
          ],
        };

  const options: ChartOptions<'bar'> = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: 'white', // Set the legend text color to white
        },
      },
      title: {
        display: false,
        color: 'white',
      },
    },
    scales: {
      y: {
        stacked: true,
        title: {
          display: true,
          text: selectedOption === 'reserveFund' ? 'Amount' : 'Percentage',
          color: 'white', // Set the text color of the y-axis label to white
        },
        ticks: {
          color: 'white',
        },
      },

      x: {
        stacked: true,
        grid: {
          display: false,
        },
        title: {
          display: true,
          color: 'white', // Set the text color of the x-axis label to white
        },
        ticks: {
          color: 'white',
        },
      },
    },
  };

  return (
    <div className='p-10 text-center'>
      <br></br>
      <label style={{ marginRight: '10px' }}> Scale by % or $</label>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value as SelectedOption)}
        className='w-38 border-2'
        style={{ color: 'black' }}
      >
        <option value='reserveFund'>Reserve Fund - $</option>
        <option value='reserveFundPercentage'>
          Reserve Fund Percentage - %
        </option>
      </select>

      <div
        className='px-10'
        style={{ width: '100%', height: '500px', overflowX: 'auto' }}
      >
        <Bar options={options} data={selectedData} />
      </div>
    </div>
  );
};
export default BarChartForDebt;
