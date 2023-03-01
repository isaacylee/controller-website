const { exec } = require('child_process');
const fs = require('fs');

const listofsitestowrite = {};

const listofsites = [
  {
    id: 'payroll',
    url: 'https://controllerdata.lacity.org/Payroll/City-Employee-Payroll-Current-/g9h8-fvhu',
  },
  {
    id: 'checkbook',
    url: 'https://controllerdata.lacity.org/Purchasing/Checkbook-L-A-Data/pggv-e4fn',
    dontfetchcsv: true,
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
  listofsites.forEach(async (site) => {
    await fetch(site.url)
      .then((response) => response.text())
      .then(async (data) => {
        console.log(site.url);

        const result = data
          .match(
            /<script type="text\/javascript">[\s]*var initialState =[\s\S]*?<\/script>/
          )
          .join('');

        console.log('result', result.length);

        console.log(typeof result, 'typeof result');

        const matchbeg =
          /<script type="text\/javascript">[\s]*var initialState =/gi;

        const matchend = /;[\s]*<\/script>[\s]*/gi;

        //console.log('match plz', result.match(matchbeg)[0]);
        //sconsole.log('match plz end', result.match(matchend)[0]);

        const socratainfo = result.replace(matchbeg, '').replace(matchend, '');

        console.log('length', socratainfo.length);

        console.log('typeof socratainfo', typeof socratainfo);

        // console.log('socratainfo', socratainfo);

        if (socratainfo) {
          const jsonsocrata = JSON.parse(socratainfo);

          //console.log(jsonsocrata);

          const rowCount = jsonsocrata.view.columns[0].cachedContents.non_null;

          console.log('rowCount', rowCount);

          const thingtoset = {
            rowCount: Number(rowCount),
            lastUpdatedAt: jsonsocrata.view.lastUpdatedAt,
            createdAt: jsonsocrata.view.createdAt,
            id: site.id,
          };

          listofsitestowrite[site.id] = thingtoset;

          if (site.dontfetchcsv) {
            console.log('skipping csv');
          } else {
            //jsonsocrata.view.csvResourceUrl

            //trigger download via wget
            const csvurl = jsonsocrata.view.csvResourceUrl;

            const nameoffile = `tempfile-${Date.now()}-${Math.round(
              Math.random() * 1000000
            )}`;

            console.log('downloading csv', csvurl);
            await exec(
              'wget ' + csvurl + ' -O ' + nameoffile,
              async (error, stdout, stderr) => {
                console.log('done downloading');
                if (error) {
                  console.log(`error: ${error.message}`);
                  return;
                }
                if (stderr) {
                  console.log(`stderr: ${stderr}`);

                  const fileSizeInBytes = fs.statSync(nameoffile).size;

                  console.log('fileSizeInBytes', fileSizeInBytes);

                  await exec('rm -rf' + nameoffile, (error, stdout, stderr) => {
                    console.log('delete the file');
                  });

                  thingtoset.csvsize = fileSizeInBytes;
                  console.log(thingtoset);

                  listofsitestowrite[site.id] = thingtoset;

                  console.log(
                    'Object.values(listofsitestowrite).length',
                    Object.values(listofsitestowrite).length
                  );
                  console.log('listofsites.length', listofsites.length);
                  if (
                    Object.values(listofsitestowrite).length ===
                    listofsites.length
                  ) {
                    console.log('length of sets match pt 1');
                    if (
                      Object.values(listofsitestowrite).filter(
                        (e) => e.csvsize === undefined
                      ).length ===
                      listofsites.filter((a) => a.dontfetchcsv).length
                    ) {
                      console.log(
                        'done downloading all csvs! writing file now'
                      );

                      fs.writeFileSync(
                        __dirname + '/opendatasizes.json',
                        JSON.stringify(listofsitestowrite)
                      );
                    }
                  }
                }
              }
            );
          }
        }
      });
  });
}

fetchall();
