import React from 'react';
import {CodeBlock} from '@/components/ui/code-block';

export function HowToUse() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-8 select-text">
      <h1 className="text-4xl font-bold mb-6">How to Use otrta 402 gateway</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Learn how to make your first API calls and integrate otrta 402 gateway into your applications.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
          <p className="text-muted-foreground mb-4">
            Getting started with otrta 402 gateway is simple. Replace your OpenAI endpoint and add your e-cash header.
          </p>
          <CodeBlock
            code={`curl -X POST https://ecash.otrta.me/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "X-Cashu: your-ecash-token" \\
  -d @request.json`}
            language="bash"
          />
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
