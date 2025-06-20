import React from 'react';
import {CodeBlock} from '@/components/ui/code-block';

export function AdvancedSetup() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-8 select-text">
      <h1 className="text-4xl font-bold mb-6">Advanced Setup</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Advanced configuration options for power users and production deployments.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4">Routstr Proxy</h2>
          <p className="text-muted-foreground mb-4">
            Configure a Routstr proxy for enhanced routing and load balancing.
          </p>
          <CodeBlock
            code={`# Configure Routstr proxy
export ROUTSTR_ENDPOINT=https://routstr.example.com
export ROUTSTR_TOKEN=your-routstr-token

# Start with proxy
npm run start:proxy`}
            language="bash"
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Custom Mints</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">Configure custom e-cash mints for your deployment.</p>
            <CodeBlock
              code={`{
  "mints": [
    {
      "url": "https://mint.example.com",
      "name": "Primary Mint",
      "enabled": true
    }
  ]
}`}
              language="json"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Production Deployment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">Environment Variables</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• NODE_ENV=production</li>
                <li>• PORT=3000</li>
                <li>• DATABASE_URL</li>
                <li>• MINT_ENDPOINTS</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">Security</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Enable HTTPS</li>
                <li>• Configure rate limiting</li>
                <li>• Set up monitoring</li>
                <li>• Regular updates</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Monitoring & Logging</h2>
          <div className="space-y-4">
            <div className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/20">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200">Health Checks</h4>
              <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">
                Implement proper health checks for your deployment to ensure system reliability.
              </p>
            </div>
            <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950/20">
              <h4 className="font-semibold text-green-800 dark:text-green-200">Metrics</h4>
              <p className="mt-2 text-sm text-green-700 dark:text-green-300">
                Track key metrics like payment success rates, response times, and error rates.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
