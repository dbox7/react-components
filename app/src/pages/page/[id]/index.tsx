import Card from '@/components/Card/Card';
import List from '@/components/List/List';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next/types';
import { ReactNode } from 'react';

export default function Page({
  data,
}: {
  data: InferGetServerSidePropsType<typeof getServerSideProps>;
}) {
  console.log('props: ', data);
  // const router = useRouter();
  // const page = router.query.page;
  return (
    <div>
      <List data={data.data} />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/trending?limit=25&api_key=bCTu4TIIVb1WkVvZTa6KsDy381RPl2Xj`
  );
  const data = await res.json();

  return { props: { data } };
}
