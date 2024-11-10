import './globals.css';
import '../../dist/output.css';
import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1 className="text-red-500" style={{ color: 'red' }}>
            practice-typescript
          </h1>
        </header>
        {children}
      </body>
    </html>
  );
}
