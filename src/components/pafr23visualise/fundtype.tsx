//import d3 from 'd3';
import * as Plot from '@observablehq/plot';
import * as d3 from 'd3';
import * as React from 'react';
import { useEffect, useRef } from 'react';

import { addTooltips } from '@/components/tooltipsPlot/newtooltipsattempt';
import { processEachValueIntoTextMore } from '@/components/utils';
//import { Plot } from '../tooltipsPlot/tooltips';

function responsivefy(svg: any) {
  // container will be the DOM element
  // that the svg is appended to
  // we then measure the container
  // and find its aspect ratio
  const container = d3.select(svg.node().parentNode),
    width = parseInt(svg.style('width'), 10),
    height = parseInt(svg.style('height'), 10),
    aspect = width / height;

  // set viewBox attribute to the initial size
  // control scaling with preserveAspectRatio
  // resize svg on inital page load
  svg
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('preserveAspectRatio', 'xMinYMid')
    .call(resize);

  // add a listener so the chart will be resized
  // when the window resizes
  // multiple listeners for the same event type
  // requires a namespace, i.e., 'click.foo'
  // api docs: https://goo.gl/F3ZCFr
  d3.select(window).on('resize.' + container.attr('id'), resize);

  // this is the code that resizes the chart
  // it will be called on load
  // and in response to window resizes
  // gets the width of the container
  // and resizes the svg to fill it
  // while maintaining a consistent aspect ratio
  function resize() {
    const w = parseInt(container.style('width'));
    svg.attr('width', w);
    svg.attr('height', Math.round(w / aspect));
  }
}

function darkModeTheSvg(element: any) {
  if (element) {
    const svgelem = element.querySelector('svg');

    if (svgelem) {
      const svgStyle = svgelem.querySelector('style');

      const getclassname = svgelem.getAttribute('class');

      if (svgStyle) {
        svgStyle.innerHTML =
          svgStyle.innerHTML +
          `\n\n .dark ${getclassname} {
          background-color: #212121;
          color: white;
        }`;
      }
    } else {
      console.log('no svg element');
    }
  } else {
    console.log('no element');
  }
}

export default function FundType(props: any) {
  //import the csv table from /csvsforpafr23/Revenue_Budget_and_Receipts.csv

  const rev2 = useRef<any>();
  const rev1 = useRef<any>();

  useEffect(() => {
    d3.csv('/csvforpafr23/Revenue_Budget_and_Receipts.csv').then(
      (data: any) => {
        console.log('THIS IS THE 2023 DATA' + data);

        const totalcityrevenue1 = data.map((d: any) => {
          return {
            ...d,
            Amount: parseInt(d['Amount']),
          };
        });

        const plotthen = Plot.plot({
          color: {
            legend: true,
          },
          height: 600,
          y: {
            tickFormat: (tick: any) => d3.format('~s')(tick).replace('G', 'B'),
            label: 'Amount',
            grid: true,
          },
          x: {
            label: 'Fiscal Year',
          },
          facet: {
            data: totalcityrevenue1,
            y: 'Amount',
          },
          marks: [
            Plot.barY(totalcityrevenue1, {
              x: 'Fiscal Year',
              y: 'Amount',
              fill: 'Category',
              title: (elem: any) =>
                `${elem.Category} ${processEachValueIntoTextMore({
                  value: elem.Category,
                  digits: 2,
                })}`,
            }),
            Plot.ruleY([0]),
          ],
        });

        const revenuesplitbyactivity = addTooltips(plotthen, {
          fill: '#ffffff',
          opacity: 0.5,
          'stroke-width': '4px',
          stroke: '#41ffca',
        });

        if (rev1.current) {
          rev1.current.append(revenuesplitbyactivity);
        }
      }
    );

    d3.csv('/csvforpafr23/revenue-summed-by-fund-type.csv').then(
      (data: any) => {
        const asdf = data.map((d: any) => {
          return {
            ...d,
            'Sum of Revenue': parseInt(d['Sum of Revenue']),
          };
        });

        const facetedRev = addTooltips(
          Plot.plot({
            color: {
              legend: true,
              background: '#212121',
              color: 'white',
            },
            height: 500,
            y: {
              tickFormat: (tick: any) =>
                d3.format('~s')(tick).replace('G', 'B'),
              label: 'Revenue',
            },
            x: { label: 'Year' },
            marks: [
              Plot.barY(asdf, {
                x: 'Year',
                y: 'Sum of Revenue',
                title: (elems: any) =>
                  `${elems['Activity Type']} ${(
                    parseInt(elems['Sum of Revenue']) / 10e8
                  ).toFixed(2)}B`,
                fill: 'Activity Type',
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

        if (rev2.current) {
          rev2.current.append(facetedRev);
          //darkModeTheSvg(rev2.current);

          const darkstyle = document.createElement('style');
          darkstyle.innerHTML =
            '.dark svg[class^="plot-"] {background-color: transparent; color: white;}';

          rev2.current.append(darkstyle);
        }
      }
    );
  }, []);

  return (
    <div className='city-revenue'>
      <h4>Fund Type Stacked</h4>
      <div id='rev-2' ref={rev2}></div>
      <h4>Each Fund Type Breakdown</h4>
      <div id='rev-1' ref={rev1}></div>
    </div>
  );
}
