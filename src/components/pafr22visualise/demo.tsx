import * as d3 from 'd3';
import * as React from 'react';

export function Demographics() {
  const renderChart = (data: any, columns: string[]) => {
    const table = d3
      .select('#demograchart')
      .append('table')
      .attr('class', 'divide-y divide-gray-200 dark:divide-gray-500');
    const thead = table
      .append('thead')
      .attr('class', 'bg-gray-50 dark:bg-gray-800');
    const tbody = table
      .append('tbody')
      .attr(
        'class',
        'divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900'
      );

    thead
      .append('tr')
      .selectAll('th')
      .data(columns)
      .enter()
      .append('th')
      .attr('class', 'px-2 text-wrap max-w-xs')
      .text((d: any) => {
        return d;
      });

    const rows = tbody.selectAll('tr').data(data).enter().append('tr');

    const cells = rows
      .selectAll('td')
      .data(function (row: any) {
        return columns.map(function (column) {
          return { column: column, value: row[column] };
        });
      })
      .enter()
      .append('td')
      .attr('class', '')
      .text(function (d: any) {
        return d.value;
      });

    return table;
  };
  React.useEffect(() => {
    d3.csv('/csvsforpafr22/demogra.csv').then((data: any) => {
      const columns = [
        'Fiscal Year',
        'Estimated Population',
        'Personal Income (in thousands)',
        'Personal Income Per Capita',
        'Median Age',
        'Public School Enrollment',
        'Unemployment Rate',
      ];
      renderChart(data, columns);
      return true;
    });
  }, []);

  return (
    <div>
      <h3>City of LA Demographics</h3>
      <div id='demograchart' className='overflow-x-auto'></div>
    </div>
  );
}
