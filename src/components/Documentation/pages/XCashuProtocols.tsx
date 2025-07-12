import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from '../../ui/card';
import {Badge} from '../../ui/badge';
import {Alert, AlertDescription} from '../../ui/alert';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '../../ui/table';
import {SequenceDiagram} from '../../ui/sequence-diagram';
import {Code} from 'lucide-react';

export function XCashuProtocols() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Payment Protocol</h1>
        <p className="text-xl text-muted-foreground">
          Multiple interaction models for using the X-Cashu header to pay for access to LLM or other AI services over
          HTTP.
        </p>
      </div>

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5" />
            Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This section describes multiple interaction models ("protocols") for using the X-Cashu header to pay for
            access to LLM or other AI services over HTTP. It also standardizes an endpoint for model and pricing
            discovery, enabling wallet-aware clients to act responsibly based on current rates.
          </p>
        </CardContent>
      </Card>

      {/* Protocol 1: Single-use Cashu Notes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            1. Single-use Cashu Notes
            <Badge variant="outline">Stateless</Badge>
            <Badge variant="secondary">Most Secure</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Summary:</h4>
            <p className="text-muted-foreground">
              Each API request is accompanied by a freshly-issued Cashu note in the X-Cashu header, representing the
              payment for only that request. The provider server verifies, redeems (burns) the note, and returns a new
              note as change if any remains. Payments are not reused or linked across calls.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Security:</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Statelessness and Single-use means no long-lived token risk</li>
              <li>No provider-side wallet tracking (only redemption)</li>
              <li>This is the highest privacy and anti-replay approach</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Flow (Sequence Diagram):</h4>
            <div className="bg-muted p-4 rounded-lg overflow-x-auto">
              <div className="min-w-[600px]">
                <SequenceDiagram
                  participants={['ClientWallet', 'Client', 'Provider', 'ProviderWallet']}
                  steps={[
                    {
                      type: 'message',
                      content: {
                        from: 'Client',
                        to: 'ClientWallet',
                        message: 'Prepare exact (or over) value note',
                        type: 'arrow',
                      },
                    },
                    {
                      type: 'message',
                      content: {
                        from: 'ClientWallet',
                        to: 'Client',
                        message: 'Returns note',
                        type: 'return',
                      },
                    },
                    {
                      type: 'message',
                      content: {
                        from: 'Client',
                        to: 'Provider',
                        message: 'API Request + X-Cashu header',
                        type: 'arrow',
                      },
                    },
                    {
                      type: 'message',
                      content: {
                        from: 'Provider',
                        to: 'ProviderWallet',
                        message: 'Redeem note & compute usage/fee',
                        type: 'arrow',
                      },
                    },
                    {
                      type: 'message',
                      content: {
                        from: 'ProviderWallet',
                        to: 'Provider',
                        message: 'Usage result, optionally issue change note',
                        type: 'return',
                      },
                    },
                    {
                      type: 'message',
                      content: {
                        from: 'Provider',
                        to: 'Client',
                        message: 'API response (+ X-Cashu header if change)',
                        type: 'return',
                      },
                    },
                    {
                      type: 'message',
                      content: {
                        from: 'Client',
                        to: 'ClientWallet',
                        message: 'Store change note for next use',
                        type: 'arrow',
                      },
                    },
                  ]}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Alert>
              <AlertDescription>
                <strong>Pros:</strong> Maximum privacy, robust double-spend prevention, stateless provider
              </AlertDescription>
            </Alert>
            <Alert>
              <AlertDescription>
                <strong>Cons:</strong> Client must manage change and per-call note issuance
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Protocol 2: Persistent-Token Balance Tracking */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            2. Persistent-Token Balance Tracking
            <Badge variant="outline">Stateful</Badge>
            <Badge variant="secondary">Wallet-Session</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Summary:</h4>
            <p className="text-muted-foreground">
              A Cashu token with a nonzero balance is retrieved from client storage (database or external service) and
              sent with every request. The provider tracks the balance of this particular token, deducts the cost on
              each invocation, and replies with HTTP 402 if the balance is insufficient. The client updates the token
              balance in storage and manages issuing new tokens as necessary.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Security:</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Server must manage reliable per-token state, increasing operational complexity</li>
              <li>Slightly decreased privacy as token may correlate requests</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Flow:</h4>
            <div className="bg-muted p-4 rounded-lg overflow-x-auto">
              <div className="min-w-[800px]">
                <SequenceDiagram
                  participants={['ClientDB/External', 'Client', 'Provider', 'ProviderDB']}
                  steps={[
                    {
                      type: 'message',
                      content: {
                        from: 'Client',
                        to: 'ClientDB/External',
                        message: 'Get persistent token',
                        type: 'arrow',
                      },
                    },
                    {
                      type: 'message',
                      content: {
                        from: 'ClientDB/External',
                        to: 'Client',
                        message: 'Return stored token',
                        type: 'return',
                      },
                    },
                    {
                      type: 'loop',
                      condition: 'Token has balance',
                      steps: [
                        {
                          type: 'message',
                          content: {
                            from: 'Client',
                            to: 'Provider',
                            message: 'API Request + X-Cashu header',
                            type: 'arrow',
                          },
                        },
                        {
                          type: 'message',
                          content: {
                            from: 'Provider',
                            to: 'ProviderDB',
                            message: 'Deduct usage from token balance',
                            type: 'arrow',
                          },
                        },
                        {
                          type: 'message',
                          content: {
                            from: 'ProviderDB',
                            to: 'Provider',
                            message: 'Balance updated',
                            type: 'return',
                          },
                        },
                      ],
                    },
                    {
                      type: 'alt',
                      condition: 'Sufficient balance',
                      steps: [
                        {
                          type: 'message',
                          content: {
                            from: 'Provider',
                            to: 'Client',
                            message: 'API Response (+ balance optional)',
                            type: 'return',
                          },
                        },
                        {
                          type: 'message',
                          content: {
                            from: 'Client',
                            to: 'ClientDB/External',
                            message: 'Update token balance',
                            type: 'arrow',
                          },
                        },
                      ],
                    },
                    {
                      type: 'alt',
                      condition: 'Insufficient balance',
                      steps: [
                        {
                          type: 'message',
                          content: {
                            from: 'Provider',
                            to: 'Client',
                            message: 'HTTP 402 Payment Required',
                            type: 'return',
                          },
                        },
                        {
                          type: 'message',
                          content: {
                            from: 'Client',
                            to: 'ClientDB/External',
                            message: 'Request new token',
                            type: 'arrow',
                          },
                        },
                        {
                          type: 'message',
                          content: {
                            from: 'ClientDB/External',
                            to: 'Client',
                            message: 'Provide fresh token',
                            type: 'return',
                          },
                        },
                      ],
                    },
                  ]}
                  className="w-full min-h-[600px]"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Alert>
              <AlertDescription>
                <strong>Pros:</strong> Fewer notes to track, efficient for burst/continuous users
              </AlertDescription>
            </Alert>
            <Alert>
              <AlertDescription>
                <strong>Cons:</strong> Provider must persist token balances and state
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Protocol 3: Prepaid Account / Top-up Model */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            3. Prepaid Account / Top-up Model
            <Badge variant="outline">Traditional</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Summary:</h4>
            <p className="text-muted-foreground">
              Clients request an API key by paying ecash upfront to prepay for service credits. Once the API key is
              obtained, clients use only the API key for requests without sending ecash with each call. When credits are
              exhausted (HTTP 402 response), clients purchase a new API key or top up their existing account.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Flow:</h4>
            <div className="bg-muted p-4 rounded-lg overflow-x-auto">
              <div className="min-w-[800px]">
                <SequenceDiagram
                  participants={['Wallet', 'Client', 'Provider', 'ProviderDB']}
                  steps={[
                    {
                      type: 'message',
                      content: {
                        from: 'Client',
                        to: 'Wallet',
                        message: 'Get ecash for API key purchase',
                        type: 'arrow',
                      },
                    },
                    {
                      type: 'message',
                      content: {
                        from: 'Wallet',
                        to: 'Client',
                        message: 'Provide ecash payment',
                        type: 'return',
                      },
                    },
                    {
                      type: 'message',
                      content: {
                        from: 'Client',
                        to: 'Provider',
                        message: 'Request API key + ecash payment',
                        type: 'arrow',
                      },
                    },
                    {
                      type: 'message',
                      content: {
                        from: 'Provider',
                        to: 'ProviderDB',
                        message: 'Create account with credits',
                        type: 'arrow',
                      },
                    },
                    {
                      type: 'message',
                      content: {
                        from: 'ProviderDB',
                        to: 'Provider',
                        message: 'Account created',
                        type: 'return',
                      },
                    },
                    {
                      type: 'message',
                      content: {
                        from: 'Provider',
                        to: 'Client',
                        message: 'Return API key',
                        type: 'return',
                      },
                    },
                    {
                      type: 'loop',
                      condition: 'Using API key',
                      steps: [
                        {
                          type: 'message',
                          content: {
                            from: 'Client',
                            to: 'Provider',
                            message: 'API Request + API key',
                            type: 'arrow',
                          },
                        },
                        {
                          type: 'message',
                          content: {
                            from: 'Provider',
                            to: 'ProviderDB',
                            message: 'Check/deduct credits',
                            type: 'arrow',
                          },
                        },
                        {
                          type: 'message',
                          content: {
                            from: 'ProviderDB',
                            to: 'Provider',
                            message: 'Credit status',
                            type: 'return',
                          },
                        },
                      ],
                    },
                    {
                      type: 'alt',
                      condition: 'Credits available',
                      steps: [
                        {
                          type: 'message',
                          content: {
                            from: 'Provider',
                            to: 'Client',
                            message: 'API Response',
                            type: 'return',
                          },
                        },
                      ],
                    },
                    {
                      type: 'alt',
                      condition: 'Credits exhausted',
                      steps: [
                        {
                          type: 'message',
                          content: {
                            from: 'Provider',
                            to: 'Client',
                            message: 'HTTP 402 Payment Required',
                            type: 'return',
                          },
                        },
                        {
                          type: 'message',
                          content: {
                            from: 'Client',
                            to: 'Wallet',
                            message: 'Get ecash for top-up',
                            type: 'arrow',
                          },
                        },
                        {
                          type: 'message',
                          content: {
                            from: 'Wallet',
                            to: 'Client',
                            message: 'Provide ecash payment',
                            type: 'return',
                          },
                        },
                        {
                          type: 'message',
                          content: {
                            from: 'Client',
                            to: 'Provider',
                            message: 'Top-up account + ecash payment',
                            type: 'arrow',
                          },
                        },
                        {
                          type: 'message',
                          content: {
                            from: 'Provider',
                            to: 'ProviderDB',
                            message: 'Add credits to existing account',
                            type: 'arrow',
                          },
                        },
                        {
                          type: 'message',
                          content: {
                            from: 'ProviderDB',
                            to: 'Provider',
                            message: 'Credits added',
                            type: 'return',
                          },
                        },
                        {
                          type: 'message',
                          content: {
                            from: 'Provider',
                            to: 'Client',
                            message: 'Top-up successful',
                            type: 'return',
                          },
                        },
                      ],
                    },
                  ]}
                  className="w-full min-h-[800px]"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Alert>
              <AlertDescription>
                <strong>Pros:</strong> Familiar API key model, no ecash needed per request, efficient for high-volume
                usage
              </AlertDescription>
            </Alert>
            <Alert>
              <AlertDescription>
                <strong>Cons:</strong> Requires upfront payment, API key management, potential credit loss if key is
                lost
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Protocol Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle>Protocol Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Protocol</TableHead>
                  <TableHead>Privacy</TableHead>
                  <TableHead>Server State</TableHead>
                  <TableHead>Payment Granularity</TableHead>
                  <TableHead>Difficulty</TableHead>
                  <TableHead>Appropriate Usage</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Single-use (Stateless)</TableCell>
                  <TableCell>
                    <Badge variant="secondary">High</Badge>
                  </TableCell>
                  <TableCell>None</TableCell>
                  <TableCell>Exact per-request</TableCell>
                  <TableCell>
                    <Badge variant="outline">Mid</Badge>
                  </TableCell>
                  <TableCell>Maximum security</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Persistent-Token</TableCell>
                  <TableCell>
                    <Badge variant="outline">Mid</Badge>
                  </TableCell>
                  <TableCell>Per-token</TableCell>
                  <TableCell>Up to token value</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Low</Badge>
                  </TableCell>
                  <TableCell>High-frequency calls</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Prepaid Account/Top-up</TableCell>
                  <TableCell>
                    <Badge variant="outline">Mid</Badge>
                  </TableCell>
                  <TableCell>Per-account</TableCell>
                  <TableCell>Up to top-up size</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Low</Badge>
                  </TableCell>
                  <TableCell>Enterprise/bulk use</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
