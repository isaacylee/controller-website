import * as React from 'react';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function NewTranslate() {
  const AttrRemovedRef = React.useRef(false);
  const onlyruntranslateonce = React.useRef(false);

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

  React.useEffect(() => {
    removeAttribution();

    //create script
    const script = document.createElement('script');
    script.innerHTML = `function googleTranslateElementInit()
    {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
      )
    }`;

    document.body.append(script);
  }, []);

  return (
    <div id='googleparent' suppressHydrationWarning={true}>
      <div id='google_translate_element' suppressHydrationWarning={true}></div>
      <script
        src='https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
        async={true}
      ></script>
    </div>
  );
}
