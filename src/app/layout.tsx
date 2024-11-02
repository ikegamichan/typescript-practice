import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>practice-typescript</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
