import * as d3 from 'd3';
import * as React from 'react';

export function Credit() {
  const [allCreditYears, setAllCreditYears] = React.useState<any>([]);
  const [creditData, setCreditData] = React.useState<any>(null);

  const reduceRatingNameOnMobile = (rating: string) => {
    return rating
      .replace(/(Bond)? Rating Agency/gi, '')
      .replace(/Ratings/gi, '')
      .replace(/Investors Service/gi, '')
      .trim();
  };

  React.useEffect(() => {
    d3.csv('/csvsforpafr23/5ratingsofthecitydebtbyratingagencies.csv').then(
      (data: any) => {
        console.log('credit ratings', data);

        const offeredYearsForGeneralBond: any = [];
        const allCreditYearsPre: any = [];
        const generalBondData: any = {};

        data.forEach((d: any) => {
          if (d["City's Debt Type"] === 'General Obligation Bonds') {
            if (offeredYearsForGeneralBond.indexOf(d.Year) === -1) {
              offeredYearsForGeneralBond.push(d.Year);
              offeredYearsForGeneralBond.sort();
            }

            if (allCreditYearsPre.indexOf(d.Year) === -1) {
              allCreditYearsPre.push(d.Year);
              allCreditYearsPre.sort();
            }

            if (!generalBondData[d['Rating Agency']]) {
              generalBondData[d['Rating Agency']] = {};
            }

            generalBondData[d['Rating Agency']][d.Year] = d.Rating;
          }
        });

        setAllCreditYears(allCreditYearsPre);
        console.log('cleaned general bond rating', generalBondData);
        setCreditData({ 'General Obligation Bonds': generalBondData });
      }
    );
  }, []);

  if (!creditData) {
    return <div>Loading...</div>;
  }

  const generalBond = creditData['General Obligation Bonds'];

  return (
    <div className='mt-2'>
      <p className='font-semibold'>General Obligation Bonds</p>
      <table className='border-collapse border border-slate-500'>
        <thead>
          <tr>
            <th>Rating Agency</th>
            {allCreditYears.map((eachYear: any) => (
              <th
                className='w-14 border-collapse border border-gray-500 px-2'
                key={eachYear}
              >
                {eachYear}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(generalBond).map(
            (eachRatingTimeline: Array<any>, index) => (
              <tr key={index}>
                <td className='w-32 border-collapse border border-gray-500 px-2'>
                  {reduceRatingNameOnMobile(eachRatingTimeline[0])}
                </td>
                {allCreditYears.map((eachYear: any) => (
                  <td
                    className='w-14 border-collapse border border-gray-500 px-2'
                    key={eachYear}
                  >
                    {eachRatingTimeline[1][eachYear]?.replace(/ /gi, '') || ''}
                  </td>
                ))}
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
