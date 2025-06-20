'use client';

import React, {useState} from 'react';
import {Copy, Check} from 'lucide-react';
import {Button} from './button';
import {cn} from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language = 'text',
  className,
  showLineNumbers: _showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className={cn('relative group', className)}>
      <div className="bg-gray-900 rounded-lg overflow-hidden">
        {/* Header with language and copy button */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
          <span className="text-xs text-gray-400 font-medium uppercase">{language}</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className="h-6 w-6 p-0 text-gray-400 hover:text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">
            {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
          </Button>
        </div>

        {/* Code content */}
        <div className="p-4 overflow-x-auto">
          <pre className="text-green-400 font-mono text-sm leading-relaxed">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

interface InlineCodeBlockProps {
  code: string;
  className?: string;
}

export function InlineCodeBlock({code, className}: InlineCodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className={cn('relative group inline-block', className)}>
      <div className="bg-gray-900 rounded-lg p-3 relative">
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="absolute top-2 right-2 h-6 w-6 p-0 text-gray-400 hover:text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">
          {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
        </Button>
        <pre className="text-green-400 font-mono text-xs leading-relaxed pr-8">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
