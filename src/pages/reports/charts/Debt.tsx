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

// Define data types and interfaces
interface DebtDataItem {
  fiscalYear: string;
  voterApproved: number;
  debtServiceRequirementsNonVoterApproved: number;
  debtCapsNonVoterApproved: number;
  ratioOfDebtServiceRequirementsToGeneralFundReceiptsNonVoterApproved: number;
}

// Define state types
type SelectedOption = 'debt' | 'debtPercentage';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart: React.FC = () => {
  const [debtData, setDebtData] = useState<DebtDataItem[] | undefined>();
  const [selectedOption, setSelectedOption] = useState<SelectedOption>('debt'); // Default selection

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response2 = await fetch(
          'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/debt/debtCsv'
        );
        const data2: { debtCsv: DebtDataItem[] } = await response2.json();
        setDebtData(data2.debtCsv);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const labels = debtData?.map((item) => item.fiscalYear);

  const selectedData =
    selectedOption === 'debt'
      ? {
          labels,
          datasets: [
            {
              label: 'Voter Approved Debt',
              data: debtData?.map((item) => item.voterApproved),
              backgroundColor: '#ffca41',
            },
            {
              label: 'Debt Service Requirements (Non-Voter Approved)',
              data: debtData?.map(
                (item) => item.debtServiceRequirementsNonVoterApproved
              ),
              backgroundColor: '#41ffca',
            },
          ],
        }
      : {
          labels,
          datasets: [
            {
              label: 'Debt Caps (Non-Voter Approved)',
              data: debtData?.map((item) => item.debtCapsNonVoterApproved),
              backgroundColor: '#ffca41',
            },
            {
              label:
                'Ratio of Debt Service Requirements to General Fund Receipts (Non-Voter Approved)',
              data: debtData?.map(
                (item) =>
                  item.ratioOfDebtServiceRequirementsToGeneralFundReceiptsNonVoterApproved
              ),
              backgroundColor: '#41ffca',
            },
          ],
        };

  const options: ChartOptions<'bar'> = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        stacked: true,
        title: {
          display: false,
          text: selectedOption === 'debt' ? 'Amount' : 'Percentage',
          color: 'white',
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
          display: false,
          color: 'white',
        },
        ticks: {
          color: 'white',
        },
      },
    },
  };

  return (
    <>
      <div className='p-10 text-center'>
        <br></br>
        <label style={{ marginRight: '10px' }}>Scale by % or $</label>
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value as SelectedOption)}
          className='w-30 border-2 '
          style={{ color: 'black' }}
        >
          <option value='debt'>Debt - %</option>
          <option value='debtPercentage'>Debt - $</option>
        </select>
      </div>
      <div
        className='px-10'
        style={{ width: '100%', height: '500px', overflowX: 'auto' }}
      >
        <Bar options={options} data={selectedData} />
      </div>
    </>
  );
};

export default BarChart;
