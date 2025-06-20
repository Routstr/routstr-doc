import React from 'react';
import {Download, Copy} from 'lucide-react';
import {Button} from '../../ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '../../ui/card';

export function Installation() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="max-w-5xl mx-auto px-8 py-8 space-y-20 select-text">
      <section id="docker">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <Download className="w-8 h-8 text-primary" />
            Docker Installation
          </h2>
          <p className="text-lg text-muted-foreground">
            Run otrta 402 gateway using Docker for easy deployment and isolation.
          </p>
        </div>

        <Card className="shadow-sm border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="w-5 h-5 text-blue-600" />
              Docker Compose Setup
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">The easiest way to run otrta 402 gateway is using Docker Compose:</p>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 font-mono text-sm text-green-400 relative shadow-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-3 right-3 h-8 w-8 p-0 hover:bg-white/10"
                  onClick={() =>
                    copyToClipboard(
                      'git clone https://github.com/9qeklajc/ecash-402-client.git\ncd ecash-402-client\ndocker-compose up -d',
                    )
                  }>
                  <Copy className="w-4 h-4" />
                </Button>
                <div className="space-y-2">
                  <div className="text-gray-400 text-xs uppercase tracking-wide"># Download and start with Docker</div>
                  <div>git clone https://github.com/9qeklajc/ecash-402-client.git</div>
                  <div>cd ecash-402-client</div>
                  <div>docker-compose up -d</div>
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  💡 The service will be available at{' '}
                  <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">http://localhost:3333</code>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
