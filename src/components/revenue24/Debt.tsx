import * as Plot from '@observablehq/plot';
import * as d3 from 'd3';
import * as React from 'react';

export function Debt(props: any) {
  const debtbox = React.useRef<any>(null);

  React.useEffect(() => {
    d3.csv('/csvsrevenueforecast24/debt.csv', d3.autoType).then((data: any) => {
      const nonVoterMaxRatio = 0.06;
      const combinedMaxRatio = 0.15;

      const datacleaned = data.map((d: any) => {
        const columnswiththousands = [
          'Debt Service Requirement-Non-Voter Approved',
          'Debt Service Requirement-Voter Approved',
          'Debt Service Requirement-Total',
          'General Fund Receipts',
        ];

        columnswiththousands.forEach((column: any) => {
          d[column] = d[column] * 1000;
        });

        return d;
      });

      const plot = Plot.plot({
        width: 700,
        height: 400,
        marginTop: 50,
        marginLeft: 80,
        x: {
          label: 'Fiscal Year',
          tickFormat: d3.format('d'),
        },
        y: {
          label: 'Amount of Debt ($)',
          tickFormat: (tick: any) => d3.format('~s')(tick).replace('G', 'B'),
        },
        marks: [
          Plot.line(datacleaned, {
            x: 'Fiscal Year',
            y: 'Debt Service Requirement-Non-Voter Approved',
            stroke: 'red',
          }),
          Plot.line(datacleaned, {
            x: 'Fiscal Year',
            y: 'Debt Service Requirement-Voter Approved',
            stroke: '#3b82f6',
          }),
          //label each year with numbers in their corrosponding colours
          Plot.text(datacleaned, {
            x: 'Fiscal Year',
            y: 'Debt Service Requirement-Non-Voter Approved',
            text: (d: any) =>
              d3
                .format('.4s')(d['Debt Service Requirement-Non-Voter Approved'])
                .replace('G', 'B'),
            dy: 10,
            dx: 5,
            fill: '#ef4444',
          }),
          Plot.text(datacleaned, {
            x: 'Fiscal Year',
            y: 'Debt Service Requirement-Voter Approved',
            text: (d: any) =>
              d3
                .format('.4s')(d['Debt Service Requirement-Voter Approved'])
                .replace('G', 'B'),
            dy: -10,
            dx: 5,
            fill: '#3b82f6',
          }),
        ],
      });

      if (debtbox.current) {
        debtbox.current.innerHTML = '';
        debtbox.current.append(plot);
      }
    });
  }, []);

  return (
    <div>
      <h3>Debt over Time</h3>
      <div className='' ref={debtbox}></div>
      <p></p>
    </div>
  );
}
