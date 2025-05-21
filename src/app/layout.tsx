import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'saneha.codes',
  description: 'I like making fun, interactive things with code.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}