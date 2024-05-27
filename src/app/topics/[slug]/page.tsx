import Image from 'next/image';
import {
  BlockObjectResponse,
  ChildPageBlockObjectResponse,
  ColumnBlockObjectResponse,
  Heading1BlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { isFullBlock } from '@notionhq/client';

import { notion } from '@/lib/notion-utils';

export default async function Topics({ params }: { params: { slug: string } }) {
  const dbId = process.env.NOTION_DB_ID;
  if (!dbId) {
    console.log('Notion DB ID not set!! Check env var');
    return null;
  }

  const dbResponse = await notion.databases.query({
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

  const page = dbResponse.results[0];

  const pageBlocks = await notion.blocks.children.list({
    block_id: page.id,
  });
  const pageBlocksResponse = pageBlocks.results;

  // const h1Block = pageBlocksResponse.find(
  //   it => isFullBlock(it) && it.type === 'heading_1'
  // ) as Heading1BlockObjectResponse | undefined;
  // if (!h1Block) {
  //   throw new Error('Missing H1');
  // }
  // const title = h1Block.heading_1.rich_text[0].plain_text;

  // const columnsBlock = pageBlocksResponse.find(
  //   it => isFullBlock(it) && it.type === 'column_list'
  // ) as ColumnBlockObjectResponse | undefined;
  // if (!columnsBlock) {
  //   throw new Error('Missing columns');
  // }

  // const columnsResponse = await notion.blocks.children.list({
  //   block_id: columnsBlock.id,
  // });
  // const columns = columnsResponse.results as ColumnBlockObjectResponse[];
  // const columnChildrenIds = columns.map(it => it.id);
  // const columnChildrenPromises = columnChildrenIds.map(it =>
  //   notion.blocks.children.list({ block_id: it })
  // );

  // const columnChildren = await Promise.all(columnChildrenPromises);

  return (
    <div>
      <pre>{JSON.stringify(pageBlocksResponse, null, 4)}</pre>
    </div>
  );
}
