import './globals.css';
import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto mb-36 mt-8 max-w-4xl">{children}</div>
      </body>
    </html>
  );
}
