//import d3 from 'd3';
import * as Plot from '@observablehq/plot';
import * as d3 from 'd3';
import * as React from 'react';
import { useEffect, useRef } from 'react';

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

export default function CityRevenue(props: any) {
  //import the csv table from /csvsforpafr22/1totalcityrevenue.csv

  const rev2 = useRef<any>();

  useEffect(() => {
    d3.csv('/csvsforpafr22/1totalcityrevenue.csv').then((data: any) => {
      console.log(data);

      const cleanthedata = data.map((d: any) => {
        return {
          ...d,
          Revenue: parseInt(d['Revenue']),
        };
      });

      // Initialize a SVG area. Note that the width is not specified yet, since unknown

      d3.csv('/csvsforpafr22/city-revenue-summed-by-activity-type.csv').then(
        (data: any) => {
          const asdf = data.map((d: any) => {
            return {
              ...d,
              'Sum of Revenue': parseInt(d['Sum of Revenue']),
            };
          });

          const facetedRev = Plot.plot({
            color: {
              legend: true,
              background: '#212121',
              color: 'white',
            },
            height: 600,
            y: {
              tickFormat: 's',
              label: 'Revenue',
            },
            facet: {
              data: asdf,
              y: 'Activity Type',
            },
            marks: [
              Plot.barY(asdf, {
                x: 'Year',
                y: 'Sum of Revenue',
                title: (elems: any) =>
                  `${(parseInt(elems['Sum of Revenue']) / 10e8).toFixed(2)}B`,
                fill: 'Activity Type',
              }),
              Plot.ruleY([0]),
            ],
          });

          rev2.current.append(facetedRev);
          //darkModeTheSvg(rev2.current);

          const darkstyle = document.createElement('style');
          darkstyle.innerHTML =
            '.dark svg[class^="plot-"] {background-color: transparent; color: white;}';

          rev2.current.append(darkstyle);
        }
      );
    });
  }, []);

  return (
    <div className='city-revenue'>
      <h4>Revenues Stacked</h4>
      <div id='rev-2' ref={rev2}></div>
      <h4>Each Revenue Source over Time</h4>
      <div id='rev-1'></div>
    </div>
  );
}
