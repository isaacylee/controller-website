git pull
node scripttofetchtimeofupdate.js
node fetchcheckbooksize.js
rm -rf tempfile-*
git add .
git commit -m "Updating Socrata Autofetch From Home $(date)"
git push origin main