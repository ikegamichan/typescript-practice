import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto min-h-screen max-w-4xl">{children}</div>
      </body>
    </html>
  );
}
