import React, {useEffect,useState} from 'react';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';


export default function InterimHousing() {
  const [backgroundSize, setBackgroundSize] = useState('75%');
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1200) {
        setBackgroundSize('85% auto');
      } else {
        setBackgroundSize('75% auto');
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const buttonStyle = {
    backgroundColor: '#41ffca',
    color: 'black',
    padding: '10px 20px',
    margin: '0 10px',
    textDecoration: 'none',
    borderRadius: '5px',
    display: 'inline-block',
  };

  return(
    <>
          <Navbar />
      <Layout>
        <div
          className='pt-1'
          style={{
            background: 'url(/images/homelessaudit-sheltercover-site.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize,
            backgroundPosition: 'top center',
            width: '100%',
            height: '100vh',
            paddingBottom: '30%', // Set a responsive aspect ratio (adjust as needed)
          }}
        ></div>
      </Layout>
    </>
  )
};