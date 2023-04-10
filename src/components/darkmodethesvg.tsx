export function insertDarkModed3() {
  const darkstyle = document.createElement('style');
  darkstyle.innerHTML =
    '.dark svg[class^="plot-"] {background-color: transparent; color: white;}';

  return darkstyle;
}
