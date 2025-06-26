import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from '../../ui/card';
import {Badge} from '../../ui/badge';
import {Alert, AlertDescription} from '../../ui/alert';
import {Server} from 'lucide-react';

export function ProviderProtocols() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Provider Protocols</h1>
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

      {/* Required Endpoints */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Required API Endpoints
            <Badge variant="destructive">MANDATORY</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">1. Model Discovery Endpoint</h4>
            <div className="bg-muted p-4 rounded-lg space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="outline">GET</Badge>
                <code className="text-sm">/models</code>
              </div>
              <p className="text-sm text-muted-foreground">
                Returns a list of supported models and their pricing in millisatoshis.
              </p>
              <div className="bg-background p-3 rounded border">
                <p className="text-xs font-medium mb-2">Example Response:</p>
                <pre className="text-xs overflow-x-auto">
                  {`{
  "models": [
    {
      "id": "gpt-4o",
      "description": "OpenAI GPT-4o",
      "pricing": {
        "per_1k_tokens": 3500
      }
    },
    {
      "id": "gpt-3.5-turbo", 
      "description": "OpenAI GPT-3.5 Turbo",
      "pricing": {
        "per_1k_tokens": 1000
      }
    }
  ]
}`}
                </pre>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">2. Payment Processing Endpoints</h4>
            <div className="space-y-3">
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">POST</Badge>
                  <code className="text-sm">/v1/chat/completions</code>
                </div>
                <p className="text-sm text-muted-foreground">
                  OpenAI-compatible endpoint that processes X-Cashu headers for payment.
                </p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">POST</Badge>
                  <code className="text-sm">/v1/embeddings</code>
                </div>
                <p className="text-sm text-muted-foreground">Embedding endpoint with X-Cashu payment support.</p>
              </div>
            </div>
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

      {/* Security Considerations */}
      <Card>
        <CardHeader>
          <CardTitle>Security Considerations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Note Verification:</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
              <li>Validate Cashu note signatures against trusted mints</li>
              <li>Check note freshness and prevent replay attacks</li>
              <li>Verify note amounts match or exceed request costs</li>
              <li>Ensure proper note redemption and burning</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Rate Limiting:</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
              <li>Implement per-note rate limiting to prevent abuse</li>
              <li>Consider request frequency limits per payment token</li>
              <li>Monitor for unusual payment patterns</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Error Handling:</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
              <li>Return HTTP 402 for insufficient payment</li>
              <li>Provide clear error messages for payment issues</li>
              <li>Handle mint communication failures gracefully</li>
              <li>Log payment events for monitoring and debugging</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Operational Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle>Operational Best Practices</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Mint Management:</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
              <li>Maintain connections to multiple trusted mints for redundancy</li>
              <li>Monitor mint health and availability</li>
              <li>Implement failover mechanisms for mint outages</li>
              <li>Keep mint public keys updated and secure</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Performance Optimization:</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
              <li>Cache pricing information to reduce API overhead</li>
              <li>Batch note verification when possible</li>
              <li>Optimize change note generation</li>
              <li>Monitor payment processing latency</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Monitoring and Logging:</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
              <li>Track payment success/failure rates</li>
              <li>Monitor total transaction volumes</li>
              <li>Log security events and suspicious activity</li>
              <li>Generate usage reports for business analytics</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Implementation Example */}
      <Card>
        <CardHeader>
          <CardTitle>Implementation Example</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-lg">
            <p className="text-sm font-medium mb-3">Basic Payment Processing Flow:</p>
            <pre className="text-xs overflow-x-auto">
              {`// Pseudo-code for processing X-Cashu payments
async function processPayment(request) {
  // 1. Extract Cashu note from X-Cashu header
  const cashuNote = request.headers['x-cashu'];
  
  // 2. Verify note with mint
  const verification = await verifyNote(cashuNote);
  if (!verification.valid) {
    return response(402, { error: 'Invalid payment' });
  }
  
  // 3. Calculate request cost
  const cost = calculateCost(request.model, request.tokens);
  if (verification.amount < cost) {
    return response(402, { error: 'Insufficient payment' });
  }
  
  // 4. Process AI request
  const aiResponse = await processAIRequest(request);
  
  // 5. Generate change if needed
  const change = verification.amount - cost;
  const changeNote = change > 0 ? await generateChange(change) : null;
  
  // 6. Return response with change
  return response(200, aiResponse, {
    'x-cashu': changeNote
  });
}`}
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Integration Guidelines */}
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

          <div>
            <h4 className="font-semibold mb-2">Testing and Validation:</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
              <li>Test with various note denominations and amounts</li>
              <li>Validate change calculation accuracy</li>
              <li>Verify error handling for edge cases</li>
              <li>Load test payment processing under high volume</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
