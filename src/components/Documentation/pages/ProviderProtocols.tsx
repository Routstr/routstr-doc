import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from '../../ui/card';
import {Badge} from '../../ui/badge';
import {Alert, AlertDescription} from '../../ui/alert';
import {Server} from 'lucide-react';

export function ProviderProtocols() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Provider Protocol</h1>
        <p className="text-xl text-muted-foreground">
          Implementation guidelines, API extensions, and operational best practices for X-Cashu payment providers.
        </p>
      </div>

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Server className="w-5 h-5" />
            Provider Implementation Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This section outlines the specific requirements and best practices for implementing X-Cashu payment
            protocols on the provider side. It covers server setup, API extensions, security considerations, and
            operational guidelines for maintaining a reliable payment gateway.
          </p>
        </CardContent>
      </Card>

      {/* Implementation Notes */}
      <Card>
        <CardHeader>
          <CardTitle>Implementation Notes</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>
              <code className="bg-muted px-2 py-1 rounded">X-Cashu</code> header is used in all protocols for both
              requests (payment) and responses (returning change).
            </li>
            <li>
              Providers are required to implement the{' '}
              <code className="bg-muted px-2 py-1 rounded">/provider/models</code> endpoint for pricing and model
              discovery.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Model & Pricing Discovery */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Model & Pricing Discovery
            <Badge variant="destructive">REQUIRED</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            To enable wallet-aware clients to estimate and optimize payment, every provider MUST implement a discovery
            endpoint:
          </p>

          <div className="space-y-2">
            <p>
              <strong>Endpoint:</strong> <code className="bg-muted px-2 py-1 rounded">GET /provider/models</code>
            </p>
            <p>
              <strong>Description:</strong> Returns a list of supported models with detailed pricing information,
              minimum payment requirements, and model specifications.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Example Response:</h4>
            <div className="bg-muted p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                {`{
   "models": [
     {
       "name": "gpt-4o",
       "input_cost": "15.00",
       "output_cost": "60.00",
       "min_cost_per_request": "500",
       "model_type": "chat",
       "description": "OpenAI GPT-4o - Latest multimodal model",
       "context_length": 128000,
       "is_free": false
     },
     {
       "name": "gpt-3.5-turbo",
       "input_cost": "1.50",
       "output_cost": "2.00",
       "min_cost_per_request": "100",
       "model_type": "chat",
       "description": "OpenAI GPT-3.5 Turbo",
       "context_length": 16385,
       "is_free": false
     },
     {
       "name": "text-embedding-3-small",
       "input_cost": "0.00",
       "output_cost": "0.00",
       "model_type": "embedding",
       "description": "Small embedding model",
       "context_length": 8192,
       "is_free": true
     }
   ]
 }`}
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Field Descriptions:</h4>
            <div className="space-y-2 text-sm">
              <div className="grid grid-cols-3 gap-4 p-2 bg-muted/50 rounded">
                <span className="font-medium">Field</span>
                <span className="font-medium">Type</span>
                <span className="font-medium">Description</span>
              </div>
              <div className="grid grid-cols-3 gap-4 p-2">
                <code>name</code>
                <span>string</span>
                <span>Model identifier</span>
              </div>
              <div className="grid grid-cols-3 gap-4 p-2 bg-muted/30">
                <code>input_cost</code>
                <span>decimal</span>
                <span>Cost per 1K input tokens (millisats)</span>
              </div>
              <div className="grid grid-cols-3 gap-4 p-2">
                <code>output_cost</code>
                <span>decimal</span>
                <span>Cost per 1K output tokens (millisats)</span>
              </div>
              <div className="grid grid-cols-3 gap-4 p-2">
                <code>min_cost_per_request</code>
                <span>decimal?</span>
                <span>Optional minimum charge per request</span>
              </div>
              <div className="grid grid-cols-3 gap-4 p-2 bg-muted/30">
                <code>model_type</code>
                <span>string?</span>
                <span>Type: "chat", "embedding", etc.</span>
              </div>
              <div className="grid grid-cols-3 gap-4 p-2">
                <code>description</code>
                <span>string?</span>
                <span>Human-readable model description</span>
              </div>
              <div className="grid grid-cols-3 gap-4 p-2 bg-muted/30">
                <code>context_length</code>
                <span>integer?</span>
                <span>Maximum context window size</span>
              </div>
              <div className="grid grid-cols-3 gap-4 p-2">
                <code>is_free</code>
                <span>boolean?</span>
                <span>Whether the model is free to use</span>
              </div>
            </div>
          </div>

          <Alert>
            <AlertDescription>
              <ul className="list-disc list-inside space-y-1">
                <li>Clients MUST fetch this endpoint frequently to select models/calculate notes.</li>
                <li>If unsupported, clients should warn the user and fail gracefully.</li>
              </ul>
            </AlertDescription>
          </Alert>

          <div>
            <h4 className="font-semibold mb-2">Benefits:</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Clients can create notes with the exact amount</li>
              <li>Smooth automation for payments; change minimization</li>
              <li>Supports dynamic pricing and model availability changes</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* X-Cashu Header Specification */}
      <Card>
        <CardHeader>
          <CardTitle>X-Cashu Header Specification</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Request Headers:</h4>
            <div className="bg-muted p-4 rounded-lg space-y-2">
              <p>
                <code className="text-sm">X-Cashu: &lt;cashu_token&gt;</code>
              </p>
              <p className="text-xs text-muted-foreground">
                Contains the Cashu note(s) for payment. Format depends on the chosen protocol.
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Response Headers:</h4>
            <div className="bg-muted p-4 rounded-lg space-y-2">
              <p>
                <code className="text-sm">X-Cashu: &lt;change_token&gt;</code>
              </p>
              <p className="text-xs text-muted-foreground">
                Contains change notes when payment exceeds actual usage cost.
              </p>
            </div>
          </div>

          <Alert>
            <AlertDescription>
              <strong>Note:</strong> The X-Cashu header must be handled securely to prevent replay attacks and ensure
              proper note redemption.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Integration Guidelines</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Existing API Integration:</h4>
            <p className="text-sm text-muted-foreground mb-3">
              For providers with existing OpenAI-compatible APIs, X-Cashu support can be added as middleware:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
              <li>Add X-Cashu header processing before existing authentication</li>
              <li>Integrate payment verification into request pipeline</li>
              <li>Modify response handling to include change notes</li>
              <li>Update documentation to reflect new payment options</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Cost Management System */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">Dynamic Cost Management</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            The X-Cashu protocol supports dynamic, usage-based pricing that enables intelligent cost management based on
            actual resource consumption. This approach protects providers from potential losses while maintaining fair
            pricing for clients.
          </p>

          <Alert>
            <AlertDescription className="text-amber-500 dark:text-amber-400">
              <strong>Warning:</strong> Fixed per-request pricing can be risky. If a user's request requires more tokens
              or computational resources than anticipated, providers may incur losses.
            </AlertDescription>
          </Alert>

          <div>
            <h4 className="font-semibold mb-2">Recommended Pricing Strategies:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4 bg-muted/50">
                <h5 className="text-sm font-medium mb-2">Token-Based Pricing</h5>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  <li>Charge per input/output token</li>
                  <li>Set minimum request cost</li>
                  <li>Apply token-count estimation</li>
                  <li>Include processing overhead</li>
                </ul>
              </Card>
              <Card className="p-4 bg-muted/50">
                <h5 className="text-sm font-medium mb-2">Dynamic Adjustments</h5>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  <li>Real-time load balancing</li>
                  <li>Resource utilization tracking</li>
                  <li>Peak/off-peak pricing</li>
                  <li>Market demand response</li>
                </ul>
              </Card>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Cost Protection Mechanisms:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4 bg-muted/50">
                <h5 className="text-sm font-medium mb-2">Request Analysis</h5>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  <li>Pre-request token estimation</li>
                  <li>Context length validation</li>
                  <li>Resource requirement checks</li>
                  <li>Cost threshold alerts</li>
                </ul>
              </Card>
              <Card className="p-4 bg-muted/50">
                <h5 className="text-sm font-medium mb-2">Safety Measures</h5>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  <li>Maximum request size limits</li>
                  <li>Automatic request splitting</li>
                  <li>Progressive charging</li>
                  <li>Usage monitoring</li>
                </ul>
              </Card>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Implementation Guidelines:</h4>
            <Alert>
              <AlertDescription>
                <strong>Best Practices:</strong>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Implement token counting and cost estimation before processing</li>
                  <li>Set up real-time usage monitoring and alerts</li>
                  <li>Use progressive charging for long-running requests</li>
                  <li>
                    Maintain pricing updates via the <code className="bg-muted px-1">/provider/models</code> endpoint
                  </li>
                  <li>Consider implementing request queuing during high demand</li>
                </ul>
              </AlertDescription>
            </Alert>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Benefits of Dynamic Pricing:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4 bg-muted/50">
                <h5 className="text-sm font-medium mb-2">For Providers</h5>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  <li>Cost-based revenue protection</li>
                  <li>Resource optimization</li>
                  <li>Sustainable operations</li>
                  <li>Flexible scaling</li>
                </ul>
              </Card>
              <Card className="p-4 bg-muted/50">
                <h5 className="text-sm font-medium mb-2">For Clients</h5>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  <li>Fair usage-based pricing</li>
                  <li>Transparent cost structure</li>
                  <li>Predictable expenses</li>
                  <li>Quality guarantees</li>
                </ul>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
