import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {CodeBlock} from '@/components/ui/code-block';
import {Badge} from '@/components/ui/badge';
import {Code, Terminal, Wallet, Settings} from 'lucide-react';
import React from 'react';

export function RoutstrIntegration() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <section>
        <h1 className="text-4xl font-bold mb-6">Routstr Integration Guide</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Learn how to integrate Routstr with popular AI coding tools like Roo Code and Goose for private,
          Bitcoin-powered development.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Code className="w-7 h-7 text-primary" />
          Setting up VSCode with Roo Code
        </h2>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline">Step 1</Badge>
                Preparation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Before you open VSCode, create a Cashu token worth 1.5k to 5k sats (recommended for top models) and have
                it ready.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline">Step 2</Badge>
                Installation & Setup
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    1
                  </div>
                  <span>
                    Install <strong>Roo Code</strong> from the VSCode Extensions Marketplace
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    2
                  </div>
                  <span>
                    Choose <strong>OpenRouter</strong> as your API Provider
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    3
                  </div>
                  <span>Enter random characters in the API Key field (temporary)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline">Step 3</Badge>
                Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    1
                  </div>
                  <span>
                    Click on <strong>default</strong> mode and click <strong>Edit</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    2
                  </div>
                  <span>
                    Enable <strong>custom base URL</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    3
                  </div>
                  <span>Enter the Routstr API endpoint:</span>
                </div>
              </div>

              <CodeBlock code="https://api.routstr.com" language="url" />

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  4
                </div>
                <span>Replace the API Key with your Cashu token</span>
              </div>

              <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <p className="text-green-800 dark:text-green-200 font-medium">
                  🎉 That's it! You can start coding with privacy!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Terminal className="w-7 h-7 text-primary" />
          Using Goose with Routstr
        </h2>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Setup</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Setting up Goose with Routstr is even simpler than VSCode. Make sure you have a Cashu token ready.
              </p>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                      1
                    </div>
                    <h4 className="font-semibold">Download Goose</h4>
                    <p className="text-sm text-muted-foreground">Get it from the official repository</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                      2
                    </div>
                    <h4 className="font-semibold">Choose Provider</h4>
                    <p className="text-sm text-muted-foreground">Select "OpenAI Compatible"</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                      3
                    </div>
                    <h4 className="font-semibold">Set Base URL</h4>
                    <p className="text-sm text-muted-foreground">Enter Routstr API endpoint</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                      4
                    </div>
                    <h4 className="font-semibold">Add Token</h4>
                    <p className="text-sm text-muted-foreground">Use your Cashu token as API key</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="font-medium">Configuration:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Base URL:</p>
                      <CodeBlock code="https://api.routstr.com" language="url" />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">API Key:</p>
                      <CodeBlock code="[Your Cashu Token]" language="text" />
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                  <p className="text-purple-800 dark:text-purple-200 font-medium">
                    🚀 Ready to create Freedom Agents with full privacy!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Wallet className="w-7 h-7 text-primary" />
          Creating Cashu Tokens
        </h2>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>No Emails, No Sign-ups, Just Cashu & Lightning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                You can use any of the top LLMs via Routstr by inputting our API endpoint and a Cashu token. This is
                similar to using OpenRouter, but without the need to sign up using email or top up using fiat.
              </p>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="p-4 border rounded-lg text-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-2 mx-auto">
                      1
                    </div>
                    <h4 className="font-semibold text-sm">Setup Wallet</h4>
                    <p className="text-xs text-muted-foreground">Get a Cashu wallet</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mb-2 mx-auto">
                      2
                    </div>
                    <h4 className="font-semibold text-sm">Deposit Sats</h4>
                    <p className="text-xs text-muted-foreground">Use Lightning Network</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mb-2 mx-auto">
                      3
                    </div>
                    <h4 className="font-semibold text-sm">Create Token</h4>
                    <p className="text-xs text-muted-foreground">Generate Cashu token</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mb-2 mx-auto">
                      4
                    </div>
                    <h4 className="font-semibold text-sm">Start Coding</h4>
                    <p className="text-xs text-muted-foreground">Token is your API key</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/30 dark:to-green-950/30 rounded-lg p-6">
                  <h3 className="font-semibold mb-3">Recommended amounts:</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">For top models (GPT-4, Claude-3):</span>
                      <Badge variant="outline">5k+ sats</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">For smaller models (8b models):</span>
                      <Badge variant="outline">10+ sats</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Settings className="w-7 h-7 text-primary" />
          Top-up and Key Management
        </h2>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Two Ways to Manage your API Keys</CardTitle>
            </CardHeader>
            <CardContent>

              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                        1
                      </div>
                      <div>
                        <p className="font-medium">Simple Top-Up using Cashu/Lightning</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Top-up your existing Cashu token as it runs out of balance without having to switch to a new Cashu token. No accounts, no sign ins, no external dependencies.
                    </p>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                        2
                      </div>
                      <div>
                        <p className="font-medium">API Key Management with Cloud Sync</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      For better organization and easier top-ups, you can use our chat app to manage your Cashu tokens and API
                      keys with fully encrypted cloud backups.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Simple Top-Up using Cashu/Lightning</CardTitle>
            </CardHeader>
            <CardContent>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <CodeBlock code="https://routstr.com/topup" language="url" />
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                          1
                        </div>
                        <div>
                          <p className="font-medium">Input your Cashu token/API Key</p>
                          <p className="text-sm text-muted-foreground">Check how much balance you have</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                          2
                        </div>
                        <div>
                          <p className="font-medium">Topup using Cashu or Lightning</p>
                          <p className="text-sm text-muted-foreground">That's it, it's that simple. </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>                        
                API Key Management with Cloud Sync
              </CardTitle>
            </CardHeader>
            <CardContent>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <CodeBlock code="https://chat.routstr.com" language="url" />
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                          1
                        </div>
                        <div>
                          <p className="font-medium">Login with Nostr</p>
                          <p className="text-sm text-muted-foreground">Use your Nostr extension or create a new nsec</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                          2
                        </div>
                        <div>
                          <p className="font-medium">Deposit to NIP60 wallet</p>
                          <p className="text-sm text-muted-foreground">Use Lightning or Cashu</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                          3
                        </div>
                        <div>
                          <p className="font-medium">Create encrypted API keys</p>
                          <p className="text-sm text-muted-foreground">Synced to Nostr relays using NIP44</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">⚠️ Important Backup Note</h4>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    Be sure to back up your <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">nsec</code> if
                    you create a new one, as your wallet balance and API keys are attached to that private key.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
