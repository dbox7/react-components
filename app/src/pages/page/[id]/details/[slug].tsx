import Link from 'next/link';
import pageLayout from '../index';
import { InferGetServerSidePropsType } from 'next/types';
import List from '@/components/List/List';
import { useRouter } from 'next/router';

export default function Page({
  data,
}: {
  data: InferGetServerSidePropsType<typeof getServerSideProps>;
}) {
  const router = useRouter();
  return (
    <>
      <List data={data.data} />
      <Link href={`/page/${router.query.id}`}>Close</Link>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/trending?limit=25&api_key=bCTu4TIIVb1WkVvZTa6KsDy381RPl2Xj`
  );
  const data = await res.json();

  return { props: { data } };
}
