import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    const query = localStorage.getItem('search');
    router.push(`page/1?limit=25${query ? `&q=${query}` : ''}`);
  });
}
