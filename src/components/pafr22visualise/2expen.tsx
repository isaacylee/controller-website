import * as Plot from '@observablehq/plot';
import * as d3 from 'd3';
import * as React from 'react';
import { useRef } from 'react';

export function Expenditures() {
  const expenref = useRef<any>(null);

  React.useEffect(() => {
    d3.csv('/csvsforpafr22/2totalcityexpenditures.csv').then(
      (totalcityexpenditures1: any) => {
        const totalcityexpenditures1clean = totalcityexpenditures1.filter(
          (e: any) => e.Value != null
        );

        const expenelement = Plot.plot({
          height: 650,
          color: {
            legend: true,
          },
          y: {
            tickFormat: (tick: any) =>
              d3.format('0.1s')(tick).replace('G', 'B'),
          },
          facet: {
            data: totalcityexpenditures1clean,
            y: 'Activity Type',
          },
          marks: [
            Plot.barY(totalcityexpenditures1clean, {
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
  }, []);

  return <div ref={expenref}></div>;
}
