import Image from 'next/image';

import { notion } from '@/lib/utils';

export default async function Topics({ params }: { params: { slug: string } }) {
  const dbId = process.env.NOTION_DB_ID;
  if (!dbId) {
    console.log('Notion DB ID not set!! Check env var');
    return null;
  }

  const response = await notion.databases.query({
    database_id: dbId,
    filter: {
      property: 'slug',
      formula: {
        string: {
          equals: params.slug,
        },
      },
    },
  });

  const page = response.results[0];
  const pageBlocks = await notion.blocks.children.list({
    block_id: page.id,
  });

  const results = pageBlocks.results as any;
  const title = results[0].heading_1.rich_text[0].plain_text;
  const columnsBlock = await notion.blocks.children.list({
    block_id: results[1].id,
  });
  const column1 = await notion.blocks.children.list({
    block_id: columnsBlock.results[0].id,
  });
  const column2 = await notion.blocks.children.list({
    block_id: columnsBlock.results[1].id,
  });
  const column3 = await notion.blocks.children.list({
    block_id: columnsBlock.results[2].id,
  });
  const columns = [column1, column2, column3];

  return (
    <div>
      {/* <pre>{JSON.stringify(pageBlocks, null, 4)}</pre> */}
      <h1 className='text-2xl font-bold'>{title}</h1>
      <div className='flex flex-row justify-between'>
        {columns.map((it: any) => (
          <div key={it.results[0].id}>
            <h2 className='text-lg font-semibold'>
              {it.results[0].heading_2.rich_text[0].plain_text}
            </h2>
            <p>{}</p>
            <h3>{it.results[0].id}</h3>
            <p>{it.results[1].paragraph.rich_text[0].plain_text}</p>
            <Image
              src={it.results[2].image.file.url}
              alt=''
              width={200}
              height={200}
            />
            {/* <pre>{JSON.stringify(it.results[2].image.file.url, null, 2)}</pre> */}
          </div>
        ))}
      </div>
    </div>
  );
}
