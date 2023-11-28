import { GetServerSidePropsContext } from 'next/types';
import { fetchAllGifs } from '@/utils/api';
import { IGif } from '@/utils/types';

import List from '@/components/List/List';
import Details from '@/components/Details/Details';

interface detailsPageProps {
  listData: { data: IGif[] };
  detailsData: { data: IGif };
}

export default function Page({ data }: { data: detailsPageProps }) {
  const { listData, detailsData } = data;
  return (
    <div className="data__wrap">
      <List data={listData.data} />
      <Details data={detailsData.data} />
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const slug = context.query.slug;
  const query = context.query.q as string;
  const limit = context.query.limit as string;
  const page = context.query.id as string;
  const listData = await fetchAllGifs(query, Number(limit), Number(page));
  const gifRes = await fetch(
    `https://api.giphy.com/v1/gifs/${slug}?api_key=bCTu4TIIVb1WkVvZTa6KsDy381RPl2Xj`
  );
  const detailsData = await gifRes.json();

  return { props: { data: { listData, detailsData } } };
}
