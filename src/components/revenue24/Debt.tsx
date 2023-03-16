import * as Plot from '@observablehq/plot';
import * as d3 from 'd3';
import * as React from 'react';

export function LegendDebt() {
  return (
    <div className='flex flex-row'>
      <div className='flex flex-row gap-x-1'>
        <div className='flex flex-row'>
          <div className='h-4 w-4 rounded-full bg-red-500'></div>
          <p className='ml-2 text-red-900 dark:text-red-100'>
            Non-Voter Approved
          </p>
        </div>
        <div className='flex flex-row'>
          <div className='h-4 w-4 rounded-full bg-blue-500'></div>
          <p className='ml-2 text-blue-900 dark:text-blue-100'>
            Voter Approved
          </p>
        </div>
      </div>
    </div>
  );
}

export function Debt(props: any) {
  const debtbox = React.useRef<any>(null);
  const debtboxlimitsix = React.useRef<any>(null);
  const debtboxlimittotal = React.useRef<any>(null);

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

        d['NonVoterApprovedLimit'] = 0.06 * d['General Fund Receipts'];

        d['TotalLimit'] = 0.15 * d['General Fund Receipts'];

        return d;
      });

      const stackabledata: Array<any> = [];

      datacleaned.forEach((element) => {
        stackabledata.push({
          'Fiscal Year': element['Fiscal Year'],
          Type: 'Debt Service Requirement-Non-Voter Approved',
          Amount: element['Debt Service Requirement-Non-Voter Approved'],
          color: '#ef4444',
        });
        stackabledata.push({
          'Fiscal Year': element['Fiscal Year'],
          Type: 'Debt Service Requirement-Voter Approved',
          Amount: element['Debt Service Requirement-Voter Approved'],
          color: '#3b82f6',
        });
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
          Plot.ruleY([0], {
            stroke: 'grey',
          }),
        ],
      });

      const plotsix = Plot.plot({
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
            y: 'NonVoterApprovedLimit',
            stroke: 'red',
            //dotted line
            strokeDasharray: '5 5',
          }),
          //add text
          Plot.text(datacleaned, {
            x: 'Fiscal Year',
            y: 'Debt Service Requirement-Non-Voter Approved',
            text: (d: any) =>
              d3.format('.4s')(
                d['Debt Service Requirement-Non-Voter Approved']
              ),
            dy: 10,
            dx: 5,
            fill: '#ef4444',
          }),
          //add limit text
          Plot.text(datacleaned, {
            x: 'Fiscal Year',
            y: 'NonVoterApprovedLimit',
            text: (d: any) => d3.format('.4s')(d['NonVoterApprovedLimit']),
            dy: 10,
            dx: 5,
            fill: '#ef4444',
          }),
          Plot.ruleY([0], {
            stroke: 'grey',
          }),
        ],
      });

      const plotlimittotal = Plot.plot({
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
          /*
          Plot.line(datacleaned, {
            x: 'Fiscal Year',
            y: 'Debt Service Requirement-Total',
            stroke: '#10b981',
          }),*/
          Plot.line(datacleaned, {
            x: 'Fiscal Year',
            y: 'TotalLimit',
            stroke: '#10b981',
            //dotted line
            strokeDasharray: '5 5',
          }),
          //add text
          Plot.text(datacleaned, {
            x: 'Fiscal Year',
            y: 'Debt Service Requirement-Total',
            text: (d: any) =>
              d3
                .format('.4s')(d['Debt Service Requirement-Total'])
                .replace('G', 'B'),
            dy: -10,
            dx: 5,
            fill: '#10b981',
          }),
          //add limit text
          Plot.text(datacleaned, {
            x: 'Fiscal Year',
            y: 'TotalLimit',
            text: (d: any) =>
              d3.format('.4s')(d['TotalLimit']).replace('G', 'B'),
            dy: 10,
            dx: 5,
            fill: '#10b981',
          }),
          //area chart
          Plot.areaY(stackabledata, {
            x: 'Fiscal Year',
            y: 'Amount',
            fill: 'color',
          }),
          //add ruler at 0
          Plot.ruleY([0], {
            stroke: 'grey',
          }),
        ],
      });

      if (debtbox.current) {
        debtbox.current.innerHTML = '';
        debtbox.current.append(plot);

        debtboxlimitsix.current.innerHTML = '';
        debtboxlimitsix.current.append(plotsix);

        debtboxlimittotal.current.innerHTML = '';
        debtboxlimittotal.current.append(plotlimittotal);
      }
    });
  }, []);

  return (
    <div>
      <h3>Debt over Time</h3>
      {/*Make a legend with 2 items, 
      - Red Dot that say Non-Voter Approved
      - Blue Dot that say Voter Approved
      */}
      <LegendDebt />
      <div className='' ref={debtbox}></div>

      <h3>Limits on Debt</h3>
      <h4>6% Non-Voter Approved Limit</h4>
      <p>Dashed: Limit</p>
      <div className='' ref={debtboxlimitsix}></div>

      <h4>15% Total Limit</h4>
      <p>Dashed: Limit</p>
      <LegendDebt />
      <div className='' ref={debtboxlimittotal}></div>
      <p></p>
    </div>
  );
}
