import List from '@/components/List/List';
import { fetchAllGifs } from '@/utils/api';
import { GetServerSidePropsContext } from 'next/types';
import { IGif } from '@/utils/types';

export default function Page({ data }: { data: { data: IGif[] } }) {
  return (
    <div className="data__wrap">
      <List data={data.data} />
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const page = context.query.id as string;
  const query = context.query.q as string;
  const limit = context.query.limit as string;
  const data = await fetchAllGifs(query, Number(limit), Number(page));

  return { props: { data } };
}
