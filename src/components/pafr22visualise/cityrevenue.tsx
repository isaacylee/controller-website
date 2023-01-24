//import d3 from 'd3';
import * as d3 from 'd3';
import * as React from 'react';
import { useEffect } from 'react';

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

export default function CityRevenue(props: any) {
  //import the csv table from /csvsforpafr22/1totalcityrevenue.csv

  useEffect(() => {
    d3.csv('/csvsforpafr22/1totalcityrevenue.csv').then((data: any) => {
      console.log(data);

      const cleanthedata = data.map((d: any) => {
        return {
          ...d,
          Revenue: parseInt(d['Revenue']),
        };
      });

      console.log(cleanthedata);

      // Initialize a SVG area. Note that the width is not specified yet, since unknown

      d3.select('#rev-1')
        .append('svg')
        .attr('width', 500)
        .attr('height', 600)
        .call(responsivefy);
    });
  }, []);

  return (
    <div className='city-revenue'>
      <h4>Each Revenue Source over Time</h4>
      <div id='rev-1'></div>
      <h4>Revenues Stacked</h4>
      <div id='rev-2'></div>
    </div>
  );
}
