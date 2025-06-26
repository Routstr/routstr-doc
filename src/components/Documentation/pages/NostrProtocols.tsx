import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from '../../ui/card';
import {Network, Users, Key, Shield, Zap, ArrowUpRight, Star, Wallet} from 'lucide-react';
import {motion} from 'framer-motion';
import {GithubLogo} from '@/components/ui/Icons';

export function NostrProtocols() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Nostr Marketplace</h1>
        <p className="text-xl text-muted-foreground">
          A decentralized marketplace for AI service providers powered by Nostr's social network.
        </p>
      </div>

      <div className="grid gap-6">
        <Card className="p-6">
          <CardHeader>
            <CardTitle>Provider Discovery & Selection</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              The Nostr protocol powers a dynamic marketplace where AI service providers can publish their availability
              and capabilities through Nostr events. Clients can discover and select providers based on reputation
              metrics, social proof, and community engagement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4 bg-muted/50">
                <h4 className="font-semibold mb-2">Provider Marketplace</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Event-based service listings</li>
                  <li>Real-time capacity updates</li>
                  <li>Dynamic pricing signals</li>
                  <li>Service quality metrics</li>
                  <li>Social engagement stats</li>
                </ul>
              </Card>
              <Card className="p-4 bg-muted/50">
                <h4 className="font-semibold mb-2">Selection Criteria</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Follower count and growth</li>
                  <li>Zap volume and frequency</li>
                  <li>Community endorsements</li>
                  <li>Historical uptime data</li>
                  <li>Client satisfaction scores</li>
                </ul>
              </Card>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Market Mechanisms</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-4 bg-muted/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4" />
                    <h5 className="font-medium">Social Proof</h5>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Provider reputation built through follower networks, zaps received, and community engagement
                  </p>
                </Card>
                <Card className="p-4 bg-muted/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Wallet className="w-4 h-4" />
                    <h5 className="font-medium">Economic Signals</h5>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Market-driven pricing and capacity allocation through zap-based feedback loops
                  </p>
                </Card>
                <Card className="p-4 bg-muted/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4" />
                    <h5 className="font-medium">Trust System</h5>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Verifiable performance metrics and client feedback through signed Nostr events
                  </p>
                </Card>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4">Marketplace Flow</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-4 bg-muted/50">
                  <div className="space-y-3">
                    <h5 className="font-medium flex items-center gap-2">
                      <Network className="w-4 h-4" />
                      Provider Listing
                    </h5>
                    <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-2">
                      <li>Create Nostr identity</li>
                      <li>Publish service event</li>
                      <li>Set pricing and capacity</li>
                      <li>Build social presence</li>
                      <li>Engage with community</li>
                    </ol>
                  </div>
                </Card>
                <Card className="p-4 bg-muted/50">
                  <div className="space-y-3">
                    <h5 className="font-medium flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Client Selection
                    </h5>
                    <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-2">
                      <li>Browse provider listings</li>
                      <li>Analyze social metrics</li>
                      <li>Review pricing models</li>
                      <li>Check service quality</li>
                      <li>Make selection decision</li>
                    </ol>
                  </div>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
