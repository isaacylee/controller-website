import * as React from 'react';

import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';

import auditsfull from '../../auditsfull.json';

export default function Audit(props: any) {
  return (
    <>
      <Navbar />
      <Seo />
      <main>
        <div className='container'>
          <h1>{props.audit.name}</h1>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const auditurl = context.params.auditurl;

  const returnedaudit: any = auditsfull[auditurl];

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
