import * as d3 from 'd3';
import * as React from 'react';

export function Credit() {
  const [offeredyearsforeachbondGlobal, setOfferedYearsForEachBondGlobal] =
    React.useState<any>({});
  const [allcredityears, setAllCreditYears] = React.useState<any>([]);
  const [creditdata, setCreditData] = React.useState<any>(null);

  const reduceRatingNameOnMobile = (rating: string) => {
    return rating
      .replace(/(Bond)? Rating Agency/gi, '')
      .replace(/Ratings/gi, '')
      .replace(/Investors Service/gi, '')
      .trim();
  };

  React.useEffect(() => {
    d3.csv('/csvsforpafr22/5ratingsofthecitydebtbyratingagencies.csv').then(
      (data: any) => {
        // console.log('credit ratings', data);

        const debttype: any = {};
        const offeredyearsforeachbond: any = {};
        const allcredityearspre: any = [];

        data.forEach((d: any) => {
          //  console.log(d);

          if (debttype[d["City's Debt Type"]] === undefined) {
            debttype[d["City's Debt Type"]] = {};
            offeredyearsforeachbond[d["City's Debt Type"]] = [];
          }

          //add year to offered years if not already there
          if (
            offeredyearsforeachbond[d["City's Debt Type"]].indexOf(d.Year) ===
            -1
          ) {
            offeredyearsforeachbond[d["City's Debt Type"]].push(d.Year);
            offeredyearsforeachbond[d["City's Debt Type"]].sort();
          }

          if (allcredityearspre.indexOf(d.Year) === -1) {
            allcredityearspre.push(d.Year);
            allcredityearspre.sort();
          }

          if (
            debttype[d["City's Debt Type"]][d['Rating Agency']] === undefined
          ) {
            debttype[d["City's Debt Type"]][d['Rating Agency']] = {};
          }

          debttype[d["City's Debt Type"]][d['Rating Agency']][d.Year] =
            d.Rating;
        });

        setAllCreditYears(allcredityearspre);
        // console.log('cleaned debt rating', debttype);
        setOfferedYearsForEachBondGlobal(offeredyearsforeachbond);
        setCreditData(debttype);
      }
    );
  }, []);

  return (
    <>
      <div className='md:grid-cols-2 lg:grid'>
        {creditdata &&
          Object.entries(creditdata).map((eachbond: any, keynumber: number) => (
            <div key={keynumber} className='mt-2'>
              <p className='font-semibold'>{eachbond[0]}</p>
              <table className='border-collapse border border-slate-500'>
                <thead>
                  <tr>
                    <th>Rating Agency</th>
                    {allcredityears.map((eachYear: any) =>
                      offeredyearsforeachbondGlobal[eachbond[0]].indexOf(
                        eachYear
                      ) !== -1 ? (
                        <th
                          className='w-14 border-collapse border border-gray-500 px-2'
                          key={eachYear}
                        >
                          {eachYear}
                        </th>
                      ) : (
                        <th
                          className='w-14 border-collapse border border-gray-500 px-2'
                          key={eachYear}
                        ></th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(eachbond[1]).map(
                    (eachRatingTimeline: Array<any>, eachnumber2) => {
                      return (
                        <tr key={eachnumber2}>
                          <td className='w-32 border-collapse border border-gray-500 px-2'>
                            {reduceRatingNameOnMobile(eachRatingTimeline[0])}
                          </td>
                          {allcredityears.map((eachYear: any) =>
                            offeredyearsforeachbondGlobal[eachbond[0]].indexOf(
                              eachYear
                            ) !== -1 ? (
                              <td
                                className='w-14 border-collapse border border-gray-500 px-2'
                                key={eachYear}
                              >
                                {eachRatingTimeline[1][eachYear].replace(
                                  / /gi,
                                  ''
                                )}
                              </td>
                            ) : (
                              <th
                                className='w-14s border-collapse border border-gray-500 px-2'
                                key={eachYear}
                              ></th>
                            )
                          )}
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </div>
          ))}
      </div>
    </>
  );
}
