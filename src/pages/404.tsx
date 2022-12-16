import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle='Not Found' />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-[80vh] flex-col items-center justify-center text-center text-black'>
            {false && (
              <RiAlarmWarningFill
                size={60}
                className='drop-shadow-glow animate-flicker text-red-500'
              />
            )}

            <img
              src='/images/corgi-happy-cropped.png'
              className='w-32 lg:w-64'
            ></img>

            <h1 className='mt-8 text-4xl md:text-6xl'>
              Uh oh! The corgi couldn't fetch the page!
            </h1>
            <ArrowLink className='mt-4 md:text-lg' href='/'>
              Back to Home
            </ArrowLink>
          </div>
        </section>
      </main>
    </Layout>
  );
}
