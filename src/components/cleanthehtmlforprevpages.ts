export function cleanthehtml(htmlstring: string) {
  let cleanedhtmlstring = htmlstring
    .replace(
      /https:\/\/(www.)?lacontroller.org\/wp-content\//g,
      'https://wpstaticarchive.lacontroller.io/wp-content/'
    )
    .replace(/https:\/\/(www.)?lacontroller.org\//g, '/');

  const tableaustring =
    '<script src="https://public.tableau.com/javascripts/api/viz_v1.js"></script>';

  const tableauregex =
    /<script src="https:\/\/public.tableau.com\/javascripts\/api\/viz_v1.js"><\/script>/gi;

  if (cleanedhtmlstring.includes(tableaustring)) {
    cleanedhtmlstring = cleanedhtmlstring.replace(tableauregex, '');

    cleanedhtmlstring = tableaustring + cleanedhtmlstring;
  }

  return cleanedhtmlstring;
}
