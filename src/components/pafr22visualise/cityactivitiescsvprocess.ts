function isvalidnumber(value: string) {
  return !isNaN(Number(value));
}

export function processcsvcityactivities(csvinput: Array<any>) {
  // array of objects

  const firstknownvalueofprogramme: any = {};

  //array list of strings from 2004 to 2022

  const yearsallowed = Array.from(new Array(19), (x, i) => i + 2004).map(
    (bruh) => String(bruh)
  );

  const dataset: any = {};

  csvinput.forEach((eachRow: any) => {
    const nameofindicator = eachRow['OPERATING INDICATOR / ASSET'];
    const nameofdepartment = eachRow['DEPARTMENT'];

    if (typeof dataset[nameofdepartment] === 'undefined') {
      dataset[nameofdepartment] = {};
    }

    if (typeof dataset[nameofdepartment][nameofindicator] === 'undefined') {
      dataset[nameofdepartment][nameofindicator] = eachRow;

      let isConstant = true;

      yearsallowed.forEach((eachYear: string) => {
        const uniqueforthisrow = `${nameofdepartment}-${nameofindicator}`;

        if (isvalidnumber(eachRow[eachYear])) {
          if (
            typeof firstknownvalueofprogramme[uniqueforthisrow] === 'undefined'
          ) {
            firstknownvalueofprogramme[uniqueforthisrow] = eachRow[eachYear];
          } else {
            if (
              firstknownvalueofprogramme[uniqueforthisrow] != eachRow[eachYear]
            ) {
              isConstant = false;
            }
          }
        }
      });

      //if the constant is true, then add it to the list of constants

      dataset[nameofdepartment][nameofindicator]['constant'] = isConstant;
    }
  });

  return dataset;
}
