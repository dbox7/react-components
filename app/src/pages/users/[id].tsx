import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

export default function Page({ children }: { children: ReactNode }) {
  const router = useRouter();
  const page = router.query.page;
  return (
    <div>
      <Link href={`details`}>page: {page}</Link>;{children}
    </div>
  );
}
