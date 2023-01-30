import * as d3 from 'd3';
import * as React from 'react';

import { processcsvcityactivities } from './cityactivitiescsvprocess';

export function CityActivities() {
  const [cleaneddataset, setCleaneddataset] = React.useState<any>(null);
  const puttheplotsinhere = React.useRef<any>(null);

  const [selectedDepartment, setSelectedDepartment] =
    React.useState<string>('Aging');

  React.useEffect(() => {
    d3.csv('/csvsforpafr22/9cityactivities.csv').then((data: any) => {
      setCleaneddataset(processcsvcityactivities(data));

      // console.log(cleaneddataset, 'cleaneddataset');
    });
  }, []);

  React.useEffect(() => {
    console.log(cleaneddataset, 'cleaneddataset');
  }, [cleaneddataset]);

  return (
    <>
      <div ref={puttheplotsinhere}></div>
    </>
  );
}
