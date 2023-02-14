export function getWidthPlot(sizes: Array<any>): number {
  if (typeof window != 'undefined') {
    let finalnumber = 500;
    sizes.forEach((size) => {
      if (size.fullscreen === true) {
        finalnumber = window.innerWidth - 40;
      } else {
        if (size.screen <= window.innerWidth) {
          finalnumber = size.width;
        }
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
        if (size.height > window.innerHeight) {
          finalnumber = window.innerHeight - 40;
        } else {
          finalnumber = size.height;
        }
      }
    });

    return finalnumber;
  } else {
    return 300;
  }
}
