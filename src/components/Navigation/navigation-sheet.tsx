'use client';

import {Button} from '@/components/ui/button';
import {Sheet, SheetContent, SheetHeader, SheetTrigger} from '@/components/ui/sheet';
import {Menu} from 'lucide-react';
import Link from 'next/link';
import {Logo} from '../NavBar/logo';
import {ScrollArea} from '../ui/scroll-area';
import {useState} from 'react';
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
          <Link href="/" className="flex items-center gap-2">
            <Logo className="font-bold" />
            <span className="font-bold">Routstr-Client</span>
          </Link>
        </SheetHeader>

        <ScrollArea className="h-full pb-20">
          <div className="space-y-4 text-base pr-2.5">
            {NavigationItems.map(item => (
              <Link key={item.name} href={item.link} onClick={() => setOpen(false)}>
                {item.name}
              </Link>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
