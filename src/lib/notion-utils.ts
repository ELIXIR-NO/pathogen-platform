import { Client } from '@notionhq/client';

export const notion = new Client({
  auth: process.env.NOTION_API_SECRET,
});

const dbId = process.env.NOTION_DB_ID || '';
if (dbId === '') {
  throw new Error('Notion DB ID not set!! Check env var');
}

export async function getNotionPagesWithTag(tag: string) {
  const pages = await notion.databases.query({
    database_id: dbId,
    filter: {
      property: 'tags',
      multi_select: {
        contains: tag,
      },
    },
  });

  return pages.results;
}
