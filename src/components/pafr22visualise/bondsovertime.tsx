import * as Plot from '@observablehq/plot';
import * as d3 from 'd3';
import * as React from 'react';
import { useEffect, useRef } from 'react';

import { processEachValueIntoTextMore } from '@/components/utils';

import { getHeightPlot, getWidthPlot } from './processwidthandheight';
export function BondsOverTime() {
  const bondsovertimeref = useRef<any>(null);

  const [innerwidth, setinnerwidth] = React.useState<number>(
    typeof window != 'undefined' ? window.innerWidth : 1000
  );

  const [data, setData] = React.useState<any>(null);

  const sizes = [
    {
      screen: 350,
      width: 300,
      height: 250,

      fullscreen: true,
    },
    {
      screen: 500,
      width: 400,
      height: 300,

      fullscreen: true,
    },
    {
      screen: 750,
      width: 750,
      height: 400,
    },
    {
      screen: 1000,
      width: 800,
      height: 500,
    },
    {
      screen: 1200,
      width: 1000,
      height: 550,
    },
  ];

  const renderChart = () => {
    if (data) {
      const bondeddebtandlongtermnotespayable = data;

      const bondeddebtandlongtermnotespayablecleaned =
        bondeddebtandlongtermnotespayable
          .filter((eachItem: any) => eachItem.Total != null)
          .map((eachItem: any) => {
            return {
              ...eachItem,
              Total: parseInt(eachItem.Total),
              Value: parseInt(eachItem.Value),
            };
          });

      const bondeddebtandlongtermnotespayablecleanedtotals =
        bondeddebtandlongtermnotespayablecleaned.filter(
          (eachItem: any) => eachItem['Activity Type'] === 'Governmental'
        );

      const plotforbondsovertimeelem =
        // addTooltips(
        Plot.plot({
          width: getWidthPlot(sizes),
          height: getHeightPlot(sizes),
          color: {
            legend: true,
          },
          y: {
            tickFormat: (tick: any) => d3.format('~s')(tick).replace('G', 'B'),
            grid: true,
          },
          marks: [
            Plot.barY(bondeddebtandlongtermnotespayablecleaned, {
              x: 'Fiscal Year',
              fill: 'Activity Type',
              y: 'Value',
              title: (elem: any) =>
                `${elem['Activity Type']} ${processEachValueIntoTextMore({
                  value: elem.Value,
                  digits: 2,
                })}`,
            }),
            Plot.lineY(bondeddebtandlongtermnotespayablecleanedtotals, {
              x: 'Fiscal Year',
              y: 'Total',
            }),
            Plot.textY(bondeddebtandlongtermnotespayablecleanedtotals, {
              x: 'Fiscal Year',
              y: 'Total',
              text: (bruh: any) => (bruh['Total'] / 10e8).toFixed(2),
              dy: -10,
            }),
            Plot.ruleY([0]),
          ],
        });
      // {
      //      fill: '#ffffff',
      //       opacity: 0.5,
      //       'stroke-width': '4px',
      //       stroke: '#41ffca',
      //     }
      //   );

      if (bondsovertimeref.current) {
        console.log('current ref', bondsovertimeref.current);
        bondsovertimeref.current.innerHTML = '';
        bondsovertimeref.current.append(plotforbondsovertimeelem);
      }
    }
  };

  React.useEffect(() => {
    renderChart();
  }, [innerwidth]);

  React.useEffect(() => {
    renderChart();
  }, [data]);

  useEffect(() => {
    d3.csv('/csvsforpafr22/4bondeddebtandlongtermnotespayable.csv').then(
      (bondeddebtandlongtermnotespayable: any) => {
        setData(bondeddebtandlongtermnotespayable);
      }
    );

    if (typeof window !== 'undefined') {
      addEventListener('resize', () => {
        setinnerwidth(window.innerWidth);
        return true;
      });
    }
  }, []);

  return <div ref={bondsovertimeref} id='bondschart4pafr'></div>;
}
