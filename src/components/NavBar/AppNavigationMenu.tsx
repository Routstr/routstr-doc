'use client';

import Link from 'next/link';
import * as React from 'react';

import {NavigationMenu, NavigationMenuItem, NavigationMenuList} from '@/components/ui/navigation-menu';
import {Button} from '../ui/button';
import {NavigationItems} from '../Interfaces/NavigationItems';

export function AppNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-0">
        {NavigationItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            <Button variant="ghost" asChild>
              <Link href={item.link}>{item.name}</Link>
            </Button>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
