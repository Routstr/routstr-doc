import React, {useState} from 'react';
import {Card, CardContent, CardHeader, CardTitle} from '../../ui/card';
import {Badge} from '../../ui/badge';

import {Collapsible, CollapsibleContent, CollapsibleTrigger} from '../../ui/collapsible';
import {Button} from '../../ui/button';
import {Network, Users, ChevronDown, ChevronRight} from 'lucide-react';

export function NostrProtocols() {
  const [isEventFieldsOpen, setIsEventFieldsOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Nostr Node Discovery</h1>
        <p className="text-xl text-muted-foreground">
          Implementation guidelines for node discovery and service announcement using Nostr events for decentralized
          client discovery.
        </p>
      </div>

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Network className="w-5 h-5" />
            Node Discovery Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Nodes announce their presence and capabilities via Nostr events for client discovery. This mechanism enables
            decentralized service discovery without relying on centralized registries or DNS-based systems.
          </p>
        </CardContent>
      </Card>

      {/* Event Structure */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Node Announcement Event
            <Badge variant="destructive">Kind: 40500</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Service providers publish announcement events using Kind 40500 to make their services discoverable by
            clients through the Nostr network.
          </p>

          <div>
            <h4 className="font-semibold mb-2">Event Structure:</h4>
            <div className="bg-muted p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                {`{
  "kind": 40500,
  "created_at": <unix-timestamp>,
  "tags": [
    ["d", "<node-id>"],              // Unique node identifier
    ["p", "<operator-pubkey>"],      // Operator's public key
    ["url", "https://..."],          // Inference endpoint
    ["onion", "<tor-onion-address>"] // Tor hidden service endpoint
  ],
  "content": "Human-readable description"
}`}
              </pre>
            </div>
          </div>

          <Collapsible open={isEventFieldsOpen} onOpenChange={setIsEventFieldsOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                <span className="font-semibold">Field Descriptions</span>
                {isEventFieldsOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-sm mb-2">Event Fields</h5>
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-3 gap-4 p-2 bg-muted/50 rounded">
                      <span className="font-medium">Field</span>
                      <span className="font-medium">Type</span>
                      <span className="font-medium">Description</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2">
                      <code>kind</code>
                      <span>number</span>
                      <span>Event type identifier (40500)</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 bg-muted/30">
                      <code>created_at</code>
                      <span>number</span>
                      <span>Unix timestamp of event creation</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2">
                      <code>content</code>
                      <span>string</span>
                      <span>Human-readable description of the service</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-sm mb-2">Tag Fields</h5>
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-3 gap-4 p-2 bg-muted/50 rounded">
                      <span className="font-medium">Tag</span>
                      <span className="font-medium">Required</span>
                      <span className="font-medium">Description</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2">
                      <code>["d", "node-id"]</code>
                      <span>Yes</span>
                      <span>Unique identifier for the node</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 bg-muted/30">
                      <code>["p", "pubkey"]</code>
                      <span>Yes</span>
                      <span>Public key of the node operator</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2">
                      <code>["url", "https://..."]</code>
                      <span>Yes</span>
                      <span>HTTP(S) endpoint for the service</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 bg-muted/30">
                      <code>["onion", "address"]</code>
                      <span>Optional</span>
                      <span>Tor hidden service endpoint</span>
                    </div>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>

      {/* Implementation Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Implementation Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">For Service Providers:</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                <li>Publish announcement events regularly to maintain visibility</li>
                <li>Use consistent node-id across announcements for the same service</li>
                <li>Include both clearnet and Tor endpoints when available</li>
                <li>Provide meaningful descriptions in the content field</li>
                <li>Sign events with the operator's private key for verification</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">For Clients:</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                <li>Monitor multiple relays for node announcements</li>
                <li>Verify operator signatures before trusting announcements</li>
                <li>Cache discovered nodes and their capabilities</li>
                <li>Implement fallback mechanisms for service discovery</li>
                <li>Respect privacy preferences (clearnet vs Tor)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
