import * as Plot from '@observablehq/plot';
import * as d3 from 'd3';
import * as React from 'react';
import { useRef } from 'react';
export function Expenditures() {
  const expenref = useRef<any>(null);

  React.useEffect(() => {
    d3.csv('/csvsforpafr22/2totalcityexpenditures.csv').then(
      (totalcityexpenditures1: any) => {
        const expenelement = Plot.plot({
          color: {
            legend: true,
          },
          y: {
            tickFormat: '$s',
          },
          facet: {
            data: totalcityexpenditures1,
            y: 'Activity Type',
          },
          marks: [
            Plot.barY(totalcityexpenditures1, {
              x: 'Year',
              y: 'Value',
              fill: 'Activity',
            }),
            Plot.ruleY([0]),
          ],
        });

        if (expenref.current) {
          console.log('current ref', expenref.current);
          expenref.current.append(expenelement);
        }
      }
    );
  });

  return <div ref={expenref}></div>;
}
