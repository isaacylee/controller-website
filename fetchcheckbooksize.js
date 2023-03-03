//GET https://djkensterprod.lacontroller.io/fetchcheckbookmetaraw

const { exec } = require('child_process');
const fs = require('fs');

fetch('https://djkensterprod.lacontroller.io/fetchcheckbookmetaraw')
  .then((response) => response.json())
  .then((data) => {
    //write the data to a file

    console.log('data', data);
    console.log('writing file');
    fs.writeFileSync(
      __dirname + '/src/checkbookfilesize.json',
      JSON.stringify(data)
    );
    console.log('done writing file');
  });
