import Link from 'next/link';
import pageLayout from '../index';

export default function Page() {
  return <Link href={'1'}>Details</Link>;
}

Page.Layout = pageLayout;
