import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

type CodeBlockProps = {
  code: string;
  language?: string;
};

export const CodeBlock = ({ code, language = 'typescript' }: CodeBlockProps) => {
  return (
    <SyntaxHighlighter language={language} style={darcula} showLineNumbers wrapLongLines>
      {code}
    </SyntaxHighlighter>
  );
};
