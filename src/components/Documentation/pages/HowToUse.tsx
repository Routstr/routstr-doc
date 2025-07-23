import React from 'react';
import {CodeBlock} from '@/components/ui/code-block';

export function HowToUse() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold mb-6">How to Use</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Learn how to make your first API calls and integrate Routstr Client 402 gateway into your applications.
      </p>

      <div className="space-y-12">
        <section>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-900 dark:text-blue-100">🚀 Try the Live Service</h2>
            <p className="text-muted-foreground mb-4">
              Experience Routstr Client's e-cash payment system without any setup or configuration. Our live service is
              available for immediate use with AI services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div className="flex-1">
                <p className="font-medium mb-2">Live Service URL:</p>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border">
                  <code className="text-sm font-mono text-blue-600 dark:text-blue-400">
                    https://ecash.client.otrta.me/
                  </code>
                </div>
              </div>
              <div className="flex-1">
                <p className="font-medium mb-2">Key Benefits:</p>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    No installation required
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Pre-configured with trusted mints
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Instant access to AI services
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Nostr authentication with NIP-44 encryption
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                💡 <strong>Quick Start:</strong> Visit the live service to get e-cash tokens and start making AI
                requests immediately. Perfect for testing and evaluation before setting up your own instance.
              </p>
            </div>
            <div className="mt-3 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <p className="text-sm text-purple-800 dark:text-purple-200">
                🔐 <strong>Security:</strong> The live service uses Nostr for authentication, with all sensitive data
                encrypted using NIP-44 for maximum privacy and security. Your API keys and wallet information remain
                private and secure.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Step-by-Step Guide</h2>
          <p className="text-muted-foreground mb-6">
            Follow these simple steps to start using AI services with e-cash payments through our live service.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-2">Add E-Cash to Your Wallet</h4>
                <p className="text-muted-foreground mb-3">
                  Visit <code className="bg-muted px-2 py-1 rounded">https://ecash.client.otrta.me/</code> and
                  authenticate using your Nostr keys. Once logged in, add e-cash tokens to your wallet using supported
                  Cashu mints or the built-in wallet features.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-3">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    💡 The client comes pre-configured with trusted mints for immediate use. Your authentication and
                    data are secured with NIP-44 encryption.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-2">Create an API Key</h4>
                <p className="text-muted-foreground mb-3">
                  Navigate to the <strong>Settings</strong> section in the client interface and create a new API key.
                  This key will be used to authenticate your requests to the AI services and is securely stored using
                  NIP-44 encryption.
                </p>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-3">
                  <p className="text-sm font-mono">Settings → API Keys → Create New Key</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Keys are encrypted and synced across your devices via Nostr relays
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-2">Configure Your Application</h4>
                <p className="text-muted-foreground mb-3">
                  Use the server base URL in any OpenAI-compatible application or API client:
                </p>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border">
                  <p className="font-medium mb-2">Server Base URL:</p>
                  <code className="text-sm font-mono text-purple-600 dark:text-purple-400">
                    https://ecash.server.otrta.me
                  </code>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                4
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-2">Add Your API Key</h4>
                <p className="text-muted-foreground mb-3">
                  In your OpenAI-compatible application, paste the API key you created in step 2. The application will
                  now use e-cash payments automatically.
                </p>
                <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-3">
                  <p className="text-sm text-green-800 dark:text-green-200">
                    ✅ <strong>That's it!</strong> Your application will now make AI requests using e-cash payments,
                    with automatic cost deduction and change handling.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-lg">
            <h4 className="font-semibold mb-3">🔧 Compatible Applications</h4>
            <p className="text-muted-foreground mb-3">
              This setup works with any OpenAI-compatible application, including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>ChatGPT clients</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Code editors</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>Custom applications</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>API clients</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
          <p className="text-muted-foreground mb-4">
            Getting started with Routstr Client gateway is simple. You can use either our live service at{' '}
            <code className="bg-muted px-2 py-1 rounded">https://ecash.client.otrta.me/</code> or run locally. Simply
            replace your OpenAI endpoint and add your e-cash header.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Using Live Service:</h4>
              <CodeBlock
                code={`curl -X POST https://ecash.client.otrta.me/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "X-Cashu: your-ecash-token" \\
  -d @request.json`}
                language="bash"
              />
            </div>

            <div>
              <h4 className="font-semibold mb-2">Using Local Instance:</h4>
              <CodeBlock
                code={`curl -X POST http://localhost:3333/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "X-Cashu: your-ecash-token" \\
  -d @request.json`}
                language="bash"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Payment Flow</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 border rounded-lg">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                1
              </div>
              <h4 className="font-semibold">Get E-Cash</h4>
              <p className="text-sm text-muted-foreground">Obtain tokens from a mint</p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                2
              </div>
              <h4 className="font-semibold">Make Request</h4>
              <p className="text-sm text-muted-foreground">Send API call with token</p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                3
              </div>
              <h4 className="font-semibold">Auto Payment</h4>
              <p className="text-sm text-muted-foreground">System deducts cost</p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                4
              </div>
              <h4 className="font-semibold">Get Response</h4>
              <p className="text-sm text-muted-foreground">Receive AI response</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
          <div className="space-y-4">
            <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">Common Issues</h4>
              <ul className="mt-2 text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                <li>• Invalid e-cash token format</li>
                <li>• Insufficient balance</li>
                <li>• Network connectivity issues</li>
                <li>• Incorrect API endpoint</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
