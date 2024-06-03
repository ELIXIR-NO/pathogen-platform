'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useState } from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

const tags = [
  { value: 'covid19', label: 'Covid-19' },
  { value: 'enterococcusFaecalis', label: 'Enterococcus faecalis' },
  { value: 'pseudomonas', label: 'Pseudomonas' },
  { value: 'mpox', label: 'Mpox' },
  { value: 'pseudomonasAeruginosa', label: 'Pseudomonas aeruginosa' },
  { value: 'infectiousDisease', label: 'Infectious disease' },
  { value: 'antibioticResistance', label: 'Antibiotic resistance' },
  { value: 'enterococcus', label: 'Enterococcus' },
  { value: 'nationalResources', label: 'National resources' },
  { value: 'oneHealth', label: 'One health' },
  { value: 'pandemicPreparedness', label: 'Pandemic preparedness' },
];

export default function SearchCombobox() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-[250px] justify-between'
        >
          {value ? tags.find(it => it.value === value)?.label : 'Select tag...'}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command>
          <CommandInput placeholder='Search tag...' />
          <CommandList>
            <CommandEmpty>No tag found.</CommandEmpty>
            <CommandGroup>
              {tags.map(it => (
                <CommandItem
                  key={it.value}
                  value={it.value}
                  onSelect={(currentValue: string) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === it.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {it.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
