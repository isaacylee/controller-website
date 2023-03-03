git pull
node scripttofetchtimeofupdate.js
rm -rf tempfile-*
git add .
git commit -m "Updating Socrata Autofetch From Home $(date)"
git push origin master