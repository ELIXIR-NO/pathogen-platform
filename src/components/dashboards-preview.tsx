import { getNotionPagesWithTag } from '@/lib/notion-utils';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export default async function DashboardsPreview() {
  const pandemicPreparednessPages = await getNotionPagesWithTag(
    'Pandemic preparedness'
  );

  const pandemicPreparednessDashboardItems = getDashboardDetails(
    pandemicPreparednessPages as PageObjectResponse[]
  );

  const covidPages = await getNotionPagesWithTag('Covid-19');
  const covidDashboardItems = getDashboardDetails(
    covidPages as PageObjectResponse[]
  );

  const infectiousDiseasesPages =
    await getNotionPagesWithTag('Infectious disease');
  const infectiousDiseasesDashboardItems = getDashboardDetails(
    infectiousDiseasesPages as PageObjectResponse[]
  ).slice(0, 3);

  return (
    <div className='flex flex-col space-y-4'>
      <div>
        <h2 className='text-2xl font-semibold'>Pandemic Preparedness</h2>
        <div className='flex flex-row space-x-4'>
          {pandemicPreparednessDashboardItems.map(it =>
            DashBoardItem(it, it.id)
          )}
        </div>
      </div>
      <div>
        <h2 className='text-2xl font-semibold'>Covid 19</h2>
        <div className='flex flex-row space-x-4'>
          {covidDashboardItems.map(it => DashBoardItem(it, it.id))}
        </div>
      </div>
      <div>
        <h2 className='text-2xl font-semibold'>Infectious Diseases</h2>
        <div className='flex flex-row space-x-4'>
          {infectiousDiseasesDashboardItems.map(it => DashBoardItem(it, it.id))}
        </div>
      </div>
    </div>
  );
}

type PageSummary = {
  id: string;
  title: string;
  tags: string[];
  slug: string;
  relative_link: string;
  summary: string;
};

function DashBoardItem(item: PageSummary, key: string) {
  return (
    <Card key={key}>
      <CardHeader>
        <CardTitle className='text-center capitalize'>{item.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-justify'>{item.summary}</p>
      </CardContent>
      <CardFooter className='flex flex-row items-center justify-center'>
        <Button className='relative'>
          <Link href={`${item.relative_link}/${item.slug}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

function getDashboardDetails(page: PageObjectResponse[]): PageSummary[] {
  return page.map((page: any) => ({
    id: page.id,
    title: page.properties?.page?.title[0]?.plain_text ?? '',
    tags: page.properties?.tags?.multi_select.map((tag: any) => tag.name) ?? [],
    slug: page.properties?.slug?.rich_text[0]?.plain_text ?? '',
    relative_link:
      page.properties?.relative_link?.rich_text[0]?.plain_text ?? '',
    summary: page.properties?.summary?.rich_text[0]?.plain_text ?? '',
  }));
}
