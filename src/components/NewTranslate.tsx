import { useEffect } from 'react';
import * as React from 'react';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function NewTranslate() {
  const AttrRemovedRef = React.useRef(false);

  const removeAttribution = () => {
    const topTranslateElement = document.querySelector(
      '#google_translate_element'
    ) as HTMLElement | null;

    const selectInside = document.querySelector(
      '#google_translate_element > div'
    ) as HTMLElement | null;

    if (AttrRemovedRef.current === false) {
      if (topTranslateElement && selectInside) {
        console.log('element found');
        if (topTranslateElement.innerText.includes('Powered by')) {
          console.log('includes powered by, removing!');
          // selectInside.innerHTML = selectInside.innerHTML.replace(
          //  'Powered by',
          // ''
          //);
          console.log('removed!');
          AttrRemovedRef.current = true;
        }
      }
    }
  };

  useEffect(() => {
    const script = document.createElement('script');

    script.src =
      'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;

    const bruh = document.createElement('script');

    bruh.innerText =
      "function googleTranslateElementInit() {new window.google.translate.TranslateElement({pageLanguage: 'en' },'google_translate_element');}";

    document.body.appendChild(bruh);
    document.body.appendChild(script);

    removeAttribution();

    const stopId = setInterval(() => {
      if (AttrRemovedRef.current === false) {
        removeAttribution();
      } else {
        clearInterval(stopId);
      }
    }, 200);

    return () => {
      document.body.removeChild(bruh);
      document.body.removeChild(script);
    };
  }, []);

  return <div id='google_translate_element'></div>;
}
