import * as d3 from 'd3';
import * as React from 'react';

export function Credit() {
  React.useEffect(() => {
    d3.csv('/csvsforpafr22/5ratingsofthecitydebtbyratingagencies.csv').then(
      (data: any) => {
        console.log('credit ratings', data);

        const debttype: any = {};

        data.forEach((d: any) => {
          console.log(d);

          if (debttype[d["City's Debt Type"]] === undefined) {
            debttype[d["City's Debt Type"]] = {};
          }

          if (
            debttype[d["City's Debt Type"]][d['Rating Agency']] === undefined
          ) {
            debttype[d["City's Debt Type"]][d['Rating Agency']] = {};
          }

          debttype[d["City's Debt Type"]][d['Rating Agency']][d.Year] =
            d.Rating;
        });

        console.log('cleaned debt rating', debttype);
      }
    );
  });

  return (
    <>
      <div></div>
    </>
  );
}
