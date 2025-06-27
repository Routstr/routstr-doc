import React from 'react';
import Image from 'next/image';

export function Overview() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-8 select-text">
      <h1 className="text-4xl font-bold mb-6">Overview</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Learn about the Otrta Routstr e-cash payment system, integrated with Routstr Marketplace and AI ecosystem for
        the ultimate user experience.
      </p>

      <div className="space-y-12">
        {/* Client Interface Overview Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Client Interface Overview</h2>
          <div className="w-full mb-8">
            <Image
              src="/client.gif"
              alt="OTRTA Client Interface Demo"
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg border shadow-md"
            />
          </div>
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg">
              The OTRTA eCash client offers a seamless, user-friendly interface for managing your digital wallet,
              providers, models, and transactions. Here's a quick overview of what you can do:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">🏠 Dashboard</h4>
                <p className="text-muted-foreground">
                  View wallet balance, redeem eCash tokens, collect cashback, and manage your current provider—all with
                  real-time updates.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">🔗 Providers</h4>
                <p className="text-muted-foreground">
                  Browse, add, and manage Nostr marketplace providers. Set defaults, add custom providers, and refresh
                  the list in real time.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">🤖 Models</h4>
                <p className="text-muted-foreground">
                  Explore and test AI models, view pricing, and switch between proxy and OpenAI models.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">📊 Transactions</h4>
                <p className="text-muted-foreground">
                  Monitor completed and pending transactions with real-time auto-refresh and detailed status indicators.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">⚙️ Settings</h4>
                <p className="text-muted-foreground">
                  Configure Nostr authentication, manage wallets, mints, and relays, and monitor connection status
                  securely.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">🔐 Authentication</h4>
                <p className="text-muted-foreground">
                  Secure login and registration with Nostr key support and extension integration.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
