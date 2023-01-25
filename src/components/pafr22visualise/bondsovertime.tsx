import * as Plot from '@observablehq/plot';
import * as d3 from 'd3';
import * as React from 'react';
import { useEffect, useRef } from 'react';

import { getHeightPlot, getWidthPlot } from './processwidthandheight';
export function BondsOverTime() {
  const bondsovertimeref = useRef<any>(null);

  const sizes = [
    {
      screen: 350,
      width: 300,
      height: 250,
    },
    {
      screen: 750,
      width: 700,
      height: 400,
    },
    {
      screen: 1000,
      width: 800,
      height: 500,
    },
  ];

  useEffect(() => {
    d3.csv('/csvsforpafr22/4bondeddebtandlongtermnotespayable.csv').then(
      (bondeddebtandlongtermnotespayable: any) => {
        const bondeddebtandlongtermnotespayablecleaned =
          bondeddebtandlongtermnotespayable.filter(
            (eachItem: any) => eachItem.Total != null
          );

        const bondeddebtandlongtermnotespayablecleanedtotals =
          bondeddebtandlongtermnotespayablecleaned.filter(
            (eachItem: any) => eachItem['Activity Type'] === 'Governmental'
          );

        const plotforbondsovertimeelem = Plot.plot({
          width: getWidthPlot(sizes),
          height: getHeightPlot(sizes),
          color: {
            legend: true,
          },
          y: {
            tickFormat: 's',
          },
          marks: [
            Plot.barY(bondeddebtandlongtermnotespayablecleaned, {
              x: 'Fiscal Year',
              fill: 'Activity Type',
              y: 'Value',
            }),
            Plot.lineY(bondeddebtandlongtermnotespayablecleanedtotals, {
              x: 'Fiscal Year',
              y: 'Total',
            }),
            Plot.textY(bondeddebtandlongtermnotespayablecleanedtotals, {
              x: 'Fiscal Year',
              y: 'Total',
              text: 'Total',
            }),
            Plot.ruleY([0]),
          ],
        });

        if (bondsovertimeref.current) {
          console.log('current ref', bondsovertimeref.current);
          bondsovertimeref.current.append(plotforbondsovertimeelem);
        }
      }
    );
  }, []);

  return <div ref={bondsovertimeref}></div>;
}
