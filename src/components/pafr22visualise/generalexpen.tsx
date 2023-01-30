import * as Plot from '@observablehq/plot';
import * as d3 from 'd3';
import * as React from 'react';
import { useRef } from 'react';

import { addTooltips } from '@/components/tooltipsPlot/newtooltipsattempt';
import { processEachValueIntoTextMore } from '@/components/utils';

export function GeneralExpenditures() {
  const expenref = useRef<any>(null);

  React.useEffect(() => {
    d3.csv('/csvsforpafr22/8fygeneralfundtotalexpenditures.csv').then(
      (totalcityexpenditures1: any) => {
        const totalcityexpenditures1clean = totalcityexpenditures1
          .filter((e: any) => e.Value != null)
          .map((e: any) => {
            return {
              ...e,
              Value: parseInt(e.Value) * 1000,
            };
          });

        const expenelement = addTooltips(
          Plot.plot({
            height: 650,
            color: {
              legend: true,
            },
            y: {
              tickFormat: (tick: any) =>
                d3.format('~s')(tick).replace('G', 'B'),
            },
            marks: [
              Plot.barY(totalcityexpenditures1clean, {
                x: 'Fiscal Year',
                y: 'Value',
                fill: 'Expenditure',
                title: (elem: any) =>
                  `${elem.Expenditure} ${processEachValueIntoTextMore({
                    value: elem.Value,
                    digits: 2,
                  })}`,
              }),
              Plot.ruleY([0]),
            ],
          }),
          {
            fill: 'white',
            opacity: 0.5,
            'stroke-width': '3px',
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

  return <div ref={expenref}></div>;
}
