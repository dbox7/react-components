import Card from '@/components/Card/Card';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next/types';
import { ReactNode } from 'react';

export default function Page({
  children,
  ...props
}: {
  children: ReactNode;
  context: InferGetServerSidePropsType<typeof getServerSideProps>;
}) {
  console.log(props);
  // const router = useRouter();
  // const page = router.query.page;
  return (
    <div>
      {props.data.data.map((item, idx) => (
        <Card key={idx} item={item} />
      ))}
      {children}
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/trending?limit=25&api_key=bCTu4TIIVb1WkVvZTa6KsDy381RPl2Xj`
  );
  const data = await res.json();

  return { props: { data } };
}
