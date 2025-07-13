'use client';

import {Button} from '@/components/ui/button';
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from '@/components/ui/sheet';
import {Menu, ArrowLeft, BookOpen, Download, Settings, Puzzle, Zap, Play, CreditCard} from 'lucide-react';
import Link from 'next/link';
import {useState} from 'react';
import {ThemeToggle} from './ThemeToggle';
import {cn} from '@/lib/utils';

type PageType =
  | 'getting-started'
  | 'installation'
  | 'how-to-use'
  | 'tool-integrations'
  | 'advanced-setup'
  | 'x-cashu-protocols'
  | 'provider-protocols'
  | 'vision'
  | 'nostr'
  | 'otrta-client'
  | 'nostr-protocols'
  | 'routstr'
  | 'routstr-integration';

interface NavItem {
  title: string;
  page?: PageType;
  icon?: React.ComponentType<{className?: string}>;
  children?: NavItem[];
}

const navigationItems: NavItem[] = [
  {
    title: 'Routstr',
    icon: Zap,
    children: [
      {
        title: 'Introduction',
        page: 'routstr',
        icon: Play,
      },
      {
        title: 'Integrations',
        page: 'routstr-integration',
        icon: Puzzle,
      },
    ],
  },
  {
    title: 'Getting Started',
    icon: BookOpen,
    children: [
      {
        title: 'Introduction',
        page: 'getting-started',
        icon: Play,
      },
      {
        title: 'Installation',
        page: 'installation',
        icon: Download,
      },
      {
        title: 'How to Use',
        page: 'how-to-use',
        icon: BookOpen,
      },
      {
        title: 'Tool Integrations',
        page: 'tool-integrations',
        icon: Puzzle,
      },
    ],
  },
  {
    title: 'Nostr Integration',
    page: 'nostr',
    icon: BookOpen,
  },
  {
    title: 'Protocol',
    icon: CreditCard,
    children: [
      {
        title: 'Payment',
        page: 'x-cashu-protocols',
        icon: CreditCard,
      },
      {
        title: 'Provider',
        page: 'provider-protocols',
        icon: Settings,
      },
      {
        title: 'Nostr',
        page: 'nostr-protocols',
        icon: BookOpen,
      },
    ],
  },
  {
    title: 'Vision',
    page: 'vision',
    icon: BookOpen,
  },
];

interface NavItemComponentProps {
  item: NavItem;
  level?: number;
  onClose: () => void;
}

function NavItemComponent({item, level = 0, onClose}: NavItemComponentProps) {
  const hasChildren = item.children && item.children.length > 0;

  if (item.page) {
    return (
      <div className="w-full">
        <Link
          href={`/documentation/${item.page}`}
          onClick={onClose}
          className={cn(
            'flex items-center gap-3 w-full px-4 py-3 text-sm font-medium rounded-md transition-colors',
            level === 0 && 'text-foreground font-semibold bg-secondary/30',
            level > 0 && 'ml-4 text-muted-foreground hover:bg-secondary/80 hover:text-foreground',
          )}>
          {item.icon && <item.icon className="w-4 h-4" />}
          {item.title}
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div
        className={cn(
          'flex items-center gap-3 w-full px-4 py-3 text-sm font-medium rounded-md',
          level === 0 && 'text-foreground font-semibold bg-secondary/30',
        )}>
        {item.icon && <item.icon className="w-4 h-4" />}
        {item.title}
      </div>

      {hasChildren && (
        <div className="mt-2 space-y-1">
          {item.children!.map((child, index) => (
            <NavItemComponent key={index} item={child} level={level + 1} onClose={onClose} />
          ))}
        </div>
      )}
    </div>
  );
}

export function NavigationSheet() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:w-[400px] p-0">
        <div className="flex flex-col h-full">
          <SheetHeader className="p-4 pb-0">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="h-5 w-5" />
                </Button>
                <ThemeToggle />
              </div>
            </div>
          </SheetHeader>

          <div className="px-4 py-3 border-b">
            <Link
              href="/"
              onClick={handleClose}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to main menu
            </Link>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <h2 className="text-xl font-semibold mb-4">Quickstart</h2>
            <nav className="space-y-3">
              {navigationItems.map((item, index) => (
                <NavItemComponent key={index} item={item} onClose={handleClose} />
              ))}
            </nav>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
