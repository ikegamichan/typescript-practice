import { ClipboardDocumentListIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

type CodeBlockProps = {
  code: string;
  language?: string;
};

export const CodeBlock = ({ code, language = 'typescript' }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('コピーに失敗しました:', err);
    }
  };

  return (
    <div className="content relative">
      <button
        onClick={handleCopy}
        className={`absolute right-2 top-2 cursor-pointer rounded border-none px-2 py-1 text-xs text-white ${copied && 'text-green-300'}`}
      >
        {copied ? <ClipboardDocumentCheckIcon className="size-6" /> : <ClipboardDocumentListIcon className="size-6" />}
      </button>
      <SyntaxHighlighter
        language={language}
        style={darcula}
        showLineNumbers
        wrapLongLines
        className="rounded-lg [&>code]:!whitespace-nowrap [&>code]:!break-all"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
