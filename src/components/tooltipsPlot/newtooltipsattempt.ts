import * as d3 from 'd3';
// To generate a unique ID for each chart so that they styles only apply to that chart

export function id_generator() {
  const S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return 'a' + S4() + S4();
}

// Function to position the tooltip
export function hover(tip: any, pos: any, text: any) {
  const side_padding = 10;
  const vertical_padding = 5;
  const vertical_offset = 15;

  // Empty it out
  tip.selectAll('*').remove();

  // Append the text
  tip
    .style('text-anchor', 'middle')
    .style('pointer-events', 'none')
    .attr('transform', `translate(${pos[0]}, ${pos[1] + 7})`)
    .selectAll('text')
    .data(text)
    .join('text')
    .style('dominant-baseline', 'ideographic')
    .text((d: any) => d)
    .attr(
      'y',
      (d: any, i: any) => (i - (text.length - 1)) * 15 - vertical_offset
    )
    .style('font-weight', (d: any, i: any) => (i === 0 ? 'bold' : 'normal'));

  const bbox = tip.node().getBBox();

  let hasdark = false;

  if (typeof document != 'undefined') {
    const body = document.querySelector('body');

    if (body) {
      if (body.classList.contains('dark')) {
        hasdark = true;
      }
    }
  }

  // Add a rectangle (as background)
  tip
    .append('rect')
    .attr('y', bbox.y - vertical_padding)
    .attr('x', bbox.x - side_padding)
    .attr('width', bbox.width + side_padding * 2)
    .attr('height', bbox.height + vertical_padding * 2)
    .style('fill', `${hasdark ? '#111827' : 'white'}`)
    .style('stroke', '#d3d3d3')
    .lower();
}

//   addTooltips(plot(options), plotinputoptions.tooltip)};

export function addTooltips(chart: any, styles: any) {
  console.log('chart in the tooltip attempt', chart);

  const stroke_styles = { stroke: 'blue', 'stroke-width': 3 };
  const fill_styles = { fill: 'blue', opacity: 0.5 };

  // Workaround if it's in a figure
  const type = d3.select(chart).node().tagName;
  let wrapper: any =
    type === 'FIGURE' ? d3.select(chart).select('svg') : d3.select(chart);

  console.log('wrapper', wrapper);

  console.log('chart', chart);

  // Workaround if there's a legend....
  const svgs: any = d3.select(chart).selectAll('svg');

  console.log('svgs', svgs);

  if (svgs.size() > 1) {
    if (typeof svgs._groups != 'undefined') {
      // const selectiond3forpop = [...svgs._groups[0]].pop();

      const selectiond3forpop: any = [...svgs._groups[0]].slice(-1)[0];

      console.log('selectiond3forpop', selectiond3forpop);

      wrapper = d3.select(selectiond3forpop);

      console.log('set wrapper as', wrapper);
    } else {
      console.log('no svg');
    }
  }
  wrapper.style('overflow', 'visible'); // to avoid clipping at the edges

  // Set pointer events to visibleStroke if the fill is none (e.g., if its a line)
  wrapper.selectAll('path').each((data: any, index: any, nodes: any) => {
    // For line charts, set the pointer events to be visible stroke
    if (d3.select(nodes)) {
      if (
        d3.select(nodes).attr('fill') === null ||
        d3.select(nodes).attr('fill') === 'none'
      ) {
        d3.select(nodes).style('pointer-events', 'visibleStroke');
        if (styles === undefined) styles = stroke_styles;
      }
    }
  });

  if (styles === undefined) styles = fill_styles;

  const tip = wrapper
    .selectAll('.hover')
    .data([1])
    .join('g')
    .attr('class', 'hover')
    .style('pointer-events', 'none')
    .style('text-anchor', 'middle');

  // Add a unique id to the chart for styling
  const id = id_generator();

  // Add the event listeners
  d3.select(chart).classed(id, true); // using a class selector so that it doesn't overwrite the ID

  console.log('wrapper selectAll Title result', wrapper.selectAll('title'));

  wrapper.selectAll('title')._groups[0].forEach((allthetitles: any) => {
    console.log('all the titles', allthetitles);

    // Get the text out of the title, set it as an attribute on the parent, and remove it
    const title = d3.select(allthetitles); // title element that we want to remove

    //console.log("allthetitles", allthetitles)

    const parent = d3.select(allthetitles.parentNode); // visual mark on the screen
    const t = title.text();
    if (t) {
      parent.attr('__title', t).classed('has-title', true);
      title.remove();
    }
    // Mouse events
    parent
      .on('pointerenter pointermove', function (event) {
        const text = d3.select(this).attr('__title');
        const pointer = d3.pointer(event, wrapper.node());
        if (text) tip.call(hover, pointer, text.split('\n'));
        else tip.selectAll('*').remove();

        // Raise it
        d3.select(this).raise();
        // Keep within the parent horizontally
        const tipSize = tip.node().getBBox();
        if (pointer[0] + tipSize.x < 0)
          tip.attr(
            'transform',
            `translate(${tipSize.width / 2}, ${pointer[1] + 7})`
          );
        else if (pointer[0] + tipSize.width / 2 > wrapper.attr('width'))
          tip.attr(
            'transform',
            `translate(${wrapper.attr('width') - tipSize.width / 2}, ${
              pointer[1] + 7
            })`
          );
      })
      .on('pointerout', function (event) {
        tip.selectAll('*').remove();
        // Lower it!
        d3.select(this).lower();
      });
  });

  // Remove the tip if you tap on the wrapper (for mobile)
  wrapper.on('touchstart', () => tip.selectAll('*').remove());

  // Define the styles
  /*

  chart.appendChild(`<style>
  .${id} .has-title { cursor: pointer;  pointer-events: all; }
  .${id} .has-title:hover { ${Object.entries(styles)
    .map(([key, value]) => `${key}: ${value};`)
    .join(' ')} }`);

  */

  //make a style element
  const stylefortooltip = document.createElement('style');

  //set inner html
  stylefortooltip.innerHTML = `<style>
    .${id} .has-title { cursor: pointer;  pointer-events: all; }
    .${id} .has-title:hover { ${Object.entries(styles)
    .map(([key, value]) => `${key}: ${value};`)
    .join(' ')} }`;

  chart.appendChild(stylefortooltip);

  return chart;
}
