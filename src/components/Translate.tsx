import { useEffect } from 'react';
const App = () => {
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
    var addScript = document.createElement('script');
    addScript.setAttribute(
      'src',
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
  return (
    <>
      <div id='google_translate_element'></div>
    </>
  );
};

export default App;
