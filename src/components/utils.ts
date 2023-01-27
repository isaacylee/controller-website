export function nFormatter(num: number, digits: number) {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' },
    { value: 1e12, symbol: 'T' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
    : '0';
}

export const processEachValueIntoText = (value: any) => {
  let neg = false;

  if (value < 0) {
    neg = true;
  }

  const absolute = Math.abs(value);

  const text = nFormatter(absolute, 1);
  console.log('value', value, 'result', text);
  if (neg) {
    return `$(${text})`;
  } else {
    return `$${text}`;
  }
};
