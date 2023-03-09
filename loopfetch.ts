import { exec } from 'child_process';

//run the shell script runautofetch.sh every 5 minutes

setInterval(() => {
  exec('sh ./runautofetch.sh', (err, stdout, stderr) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(stdout);
  });
}, 300_000);
