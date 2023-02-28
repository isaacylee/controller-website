const listofsites = [
  {
    id: 'payroll',
    url: 'https://controllerdata.lacity.org/Payroll/City-Employee-Payroll-Current-/g9h8-fvhu',
  },
  {
    id: 'checkbook',
    url: 'https://controllerdata.lacity.org/Purchasing/Checkbook-L-A-Data/pggv-e4fn',
  },
  {
    id: 'cityfunds',
    url: 'https://controllerdata.lacity.org/Audits-and-Reports/All-City-Funds/ej7u-di9z/',
  },
  {
    id: 'revenue',
    url: 'https://controllerdata.lacity.org/Revenue/City-Revenue/hfus-a659',
  },
];

function fetchall() {
  listofsites.forEach((site) => {
    fetch(site.url)
      .then((response) => response.text())
      .then((data) => {
        console.log(site.url);

        const result = data
          .match(
            /<script type="text\/javascript">[\s]*var initialState =[\s\S]*?<\/script>/gi
          )
          .join('');

        //console.log('result', result);

        console.log(
          'match plz',
          result.match(
            /<script type="text\/javascript">[\s]*var initialState =[\s]*/gi
          )
        );
        console.log('match plz end', result.match(/;[\s]*<\/script>[\s]*/g));

        const socratainfo = result[0]
          .replace(
            /<script type="text\/javascript">[\s]*var initialState =[\s]*/gi,
            ''
          )
          .replace(/;[\s]*<\/script>[\s]*/g, '');

        if (socratainfo) {
          const jsonsocrata = JSON.parse(socratainfo);

          console.log(jsonsocrata);
        }
      });
  });
}

fetchall();
