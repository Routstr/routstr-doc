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
        <section>
          <h2 className="text-2xl font-bold mb-4">What is Otrta Routstr?</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Otrta Routstr is a cutting-edge e-cash payment system that enables secure, private, and instant digital
              transactions. Built on the Cashu protocol and seamlessly integrated with the Routstr Marketplace and
              Roustr AI ecosystem.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Privacy-focused transactions
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Routstr Marketplace integration
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <Image
                src="/cline.gif"
                alt="Payment Process Demo"
                width={400}
                height={300}
                className="rounded-lg border"
              />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <p className="text-muted-foreground">
                The system works by issuing digital tokens that represent value, similar to cash but in digital form.
                These tokens can be transferred instantly and privately between users without revealing transaction
                details to third parties.
              </p>
              <div className="space-y-3">
                <div className="p-3 border-l-4 border-green-500 bg-green-50 dark:bg-green-950/20">
                  <h4 className="font-semibold text-green-800 dark:text-green-200">Step 1: Mint Tokens</h4>
                  <p className="text-sm text-green-700 dark:text-green-300">Convert Lightning sats to e-cash tokens</p>
                </div>
                <div className="p-3 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/20">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200">Step 2: Transfer</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">Send tokens privately to any recipient</p>
                </div>
                <div className="p-3 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-950/20">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200">Step 3: Redeem</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300">Convert tokens back to Lightning sats</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg">
              <div className="mb-4">
                <Image src="/kilocode.gif" alt="Privacy Feature" width={80} height={60} className="rounded" />
              </div>
              <h4 className="font-semibold mb-2">Privacy First</h4>
              <p className="text-sm text-muted-foreground">
                Transactions are private by design. No one can see your balance or transaction history except you.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="mb-4">
                <Image src="/roocode.gif" alt="Speed Feature" width={80} height={60} className="rounded" />
              </div>
              <h4 className="font-semibold mb-2">Lightning Fast</h4>
              <p className="text-sm text-muted-foreground">
                Instant transfers with minimal fees using the Lightning Network infrastructure.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="mb-4">
                <Image src="/goose.gif" alt="Decentralized Feature" width={80} height={60} className="rounded" />
              </div>
              <h4 className="font-semibold mb-2">Decentralized</h4>
              <p className="text-sm text-muted-foreground">
                No central authority controls your money. True peer-to-peer digital cash.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Routstr Ecosystem Integration</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Routstr Marketplace</h3>
              <p className="text-muted-foreground">
                OTRTA seamlessly integrates with the Routstr Marketplace, a provider discovery platform where users can
                find and connect with service providers. Pay providers directly with e-cash for their services.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Discover service providers
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Direct provider payments
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Privacy-preserving transactions
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">AI-Powered Experience</h3>
              <p className="text-muted-foreground">
                The Routstr AI ecosystem enhances your payment experience with intelligent routing, fraud detection, and
                personalized recommendations while maintaining complete privacy.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Smart payment routing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  AI fraud prevention
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Personalized insights
                </li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg border">
            <h4 className="font-semibold text-lg mb-2 text-blue-800 dark:text-blue-200">
              🚀 Best-in-Class User Experience
            </h4>
            <p className="text-blue-700 dark:text-blue-300">
              By combining OTRTA's privacy-first e-cash technology with Routstr's marketplace and AI capabilities, users
              enjoy a seamless, intelligent, and secure payment experience that adapts to their needs while protecting
              their privacy.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">🔍 Provider Discovery</h4>
              <p className="text-muted-foreground">
                Find and connect with service providers through Routstr Marketplace. Pay them directly with instant,
                private e-cash payments while maintaining complete transaction privacy.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">🎯 Smart Micropayments</h4>
              <p className="text-muted-foreground">
                AI-optimized routing for small transactions like content tips, API calls, or pay-per-use services with
                intelligent fee optimization.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">🌍 Global Commerce</h4>
              <p className="text-muted-foreground">
                Cross-border transactions powered by AI routing algorithms that find the best paths while maintaining
                privacy and minimizing costs.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">🤖 AI-Enhanced Services</h4>
              <p className="text-muted-foreground">
                Access AI-powered services within the Routstr ecosystem, paying seamlessly with e-cash while benefiting
                from personalized experiences.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
