import React from 'react';
import {Card, CardContent} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {
  BookOpen,
  Play,
  Download,
  HelpCircle,
  Network,
  Radio,
  Server,
  CreditCard,
  Compass,
  Code,
  Wrench,
  Laptop,
  Eye,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

interface NavigationSection {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  badge?: string;
}

const navigationSections: NavigationSection[] = [
  {
    id: 'overview',
    title: 'Overview',
    description: 'Introduction to Routstr-Client',
    icon: <BookOpen className="w-4 h-4" />,
  },
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Client interface overview and features',
    icon: <Play className="w-4 h-4" />,
    badge: 'Start Here',
  },
  {
    id: 'installation',
    title: 'Installation',
    description: 'Docker setup and deployment',
    icon: <Download className="w-4 h-4" />,
  },
  {
    id: 'how-to-use',
    title: 'How to Use',
    description: 'Basic usage and API integration',
    icon: <HelpCircle className="w-4 h-4" />,
  },
  {
    id: 'nostr',
    title: 'Nostr Integration',
    description: 'Decentralized protocols and marketplace',
    icon: <Network className="w-4 h-4" />,
  },
  {
    id: 'nostr-protocols',
    title: 'Nostr Protocols',
    description: 'Node discovery and service announcement',
    icon: <Radio className="w-4 h-4" />,
  },
  {
    id: 'provider-protocols',
    title: 'Provider Protocols',
    description: 'Implementation guidelines for providers',
    icon: <Server className="w-4 h-4" />,
    badge: 'Technical',
  },
  {
    id: 'xcashu-protocols',
    title: 'Payment Protocols',
    description: 'X-Cashu payment implementation',
    icon: <CreditCard className="w-4 h-4" />,
    badge: 'Technical',
  },
  {
    id: 'routstr',
    title: 'Routstr',
    description: 'Decentralized LLM routing marketplace',
    icon: <Compass className="w-4 h-4" />,
  },
  {
    id: 'routstr-integration',
    title: 'Routstr Integration',
    description: 'Integration with AI coding tools',
    icon: <Code className="w-4 h-4" />,
  },
  {
    id: 'tool-integrations',
    title: 'Tool Integrations',
    description: 'Popular AI tools and setup guides',
    icon: <Wrench className="w-4 h-4" />,
  },
  {
    id: 'otrta-client',
    title: 'OTRTA Client',
    description: 'Client implementation details',
    icon: <Laptop className="w-4 h-4" />,
  },
  {
    id: 'vision',
    title: 'Vision',
    description: 'Future of AI service delivery',
    icon: <Eye className="w-4 h-4" />,
  },
];

interface NavigationLinksProps {
  currentSection?: string;
  showTitle?: boolean;
  variant?: 'full' | 'compact';
}

export function NavigationLinks({currentSection, showTitle = true, variant = 'full'}: NavigationLinksProps) {
  const currentIndex = navigationSections.findIndex(section => section.id === currentSection);
  const prevSection = currentIndex > 0 ? navigationSections[currentIndex - 1] : null;
  const nextSection = currentIndex < navigationSections.length - 1 ? navigationSections[currentIndex + 1] : null;

  if (variant === 'compact') {
    return (
      <div className="flex justify-between items-center py-6 border-t">
        {prevSection ? (
          <a
            href={`/documentation/${prevSection.id}`}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <div className="text-left">
              <div className="text-xs">Previous</div>
              <div className="font-medium">{prevSection.title}</div>
            </div>
          </a>
        ) : (
          <div />
        )}

        {nextSection ? (
          <a
            href={`/documentation/${nextSection.id}`}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-right">
            <div className="text-right">
              <div className="text-xs">Next</div>
              <div className="font-medium">{nextSection.title}</div>
            </div>
            <ArrowRight className="w-4 h-4" />
          </a>
        ) : (
          <div />
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {showTitle && (
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Documentation Sections</h2>
          <p className="text-muted-foreground">Navigate through all available documentation sections</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {navigationSections.map(section => (
          <a key={section.id} href={`/documentation/${section.id}`} className="block group">
            <Card
              className={`
              h-full transition-all duration-200 hover:shadow-md hover:scale-105
              ${
                currentSection === section.id
                  ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                  : 'hover:border-primary/50'
              }
            `}>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div
                    className={`
                    p-2 rounded-lg 
                    ${
                      currentSection === section.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted group-hover:bg-primary/10'
                    }
                  `}>
                    {section.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-sm leading-tight">{section.title}</h3>
                      {section.badge && (
                        <Badge variant="secondary" className="text-xs px-1.5 py-0.5">
                          {section.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">{section.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>

      {/* Previous/Next Navigation */}
      {currentSection && (
        <div className="flex justify-between items-center pt-6 border-t">
          {prevSection ? (
            <a
              href={`/documentation/${prevSection.id}`}
              className="flex items-center gap-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors group">
              <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Previous</div>
                <div className="font-medium">{prevSection.title}</div>
                <div className="text-xs text-muted-foreground">{prevSection.description}</div>
              </div>
            </a>
          ) : (
            <div />
          )}

          {nextSection ? (
            <a
              href={`/documentation/${nextSection.id}`}
              className="flex items-center gap-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors group text-right">
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Next</div>
                <div className="font-medium">{nextSection.title}</div>
                <div className="text-xs text-muted-foreground">{nextSection.description}</div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
            </a>
          ) : (
            <div />
          )}
        </div>
      )}
    </div>
  );
}
