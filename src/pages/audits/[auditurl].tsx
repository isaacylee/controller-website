import * as React from 'react';
import { titleCase } from 'true-case';

import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';

import auditsfull from '../../auditsfull.json';

export default function Audit(props: any) {
  return (
    <>
      <Navbar />
      <Seo />
      <main>
        <div className=' container mx-4 px-4 pb-3 pt-5 lg:mx-auto lg:max-w-7xl'>
          <h1 className='font-sm'>{props.audit.name}</h1>
          <h3>
            <span className='font-normal'>{props.audit.year} </span>
            {titleCase(props.audit.dept)}
          </h3>
        </div>
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
