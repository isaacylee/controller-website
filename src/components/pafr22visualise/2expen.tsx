import * as Plot from '@observablehq/plot';
import * as d3 from 'd3';
import * as React from 'react';
import { useRef } from 'react';

import { addTooltips } from '@/components/tooltipsPlot/newtooltipsattempt';
import { processEachValueIntoTextMore } from '@/components/utils';
export function Expenditures() {
  const expenref = useRef<any>(null);

  const stacked = useRef<any>(null);

  React.useEffect(() => {
    d3.csv('/csvsforpafr22/2expend-sum.csv').then((sumexpend: any) => {
      const expenelementstacked = addTooltips(
        Plot.plot({
          height: 500,
          color: {
            legend: true,
          },
          y: {
            tickFormat: (tick: any) => d3.format('~s')(tick).replace('G', 'B'),
          },
          x: { label: 'Fiscal Year' },
          marks: [
            Plot.barY(sumexpend, {
              x: 'Year',
              y: 'Sum of Value',
              fill: 'Activity Type',
              title: (elem: any) =>
                `${elem['Activity Type']} ${processEachValueIntoTextMore({
                  value: elem.Value,
                  digits: 3,
                })}`,
            }),
            Plot.ruleY([0]),
          ],
        }),
        {
          fill: '#ffffff',
          opacity: 0.5,
          'stroke-width': '4px',
          stroke: '#41ffca',
        }
      );

      if (stacked.current) {
        console.log('current ref', expenref.current);
        expenref.current.append(expenelementstacked);
      }
    });

    d3.csv('/csvsforpafr22/2totalcityexpenditures.csv').then(
      (totalcityexpenditures1: any) => {
        const totalcityexpenditures1clean = totalcityexpenditures1.filter(
          (e: any) => e.Value != null
        );

        const expenelement = addTooltips(
          Plot.plot({
            height: 650,
            color: {
              legend: true,
            },
            y: {
              tickFormat: (tick: any) =>
                d3.format('0.1s')(tick).replace('G', 'B'),
            },
            x: { label: 'Fiscal Year' },
            facet: {
              data: totalcityexpenditures1clean,
              y: 'Activity Type',
            },
            marks: [
              Plot.barY(totalcityexpenditures1clean, {
                x: 'Year',
                y: 'Value',
                fill: 'Activity',
                title: (elem: any) =>
                  `${elem.Activity} ${processEachValueIntoTextMore({
                    value: elem.Value,
                    digits: 3,
                  })}`,
              }),
              Plot.ruleY([0]),
            ],
          }),
          {
            fill: '#ffffff',
            opacity: 0.5,
            'stroke-width': '4px',
            stroke: '#41ffca',
          }
        );

        if (expenref.current) {
          console.log('current ref', expenref.current);
          expenref.current.append(expenelement);
        }
      }
    );
  }, []);

  return (
    <div>
      <h4>Expenses Stacked</h4>
      <div ref={stacked}></div>
      <h4>Each Expenses Source Breakdown</h4>
      <div ref={expenref}></div>
    </div>
  );
}
