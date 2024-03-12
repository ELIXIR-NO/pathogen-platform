'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ModeToggle } from '@/components/mode-toggle';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { LogoModeToggle } from '@/components/logo-mode-toggle';

type Topics = { title: string; href: string; description: string };
const topics: Topics[] = [
  {
    title: 'Infectious diseases',
    href: '/topics/infectious-diseases',
    description:
      'disorders which are primarily caused by pathogenic microorganisms',
  },
  {
    title: 'Antibiotic resistance',
    href: '/topics/antibiotic-resistance',
    description: 'the impending threat of super bugs',
  },
  {
    title: 'Monkey Pox',
    href: '/topics/mpox',
    description: 'a zoonotic disease induced by the monkeypox virus',
  },
  {
    title: 'Pseudomonas',
    href: '/topics/pseudomonas',
    description: 'an opportunistic pathogen',
  },
  {
    title: 'Covid-19',
    href: '/topics/covid',
    description: 'an infectious disease caused by the novel SARS-CoV-2 virus',
  },
  {
    title: 'Enterococcus',
    href: '/topics/enterococcus',
    description: 'the harmless inhabitants of the gut',
  },
];

export function NavBar() {
  const pathName = usePathname();
  return (
    <nav className='fixed left-0 right-0 top-0 z-10 h-fit py-2 backdrop-blur-sm'>
      <div className='container flex flex-row items-center justify-between pt-2'>
        <ul className='flex flex-row items-center justify-center gap-x-5'>
          <li>
            <Link href='/'>
              <LogoModeToggle />
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
            <NavigationMenu>
              <NavigationMenuItem>
                <NavigationMenuTrigger className='text-lg font-normal decoration-primary underline-offset-4 hover:underline'>
                  <Link href='/topics'>Topics</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
                    {topics.map(topic => (
                      <ListItem
                        key={topic.title}
                        title={topic.title}
                        href={topic.href}
                      >
                        {topic.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenu>
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

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
