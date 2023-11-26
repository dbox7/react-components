import Link from 'next/link';
import pageLayout from '../index';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next/types';
import List from '@/components/List/List';
import { useRouter } from 'next/router';
import Details from '@/components/Details/Details';

export default function Page({
  data,
}: {
  data: InferGetServerSidePropsType<typeof getServerSideProps>;
}) {
  console.log(data.detailsData.data);
  const { listData, detailsData } = data;
  return (
    <>
      <List data={listData.data} />
      <Details data={detailsData.data} />
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const slug = context.query.slug;
  const listRes = await fetch(
    `https://api.giphy.com/v1/gifs/trending?limit=25&api_key=bCTu4TIIVb1WkVvZTa6KsDy381RPl2Xj`
  );
  const listData = await listRes.json();
  const gifRes = await fetch(
    `https://api.giphy.com/v1/gifs/TtYT62D5lmuYgJtRNa?api_key=bCTu4TIIVb1WkVvZTa6KsDy381RPl2Xj`
  );
  const detailsData = await gifRes.json();

  return { props: { data: { listData, detailsData } } };
}
