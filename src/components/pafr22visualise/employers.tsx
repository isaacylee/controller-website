import * as d3 from 'd3';
import * as React from 'react';

export function Employers() {
  const renderChart = (data: any, columns: string[]) => {
    const table = d3
      .select('#employerchart')
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
    d3.csv('/csvsforpafr22/employers-1.csv').then((data: any) => {
      const columns = [
        'Employer',
        '22 Employees',
        '22 Rank',
        '13 % of Total Employment',
        '13 Employees',
        '13 Rank',
        '13 % of Total Employment',
      ];
      renderChart(data, columns);
      return true;
    });
  }, []);

  return (
    <div>
      <h3>Top Employers in Los Angeles County 2022 vs 2013</h3>
      <div id='employerchart' className='overflow-x-auto'></div>
    </div>
  );
}
