git pull
git config user.email "126627495+StrawberryToastLosAngeles@users.noreply.github.com"
git config user.name "StrawberryToastLosAngeles" 
node scripttofetchtimeofupdate.js
node fetchcheckbooksize.js
rm -rf tempfile-*
git add .
git commit -m "Updating Socrata Autofetch From Home $(date)"
git push origin main
