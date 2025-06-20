'use client';

import Link from 'next/link';
import * as React from 'react';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {cn} from '@/lib/utils';
import {LucideIcon} from 'lucide-react';
import {Button} from '../ui/button';
import {NavigationItems} from '@/components/Interfaces/NavigationItems';
import {usePathname} from 'next/navigation';
import clsx from 'clsx';

export function AppNavigationMenu2() {
  const pathName = usePathname().toLocaleLowerCase();

  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-0">
        {NavigationItems.map(item => (
          <NavigationMenuItem key={item.name} className="pr-1">
            <Button variant="ghost" asChild>
              <Link
                href={item.link}
                className={clsx('hover:bg-blue-500/30', {
                  'bg-blue-500/30': item.link.toLocaleLowerCase() === pathName,
                })}>
                {item.name}
              </Link>
            </Button>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & {icon?: LucideIcon}
>(({className, title, children, ...props}, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            'block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}>
          {props.icon && <props.icon className="mb-3 h-5 w-5" />}
          {title && <div className="text-sm font-medium leading-none">{title}</div>}
          {children && <p className="mt-2 line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>}
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
