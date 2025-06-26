'use client';

import {use} from 'react';
import {notFound} from 'next/navigation';
import {DocsSidebar} from '@/components/Documentation/DocsSidebar';
import {MobileDocsNav} from '@/components/Documentation/MobileDocsNav';
import {GettingStarted} from '@/components/Documentation/pages/GettingStarted';
import {Installation} from '@/components/Documentation/pages/Installation';
import {HowToUse} from '@/components/Documentation/pages/HowToUse';
import {ToolIntegrations} from '@/components/Documentation/pages/ToolIntegrations';
import {AdvancedSetup} from '@/components/Documentation/pages/AdvancedSetup';
import {XCashuProtocols} from '@/components/Documentation/pages/XCashuProtocols';
import {ProviderProtocols} from '@/components/Documentation/pages/ProviderProtocols';
import {Navbar} from '@/components/NavBar/Navbar';
import {BackgroundPattern} from '@/components/Shared/BackgroundPattern';
import {VisionSpec} from '@/components/Documentation/pages/Vision';

type PageType =
  | 'getting-started'
  | 'installation'
  | 'how-to-use'
  | 'tool-integrations'
  | 'advanced-setup'
  | 'x-cashu-protocols'
  | 'provider-protocols'
  | 'vision';

const validSections: PageType[] = [
  'getting-started',
  'installation',
  'how-to-use',
  'tool-integrations',
  'advanced-setup',
  'x-cashu-protocols',
  'provider-protocols',
  'vision',
];

interface DocumentationSectionPageProps {
  params: Promise<{
    section: string;
  }>;
}

export default function DocumentationSectionPage({params}: DocumentationSectionPageProps) {
  const {section} = use(params);
  const sectionType = section as PageType;

  // If the section is not valid, show 404
  if (!validSections.includes(sectionType)) {
    notFound();
  }

  const renderPage = () => {
    switch (sectionType) {
      case 'getting-started':
        return <GettingStarted />;
      case 'installation':
        return <Installation />;
      case 'how-to-use':
        return <HowToUse />;
      case 'tool-integrations':
        return <ToolIntegrations />;
      case 'advanced-setup':
        return <AdvancedSetup />;
      case 'x-cashu-protocols':
        return <XCashuProtocols />;
      case 'provider-protocols':
        return <ProviderProtocols />;
      case 'vision':
        return <VisionSpec />;
      default:
        return <GettingStarted />;
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col overflow-hidden" style={{zIndex: '1', position: 'relative'}}>
      <Navbar />

      <MobileDocsNav currentPage={sectionType} />

      <div className="flex flex-1 min-h-0">
        <aside className="hidden lg:block sticky top-16 h-[calc(100vh-4rem)]">
          <DocsSidebar currentPage={sectionType} />
        </aside>

        <main className="flex-1 overflow-y-auto select-text" style={{userSelect: 'text'}}>
          <div className="select-text" style={{userSelect: 'text'}}>
            {renderPage()}
          </div>
        </main>
      </div>
      <BackgroundPattern />
    </div>
  );
}
