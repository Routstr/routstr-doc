'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription} from '@/components/ui/sheet';
import {Button} from '@/components/ui/button';
import {Menu, BookOpen, Download, Settings, Puzzle, Zap, Play} from 'lucide-react';
import {cn} from '@/lib/utils';

type PageType = 'getting-started' | 'installation' | 'how-to-use' | 'tool-integrations' | 'advanced-setup';

interface NavItem {
  title: string;
  page?: PageType;
  icon?: React.ComponentType<{className?: string}>;
  children?: NavItem[];
}

interface MobileDocsNavProps {
  currentPage: PageType;
}

const navigationItems: NavItem[] = [
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
    ],
  },
  {
    title: 'Guides',
    icon: Zap,
    children: [
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
      {
        title: 'Advanced Setup',
        page: 'advanced-setup',
        icon: Settings,
      },
    ],
  },
];

interface NavItemComponentProps {
  item: NavItem;
  level?: number;
  currentPage: PageType;
  onClose: () => void;
}

function NavItemComponent({item, level = 0, currentPage, onClose}: NavItemComponentProps) {
  const hasChildren = item.children && item.children.length > 0;
  const isActive = currentPage === item.page;

  if (item.page) {
    // Render as Link for navigation items
    return (
      <div className="w-full">
        <Link
          href={`/documentation/${item.page}`}
          onClick={onClose}
          className={cn(
            'flex items-center gap-3 w-full px-4 py-3 text-sm font-medium rounded-md transition-colors',
            level === 0 && 'text-foreground font-semibold bg-secondary/30',
            level > 0 && 'ml-4 text-muted-foreground hover:bg-secondary/80',
            isActive && 'bg-primary/10 text-primary',
          )}>
          {item.icon && <item.icon className="w-4 h-4" />}
          {item.title}
        </Link>
      </div>
    );
  }

  // Render sections with children
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
            <NavItemComponent key={index} item={child} level={level + 1} currentPage={currentPage} onClose={onClose} />
          ))}
        </div>
      )}
    </div>
  );
}

export function MobileDocsNav({currentPage}: MobileDocsNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="sm" className="m-4">
            <Menu className="w-4 h-4" />
            <span className="ml-2">Documentation</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 p-0">
          <div className="p-6">
            <div className="mb-6">
              <SheetTitle className="text-lg font-semibold text-foreground">Documentation</SheetTitle>
              <SheetDescription className="text-sm text-muted-foreground mt-1">
                Learn how to integrate otrta 402 gateway
              </SheetDescription>
            </div>

            <nav className="space-y-3">
              {navigationItems.map((item, index) => (
                <NavItemComponent key={index} item={item} currentPage={currentPage} onClose={handleClose} />
              ))}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
