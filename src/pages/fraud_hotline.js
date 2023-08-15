import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function FraudHotline() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/fwa');
  }, []);

  return null; // This component doesn't render anything
}
