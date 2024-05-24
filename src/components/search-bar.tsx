'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Search } from 'lucide-react';
import { z } from 'zod';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  className?: string;
}

const searchFormSchema = z.object({
  searchTerm: z
    .string()
    .min(3, { message: 'search term must be at least 3 characters' })
    .max(20, { message: 'search term can be at most 20 characters' }),
});

export function SearchBar({ className }: SearchBarProps) {
  const form = useForm<z.infer<typeof searchFormSchema>>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      searchTerm: '',
    },
  });

  const onSubmit = (values: z.infer<typeof searchFormSchema>) => {
    // TODO: use server actions to return values
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('flex flex-row space-x-2 px-5', className)}
      >
        <Button type='submit' className='h-full'>
          <Search />
        </Button>
        <FormField
          control={form.control}
          name='searchTerm'
          render={({ field }) => (
            <FormItem className='w-full'>
              {/* <FormLabel>Search</FormLabel> */}
              <FormControl>
                <Input placeholder='Search' {...field} />
              </FormControl>
              {/* <FormDescription>Term(s) to search for.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
