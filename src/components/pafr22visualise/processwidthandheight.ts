export function getWidthPlot(sizes: Array<any>): number {
  if (typeof window != 'undefined') {
    let finalnumber = 500;

    sizes.forEach((size) => {
      if (size.screen <= window.innerWidth) {
        finalnumber = size.width;
      }
    });

    return finalnumber;
  } else {
    return 300;
  }
}

export function getHeightPlot(sizes: Array<any>): number {
  if (typeof window != 'undefined') {
    let finalnumber = 500;

    sizes.forEach((size) => {
      if (size.screen <= window.innerWidth) {
        finalnumber = size.height;
      }
    });

    return finalnumber;
  } else {
    return 300;
  }
}
