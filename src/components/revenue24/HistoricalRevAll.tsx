import * as Plot from '@observablehq/plot';
import * as d3 from 'd3';
import * as React from 'react';

import { processEachValueIntoTextMore } from '@/components/utils';

export function HistoricalRevAll(props: any) {
  const generalbox = React.useRef<any>(null);
  const specialbox = React.useRef<any>(null);

  React.useEffect(() => {
    d3.csv('/csvsrevenueforecast25/remove-individal-funds-lol.csv').then(
      (removeIndividalFundsLol: any) => {
        const removeIndividalFundsLol1 = removeIndividalFundsLol.map(
          (e: any) => {
            return {
              ...e,
              'Fiscal Year': parseInt(e['Fiscal Year']),
              'Sum of Amount': parseFloat(e['Sum of Amount']),
            };
          }
        );

        console.log('fetched data', removeIndividalFundsLol1);

        
        // const generateSubPlot = (input: string) => {
        //   return Plot.plot({
        //     y: {
        //       tickFormat: (tick: any) =>
        //         d3.format('~s')(tick).replace('G', 'B'),
        //       label: 'Revenue',
        //     },
        //     marks: [
        //       Plot.lineY(
        //         removeIndividalFundsLol1.filter(
        //           (item: any) =>
        //             item.Type === 'Budget' && item.Category === input
        //         ),
        //         { x: 'Fiscal Year', y: 'Sum of Amount', stroke: 'Type' }
        //       ),
        //       Plot.lineY(
        //         removeIndividalFundsLol1.filter(
        //           (item: any) =>
        //             item.Type === 'Receipts' &&
        //             item.Category === input &&
        //             item['Fiscal Year'] >= 2022
        //         ),
        //         {
        //           x: 'Fiscal Year',
        //           y: 'Sum of Amount',
        //           stroke: 'Type',
        //           strokeWidth: 2,
        //           strokeDasharray: '2,6',
        //           defined: (item: any) =>
        //             item['Fiscal Year'] > 2022 && item['Type'] === 'Receipts',
        //         }
        //       ),
        //       Plot.lineY(
        //         removeIndividalFundsLol1.filter(
        //           (item: any) =>
        //             item.Type === 'Receipts' &&
        //             item.Category === input &&
        //             item['Fiscal Year'] <= 2022
        //         ),
        //         { x: 'Fiscal Year', y: 'Sum of Amount', stroke: 'Type' }
        //       ),
        //       //add text
        //       Plot.text(
        //         removeIndividalFundsLol1.filter(
        //           (item: any) =>
        //             item.Type === 'Receipts' &&
        //             item.Category === input &&
        //             item['Fiscal Year'] <= 2022
        //         ),
        //         {
        //           x: 'Fiscal Year',
        //           y: 'Sum of Amount',
        //           dx: 5,
        //           dy: 30,
        //           fill: 'Type',
        //           text: (elem: any) =>
        //             `${processEachValueIntoTextMore({
        //               value: elem['Sum of Amount'],
        //               digits: 2,
        //             })}`,
        //         }
        //       ),
        //       Plot.text(
        //         removeIndividalFundsLol1.filter(
        //           (item: any) =>
        //             item.Type === 'Budget' && item.Category === input
        //         ),
        //         {
        //           x: 'Fiscal Year',
        //           y: 'Sum of Amount',
        //           dx: 5,
        //           dy: -20,
        //           fill: 'Type',
        //           text: (elem: any) =>
        //             `${processEachValueIntoTextMore({
        //               value: elem['Sum of Amount'],
        //               digits: 2,
        //             })}`,
        //         }
        //       ),
        //     ],
        //     color: { scheme: 'set1', type: 'categorical', legend: true },
        //   });
        // };

        const generateSubPlot = (input: string) => {
          return Plot.plot({
            y: {
              tickFormat: (tick: any) =>
                d3.format('~s')(tick).replace('G', 'B'),
              label: 'Revenue',
            },
            marks: [
              Plot.lineY(
                removeIndividalFundsLol1.filter(
                  (item: any) =>
                    item.Type === 'Budget' && item.Category === input
                ),
                { x: 'Fiscal Year', y: 'Sum of Amount', stroke: '#41ffca' } // Updated color
              ),
              Plot.lineY(
                removeIndividalFundsLol1.filter(
                  (item: any) =>
                    item.Type === 'Receipts' &&
                    item.Category === input &&
                    item['Fiscal Year'] >= 2022
                ),
                {
                  x: 'Fiscal Year',
                  y: 'Sum of Amount',
                  stroke: '#41ffca', // Updated color
                  strokeWidth: 2,
                  strokeDasharray: '2,6',
                  defined: (item: any) =>
                    item['Fiscal Year'] > 2022 && item['Type'] === 'Receipts',
                }
              ),
              Plot.lineY(
                removeIndividalFundsLol1.filter(
                  (item: any) =>
                    item.Type === 'Receipts' &&
                    item.Category === input &&
                    item['Fiscal Year'] <= 2022
                ),
                { x: 'Fiscal Year', y: 'Sum of Amount', stroke: '#41ffca' } // Updated color
              ),
              Plot.text(
                removeIndividalFundsLol1.filter(
                  (item: any) =>
                    item.Type === 'Receipts' &&
                    item.Category === input &&
                    item['Fiscal Year'] <= 2022
                ),
                {
                  x: 'Fiscal Year',
                  y: 'Sum of Amount',
                  dx: 5,
                  dy: 30,
                  fill: '#ffca41', // Updated color
                  text: (elem: any) =>
                    `${processEachValueIntoTextMore({
                      value: elem['Sum of Amount'],
                      digits: 2,
                    })}`,
                }
              ),
              Plot.text(
                removeIndividalFundsLol1.filter(
                  (item: any) =>
                    item.Type === 'Budget' && item.Category === input
                ),
                {
                  x: 'Fiscal Year',
                  y: 'Sum of Amount',
                  dx: 5,
                  dy: -20,
                  fill: '#ffca41', // Updated color
                  text: (elem: any) =>
                    `${processEachValueIntoTextMore({
                      value: elem['Sum of Amount'],
                      digits: 2,
                    })}`,
                }
              ),
            ],
            color: { scheme: 'set1', type: 'categorical', legend: true },
          });
        };

        
        const generalboxplot = generateSubPlot('General Fund');
        const specialboxplot = generateSubPlot('Special Funds');

        if (generalbox.current) {
          console.log('current ref', generalbox.current);

          generalbox.current.innerHTML = '';

          generalbox.current.append(generalboxplot);

          specialbox.current.innerHTML = '';

          specialbox.current.append(specialboxplot);

          const darkstyle = document.createElement('style');
          darkstyle.innerHTML =
            '.dark svg[class^="plot-"] {background-color: transparent; color: white;}';

          generalbox.current.append(darkstyle);
        }
      }
    );
  }, []);

  return (
    <div>
      <h3>General Fund Historical Summary</h3>
      <div className='' ref={generalbox}></div>
      <h3>Special Funds Historical Summary</h3>
      <div ref={specialbox}></div>
      <p></p>
    </div>
  );
}
