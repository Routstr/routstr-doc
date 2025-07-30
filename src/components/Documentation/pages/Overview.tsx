import React from 'react';
import {NavigationLinks} from './NavigationLinks';
import {SectionHeading} from './SectionLinkCopy';

export function Overview() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-8 select-text space-y-12">
      <div>
        <SectionHeading level={1} id="overview" className="mb-6">
          Routstr-Client
        </SectionHeading>
        <p className="text-lg text-muted-foreground mb-8">
          Learn about the Routstr Client e-cash payment system, integrated with Routstr Marketplace and AI ecosystem for
          the ultimate user experience.
        </p>
      </div>

      <NavigationLinks currentSection="overview" />
    </div>
  );
}
