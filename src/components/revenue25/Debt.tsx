import * as Plot from '@observablehq/plot';
import * as d3 from 'd3';
import * as React from 'react';

export function LegendDebt() {
  return (
    <div className='flex flex-row'>
      <div className='flex flex-row gap-x-1'>
        <div className='flex flex-row'>
          <div className='h-4 w-4 rounded-full' style={{ backgroundColor: '#41ffca' }}></div>
          <p className='ml-2' style={{ color: '#41ffca' }}>
            Non-Voter Approved
          </p>
        </div>
        <div className='flex flex-row'>
          <div className='h-4 w-4 rounded-full' style={{ backgroundColor: '#ffca41' }}></div>
          <p className='ml-2' style={{ color: '#ffca41' }}>
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
    d3.csv('/csvsrevenueforecast25/debt.csv', d3.autoType).then((data: any) => {
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

      datacleaned.forEach((element: any) => {
        stackabledata.push({
          'Fiscal Year': element['Fiscal Year'],
          Type: 'Debt Service Requirement-Non-Voter Approved',
          Amount: element['Debt Service Requirement-Non-Voter Approved'],
          color: '#41ffca',
        });
        stackabledata.push({
          'Fiscal Year': element['Fiscal Year'],
          Type: 'Debt Service Requirement-Voter Approved',
          Amount: element['Debt Service Requirement-Voter Approved'],
          color: '#ffca41',
        });
      });

      const plot = Plot.plot({
        width: 700,
        height: 400,
        marginTop: 50,
        marginLeft: 80,
        x: {
          values: datacleaned.map((d: any) => d['Fiscal Year']),
          scale: { type: 'point' },
        },
        // x: {
        //   domain: [
        //     d3.min(datacleaned, (d: any) => d['Fiscal Year']),
        //     d3.max(datacleaned, (d: any) => d['Fiscal Year'])
        //   ],
        //   ticks: datacleaned.map((d: any) => d['Fiscal Year']),
        // },
        // x: {
        //   label: 'Fiscal Year',
        //   tickFormat: d3.format('d'),
        // },
        y: {
          label: 'Debt Service Amount ($)',
          tickFormat: (tick: any) => d3.format('~s')(tick).replace('G', 'B'),
        },
        marks: [
          Plot.line(datacleaned, {
            x: 'Fiscal Year',
            y: 'Debt Service Requirement-Non-Voter Approved',
            stroke: '#41ffca',
          }),
          Plot.line(datacleaned, {
            x: 'Fiscal Year',
            y: 'Debt Service Requirement-Voter Approved',
            stroke: '#ffca41',
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
            fill: '#41ffca',
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
            fill: '#ffca41',
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
          values: datacleaned.map((d: any) => d['Fiscal Year']),
          scale: { type: 'point' },
        },
        // x: {
        //   domain: [
        //     d3.min(datacleaned, (d: any) => d['Fiscal Year']),
        //     d3.max(datacleaned, (d: any) => d['Fiscal Year'])
        //   ],
        //   ticks: datacleaned.map((d: any) => d['Fiscal Year']),
        // },
        // x: {
        //   label: 'Fiscal Year',
        //   tickFormat: d3.format('d'),
        // },
        y: {
          label: 'Debt Service Amount ($)',
          tickFormat: (tick: any) => d3.format('~s')(tick).replace('G', 'B'),
        },
        marks: [
          Plot.line(datacleaned, {
            x: 'Fiscal Year',
            y: 'Debt Service Requirement-Non-Voter Approved',
            stroke: '#ffca41',
          }),
          Plot.line(datacleaned, {
            x: 'Fiscal Year',
            y: 'NonVoterApprovedLimit',
            stroke: '#41ffca',
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
            fill: '#ffca41',
          }),
          //add limit text
          Plot.text(datacleaned, {
            x: 'Fiscal Year',
            y: 'NonVoterApprovedLimit',
            text: (d: any) => d3.format('.4s')(d['NonVoterApprovedLimit']),
            dy: 10,
            dx: 5,
            fill: '#41ffca',
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
          values: datacleaned.map((d: any) => d['Fiscal Year']),
          scale: { type: 'point' },
        },
        // x: {
        //   domain: [
        //     d3.min(datacleaned, (d: any) => d['Fiscal Year']),
        //     d3.max(datacleaned, (d: any) => d['Fiscal Year'])
        //   ],
        //   ticks: datacleaned.map((d: any) => d['Fiscal Year']),
        // },
        // x: {
        //   label: 'Fiscal Year',
        //   tickFormat: d3.format('d'),
        // },
        y: {
          label: 'Debt Service Amount ($)',
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
      <h3>Debt Service over Time</h3>
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
