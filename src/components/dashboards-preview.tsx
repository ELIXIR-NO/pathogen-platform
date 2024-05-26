import { notion } from '@/lib/utils';
import {
  isFullBlock,
  isFullPage,
  isFullPageOrDatabase,
} from '@notionhq/client';
import {
  DatabaseObjectResponse,
  PageObjectResponse,
  RichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default async function DashboardsPreview() {
  const dbId = process.env.NOTION_DB_ID;
  if (!dbId) {
    console.log('Notion DB ID not set!! Check env var');
    return null;
  }

  const dbResponse = await notion.databases.query({
    database_id: dbId,
    filter: {
      property: 'tags',
      multi_select: {
        contains: 'Pandemic preparedness',
      },
    },
  });

  const pages = dbResponse.results;

  const dashboardItems: PageSummary[] = pages.map((page: any) => ({
    title: page.properties?.page?.title[0]?.plain_text ?? '',
    tags: page.properties?.tags?.multi_select.map((tag: any) => tag.name) ?? [],
    slug: page.properties?.slug?.rich_text[0]?.plain_text ?? '',
    summary: page.properties?.summary?.rich_text[0]?.plain_text ?? '',
    id: page.id,
  }));

  return (
    <div className='flex flex-col space-y-4'>
      <div>
        <h2 className='text-2xl font-semibold'>Pandemic Preparedness</h2>
        <div className='flex flex-row space-x-4'>
          {dashboardItems.map(DashBoardItem)}
          {/* <pre>{JSON.stringify(pages, null, 4)}</pre> */}
        </div>
      </div>
    </div>
  );
}

type PageSummary = {
  title: string;
  tags: string[];
  slug: string;
  summary: string;
  id: string;
};

function DashBoardItem(item: PageSummary) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{item.summary}</p>
      </CardContent>
    </Card>
  );
}
