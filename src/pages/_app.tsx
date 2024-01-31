import { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import * as React from 'react';
import TagManager from 'react-gtm-module';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';
import '@/styles/sglobal.css';

import { ThemeContext } from './../themeManager';
/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */
//G-EPEH5SFW1V
const tagManagerArgs = {
  gtmId: 'G-DF7TCXWPKS',
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  });

  useEffect(() => {
    const htmlSelected = document.querySelector('html');
    if (htmlSelected) {
      htmlSelected.classList.add('dark');
    }
  }, []);

  const [darkmode, setdarkmode] = useState<boolean | null>(null);

  const [currentColour, setCurrentColour] = useState<string>('system');

  const dontburnmyeyes = () => {
    const bodySelected = document.querySelector('body');

    if (bodySelected) {
      bodySelected.classList.remove('dontburnmyeyesoutplz');
    }
  };

  function updateSystem() {
    let tosetcolour = 'system';

    if (typeof document !== 'undefined') {
      console.log('inside document');
      const bodySelected = document.querySelector('body');
      const htmlSelected = document.querySelector('html');

      if (localStorage.theme === 'dark') {
        tosetcolour = 'dark';
      }
      if (localStorage.theme === 'light') {
        tosetcolour = 'light';
      }

      if (currentColour !== tosetcolour) {
        setCurrentColour(tosetcolour);
      }

      if (typeof window != undefined) {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (
          localStorage.theme === 'dark' ||
          (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
          if (bodySelected) {
            bodySelected.classList.add('dark');
            bodySelected.classList.add('dark:bg-bruhdark');
            bodySelected.classList.add('dark:bg-bruhdark');
          }

          if (htmlSelected) {
            htmlSelected.classList.add('dark');
          }
        } else {
          if (bodySelected) {
            bodySelected.classList.remove('dark');
            dontburnmyeyes();
          }

          if (htmlSelected) {
            htmlSelected.classList.remove('dark');
          }
        }
      }
    }
  }

  function makeLight() {
    console.log('make light');
    // Whenever the user explicitly chooses light mode
    localStorage.theme = 'light';
    updateSystem();
    dontburnmyeyes();
  }

  function makeDark() {
    // Whenever the user explicitly chooses dark mode
    console.log('make dark');
    localStorage.theme = 'dark';
    updateSystem();
  }

  function makeSystem() {
    // Whenever the user explicitly chooses to respect the OS preference
    console.log('make sys');
    localStorage.removeItem('theme');
    updateSystem();
    dontburnmyeyes();
  }

  updateSystem();

  const themeChanger: any = {
    makeLight,
    makeDark,
    makeSystem,
    updateSystem,
    currentColour,
  };

  useEffect(() => {
    updateSystem();
  });

  return (
    <ThemeContext.Provider value={themeChanger}>
      <Head>
        {/* Google Analytics tracking code */}
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-DF7TCXWPKS'
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DF7TCXWPKS');
            `,
          }}
        />
      </Head>

      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default MyApp;
