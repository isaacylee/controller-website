import * as Plot from '@observablehq/plot';
import * as d3 from 'd3';
import * as React from 'react';
import { useRef } from 'react';

import { addTooltips } from '@/components/tooltipsPlot/newtooltipsattempt';
export function Animalintake() {
  const expenref = useRef<any>(null);

  React.useEffect(() => {
    d3.csv('/csvanimalservices/animalintake2022.csv').then(
      (animaldata: any) => {
        const cleanedanimaldata = animaldata.map((eachItem:any) => {return {
          ...eachItem,
          Month: new Date(eachItem.Month)
        }})

        const expenelement = addTooltips(
          Plot.plot({
            height: 1500,
            facet: {
              data: cleanedanimaldata, y: "Animal"
            },
           x: {
              tickFormat: (x:any) => new Date(x).toLocaleString("en-US", {
            year: "2-digit",
            month: "numeric",
              })
            },
            marks: [
              Plot.barY(cleanedanimaldata, {x: "Month", y: "Intake Amt", fill: "Animal"}),
              Plot.ruleY([0]),
              Plot.text(cleanedanimaldata,{x: "Month", y: "Intake Amt",text: "Intake Amt",dy: -6})
            ],
            color: {legend: true}
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

  return <div ref={expenref}></div>;
}
