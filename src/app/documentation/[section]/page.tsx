'use client';

import {use} from 'react';
import {notFound} from 'next/navigation';
import {DocsSidebar} from '@/components/Documentation/DocsSidebar';
import {MobileDocsNav} from '@/components/Documentation/MobileDocsNav';
import {GettingStarted} from '@/components/Documentation/pages/GettingStarted';
import {Installation} from '@/components/Documentation/pages/Installation';
import {HowToUse} from '@/components/Documentation/pages/HowToUse';
import {ToolIntegrations} from '@/components/Documentation/pages/ToolIntegrations';
import {Overview} from '@/components/Documentation/pages/Overview';
import {XCashuProtocols} from '@/components/Documentation/pages/XCashuProtocols';
import {ProviderProtocols} from '@/components/Documentation/pages/ProviderProtocols';
import {Navbar} from '@/components/NavBar/Navbar';
import {BackgroundPattern} from '@/components/Shared/BackgroundPattern';
import {VisionSpec} from '@/components/Documentation/pages/Vision';
import {NostrProtocols} from '@/components/Documentation/pages/NostrProtocols';
import {OtrtaClient} from '@/components/Documentation/pages/OtrtaClient';
import {Routstr} from '@/components/Documentation/pages/Routstr';

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
  | 'routstr';

const validSections: PageType[] = [
  'getting-started',
  'installation',
  'how-to-use',
  'tool-integrations',
  'advanced-setup',
  'x-cashu-protocols',
  'provider-protocols',
  'vision',
  'nostr',
  'otrta-client',
  'routstr',
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
      case 'advanced-setup':
        return <Overview />;
      case 'tool-integrations':
        return <ToolIntegrations />;
      case 'x-cashu-protocols':
        return <XCashuProtocols />;
      case 'provider-protocols':
        return <ProviderProtocols />;
      case 'vision':
        return <VisionSpec />;
      case 'nostr':
        return <NostrProtocols />;
      case 'otrta-client':
        return <OtrtaClient />;
      case 'routstr':
        return <Routstr />;
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
