import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from '../../ui/card';
import {Badge} from '../../ui/badge';
import {Alert, AlertDescription} from '../../ui/alert';
import {Network, Users, Shield, Star, Wallet, Key, Activity} from 'lucide-react';

export function NostrProtocols() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Nostr Integration</h1>
        <p className="text-xl text-muted-foreground">
          Discover how Routstr leverages Nostr's decentralized protocols to create a truly open and permissionless AI
          marketplace ecosystem.
        </p>
      </div>

      {/* Provider Discovery & Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Provider Discovery & Selection
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            A dynamic marketplace where AI service providers publish their existence and endpoints through Nostr events,
            enabling discovery based on reputation metrics and social proof.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Provider Marketplace</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Event-based service announcements</li>
                <li>Provider endpoint publishing</li>
                <li>Service availability signals</li>
                <li>Capability descriptions</li>
                <li>Social engagement metrics</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Selection Criteria</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Follower count and growth</li>
                <li>Zap volume and frequency</li>
                <li>Community endorsements</li>
                <li>Historical uptime data</li>
                <li>Client satisfaction scores</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Market Mechanisms</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Alert>
                <Star className="w-4 h-4" />
                <AlertDescription>
                  <strong>Social Proof:</strong> Provider reputation built through follower networks, zaps received, and
                  community engagement
                </AlertDescription>
              </Alert>
              <Alert>
                <Wallet className="w-4 h-4" />
                <AlertDescription>
                  <strong>Economic Signals:</strong> Market-driven reputation and selection through zap-based feedback
                  loops
                </AlertDescription>
              </Alert>
              <Alert>
                <Shield className="w-4 h-4" />
                <AlertDescription>
                  <strong>Trust System:</strong> Verifiable performance metrics and client feedback through signed Nostr
                  events
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Routstr Marketplace */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Network className="w-5 h-5" />
            Routstr Marketplace
            <Badge variant="outline">Permissionless</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Experience true decentralization with Routstr's permissionless marketplace, where anyone can participate
            without gatekeepers or approval processes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Network className="w-4 h-4" />
                <h4 className="font-semibold">Permissionless Listing</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Unlike traditional marketplaces that require approval processes, Routstr allows providers to list
                themselves directly via Nostr events.
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                <li>No approval required</li>
                <li>Instant marketplace entry</li>
                <li>Direct Nostr event publishing</li>
                <li>Censorship-resistant listings</li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <h4 className="font-semibold">Nostr-based Reviews</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Users can publish provider reviews directly on Nostr, creating a transparent and verifiable reputation
                system.
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                <li>Cryptographically signed reviews</li>
                <li>Publicly verifiable feedback</li>
                <li>Community-driven ratings</li>
                <li>Immutable review history</li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4" />
                <h4 className="font-semibold">Provider Health Monitoring</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Real-time provider health and status updates are published on Nostr, enabling transparent service
                monitoring.
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                <li>@routstr_status_bot monitoring</li>
                <li>Real-time health metrics</li>
                <li>Automated status updates</li>
                <li>Community transparency</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Nostr Data Storage */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="w-5 h-5" />
            Nostr Data Storage
            <Badge variant="secondary">Encrypted</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Leveraging Nostr's encrypted storage capabilities for secure wallet and API key management across the
            Routstr ecosystem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Wallet className="w-4 h-4" />
                <h4 className="font-semibold">NIP60 Wallet Storage</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Cashu wallet balances are stored securely on Nostr relays using NIP60 protocol with NIP44 encryption.
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                <li>NIP60 protocol compliance</li>
                <li>NIP44 encrypted storage</li>
                <li>Cashu balance management</li>
                <li>Relay-based synchronization</li>
                <li>Cross-device accessibility</li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Key className="w-4 h-4" />
                <h4 className="font-semibold">API Key Management</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Routstr API keys are stored and synchronized using NIP44 encryption, accessible at chat.routstr.com.
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                <li>NIP44 encrypted key storage</li>
                <li>Cross-device synchronization</li>
                <li>Secure key management</li>
                <li>Relay-based distribution</li>
                <li>User-controlled access</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Storage Benefits</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Alert>
                <Shield className="w-4 h-4" />
                <AlertDescription>
                  <strong>Decentralized Security:</strong> End-to-end encryption with no single point of failure and
                  user-controlled data
                </AlertDescription>
              </Alert>
              <Alert>
                <Network className="w-4 h-4" />
                <AlertDescription>
                  <strong>Seamless Sync:</strong> Real-time synchronization across multiple devices with automatic
                  backups
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
