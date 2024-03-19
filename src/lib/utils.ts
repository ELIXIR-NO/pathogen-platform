import { Client } from '@notionhq/client';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const notion = new Client({
  auth: process.env.NOTION_API_SECRET,
});
