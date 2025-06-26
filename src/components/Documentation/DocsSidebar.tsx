'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {ChevronDown, ChevronRight, BookOpen, Download, Settings, Puzzle, Zap, Play, CreditCard} from 'lucide-react';
import {cn} from '@/lib/utils';

export type PageType =
  | 'getting-started'
  | 'installation'
  | 'how-to-use'
  | 'tool-integrations'
  | 'advanced-setup'
  | 'x-cashu-protocols'
  | 'provider-protocols'
  | 'vision'
  | 'nostr';

interface NavItem {
  title: string;
  page?: PageType;
  href?: string;
  icon?: React.ComponentType<{className?: string}>;
  children?: NavItem[];
}

interface DocsSidebarProps {
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
      {
        title: 'How to Use',
        page: 'how-to-use',
        icon: BookOpen,
      },
    ],
  },
  {
    title: 'Guides',
    icon: Zap,
    children: [
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
  {
    title: 'Protocol',
    icon: CreditCard,
    children: [
      {
        title: 'X-Cashu',
        page: 'x-cashu-protocols',
        icon: CreditCard,
      },
      {
        title: 'Provider',
        page: 'provider-protocols',
        icon: Settings,
      },
      {
        title: 'Nostr Integration',
        page: 'nostr',
        icon: BookOpen,
      },
      {
        title: 'Vision',
        page: 'vision',
        icon: BookOpen,
      },
    ],
  },
];

interface NavItemComponentProps {
  item: NavItem;
  level?: number;
  currentPage: PageType;
}

function NavItemComponent({item, level = 0, currentPage}: NavItemComponentProps) {
  const [isOpen, setIsOpen] = useState(true); // Keep sections open by default
  const hasChildren = item.children && item.children.length > 0;
  const isActive = currentPage === item.page;

  const handleToggle = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
    }
  };

  if (item.page) {
    // Render as Link for navigation items
    return (
      <div className="w-full">
        <Link
          href={`/documentation/${item.page}`}
          className={cn(
            'flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md transition-colors',
            level === 0 && 'text-foreground font-semibold hover:bg-secondary/60',
            level > 0 && 'ml-4 text-muted-foreground hover:bg-secondary/80',
            isActive && 'bg-primary/10 text-primary',
          )}>
          <div className="flex items-center gap-2">
            {item.icon && <item.icon className="w-4 h-4" />}
            {item.title}
          </div>
        </Link>
      </div>
    );
  }

  // Render as button for sections with children
  return (
    <div className="w-full">
      <button
        onClick={handleToggle}
        className={cn(
          'flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md transition-colors',
          level === 0 && 'text-foreground font-semibold hover:bg-secondary/60',
          !hasChildren && 'cursor-default',
        )}>
        <div className="flex items-center gap-2">
          {item.icon && <item.icon className="w-4 h-4" />}
          {item.title}
        </div>
        {hasChildren && level === 0 && (
          <span className="transition-transform duration-200">
            {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </span>
        )}
      </button>

      {hasChildren && isOpen && (
        <div className="mt-1 space-y-1">
          {item.children!.map((child, index) => (
            <NavItemComponent key={index} item={child} level={level + 1} currentPage={currentPage} />
          ))}
        </div>
      )}
    </div>
  );
}

export function DocsSidebar({currentPage}: DocsSidebarProps) {
  return (
    <div className="w-64 h-full bg-background border-r border-border overflow-y-auto">
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground">Documentation</h2>
          <p className="text-sm text-muted-foreground mt-1">Learn how to integrate otrta 402 gateway</p>
        </div>

        <nav className="space-y-3">
          {navigationItems.map((item, index) => (
            <NavItemComponent key={index} item={item} currentPage={currentPage} />
          ))}
        </nav>
      </div>
    </div>
  );
}
