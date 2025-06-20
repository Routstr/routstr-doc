'use client';

import {Button} from '@/components/ui/button';
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from '@/components/ui/sheet';
import {Menu} from 'lucide-react';
import Link from 'next/link';
import {ScrollArea} from '../ui/scroll-area';
import {useState} from 'react';
import {Logo} from './logo';
import {NavigationItems} from '../Interfaces/NavigationItems';

export function NavigationSheet() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="rounded-full" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="pb-12">
          <SheetTitle>Menu</SheetTitle>
          <Link href="/" className="flex items-center gap-2">
            <Logo className="font-bold" />
          </Link>
        </SheetHeader>

        <ScrollArea className="h-full pb-20">
          <div className="space-y-4 text-base pr-2.5">
            {NavigationItems.map((item, index) => (
              <div key={index}>
                <div>
                  <Link href={item.link} onClick={() => setOpen(false)}>
                    {item.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
