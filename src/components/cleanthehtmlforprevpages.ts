export function cleanthehtml(htmlstring: string) {
  const cleanedhtmlstring = htmlstring
    .replace(
      /https:\/\/(www.)?lacontroller.org\/wp-content\//g,
      'https://wpstaticarchive.lacontroller.io/wp-content/'
    )
    .replace(/https:\/\/(www.)?lacontroller.org\//g, '/');

  return cleanedhtmlstring;
}
