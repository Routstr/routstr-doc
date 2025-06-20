import {NavigationItems} from '@/components/Interfaces/NavigationItems';
import {Button} from '../ui/button';
import {NavigationMenu, NavigationMenuItem, NavigationMenuList} from '../ui/navigation-menu';
import Link from 'next/link';

export default function AppNavigationMenu() {
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
