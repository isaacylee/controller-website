import { useEffect } from 'react';
import * as React from 'react';
export default function Translate() {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'en,es,ko,zh-CN,tl,th,vi,fa,hy,ru',
        autoDisplay: false,
      },
      'google_translate_element'
    );
  };
  useEffect(() => {
    const addScript = document.createElement('script');
    addScript.setAttribute(
      'src',
      'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
  return (
    <>
      <div id='google_translate_element'></div>
    </>
  );
}
