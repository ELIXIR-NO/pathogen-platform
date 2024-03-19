'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className='flex h-svh flex-col items-center justify-center'>
      <Card>
        <CardHeader>
          <CardTitle>ERROR</CardTitle>
          <CardDescription>Something went wrong!!</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{error.message}</p>
          <p>Looks like we could not locate the requested resource</p>
        </CardContent>
        <CardFooter className='justify-end space-x-2'>
          <Button variant='secondary' onClick={() => reset()}>
            Reload
          </Button>
          <Button variant='destructive' onClick={() => router.back()}>
            Go back
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
