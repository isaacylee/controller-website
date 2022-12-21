import Link from 'next/link';
import * as React from 'react';
import { titleCase } from 'true-case';

import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';

import auditsfull from '../../auditsfull.json';

interface eachaudit {
  name: string;
  year: number | string;
  dept: string;
  link: string;
  pdflink: string;
  textofpage: string;
  htmlofpage: string;
}

interface auditinterface {
  audit: eachaudit;
}

export default function Audit(props: auditinterface) {
  return (
    <>
      <Navbar />
      <Seo />
      <main>
        {props.audit && (
          <div className=' container mx-4 px-4 pb-3 pt-5 lg:mx-auto lg:max-w-7xl'>
            <h1 className='font-sm'>{props.audit.name}</h1>
            <h3>
              <span className='font-normal'>{props.audit.year} </span>
              {props.audit.dept && (
                <span>
                  {' '}
                  {titleCase(props.audit.dept).replace(/( )?department/gi, '')}
                </span>
              )}
            </h3>
            <div className='flex flex-row gap-x-2'>
              <Link href={props.audit.pdflink}>
                <button className='rounded-full bg-black px-3 py-1 font-semibold text-white'>
                  View PDF
                </button>
              </Link>
              <Link download={true} href={props.audit.pdflink}>
                <button className='rounded-full bg-black p-1.5 text-white md:p-2'>
                  <svg className='l-4 h-4' viewBox='0 0 24 24'>
                    <path
                      fill='currentColor'
                      d='M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z'
                    />
                  </svg>
                </button>
              </Link>
            </div>

            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html: props.audit.htmlofpage,
                }}
              ></div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const auditurl = context.params.auditurl;

  //illegally cast to any type because nextjs doesnt recognize it
  const auditsfullbroken: any = auditsfull;

  const returnedaudit: any = auditsfullbroken[auditurl];

  if (returnedaudit == undefined) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        audit: returnedaudit,
      },
    };
  }
}
