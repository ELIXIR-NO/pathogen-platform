'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { ModeToggle } from '@/components/mode-toggle';
import { cn } from '@/lib/utils';

export function NavBar() {
  const pathName = usePathname();
  return (
    <nav className='fixed left-0 right-0 top-0 z-10 h-fit py-2 backdrop-blur-sm'>
      <div className='container flex flex-row items-center justify-between pt-2'>
        <ul className='flex flex-row items-center justify-center gap-x-5'>
          <li>
            <Link href='/'>
              <Image
                src='/pathogens_portal_norway_logo.png'
                alt='Logo of pathogens portal norway'
                width={150}
                height={0}
                className='hover:ring-2 hover:ring-primary'
              />
            </Link>
          </li>
          <li>
            <Link
              className={cn(
                'text-lg hover:underline hover:decoration-primary hover:underline-offset-4',
                pathName === '/about' && 'font-semibold text-primary'
              )}
              href='/about'
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={cn(
                'text-lg hover:underline hover:decoration-primary hover:underline-offset-4',
                pathName === '/topics' && 'font-semibold text-primary'
              )}
              href='/topics'
            >
              Topics
            </Link>
          </li>
          <li>
            <Link
              className={cn(
                'text-lg hover:underline hover:decoration-primary hover:underline-offset-4',
                pathName === '/dashboard' && 'font-semibold text-primary'
              )}
              href='/dashboard'
            >
              Dashboard
            </Link>
          </li>
        </ul>
        <ModeToggle />
      </div>
    </nav>
  );
}
