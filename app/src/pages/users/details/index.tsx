import Link from 'next/link';
import users from '../[id]';

export default function Page() {
  return <Link href={'1'}>Details</Link>;
}

Page.Layout = users;
