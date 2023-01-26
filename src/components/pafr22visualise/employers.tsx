import * as d3 from 'd3';
import * as React from 'react';

export function Employers() {
  const renderChart = (data, columns) => {
    const table = d3.select('#employerchart').append('table');
    const thead = table.append('thead');
    const tbody = table.append('tbody');

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
      .text(function (d: any) {
        return d.value;
      });

    return table;
  };
  React.useEffect(() => {
    d3.csv('/csvsforpafr22/employers-1.csv').then((data: any) => {
      const columns = [
        'Employer	2022 Employees',
        '2022 Rank',
        '2013 Percentage of Total County Employment',
        '2013 Employees',
        '2013 Rank',
        '2013 Percentage of Total County Employment',
      ];
      renderChart(data, columns);
      return true;
    });
  }, []);

  return (
    <div>
      <h3>Top Employers in Los Angeles County</h3>
      <div id='employerchart'></div>
    </div>
  );
}
