import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CRMcv - best CRMs',
  description: 'Best CRM for small businesses',
  favicon: 'favicon.ico',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      {/* <Head> */}
      <title>{metadata.title}</title>
      <meta name='description' content={metadata.description} />
      <link rel='icon' href={metadata.favicon} />
      {/* Alternatively, if you use a PNG or SVG */}
      {/* <link rel="icon" href="/favicon.png" type="image/png" /> */}
      {/* <link rel="icon" href="/favicon.svg" type="image/svg+xml" /> */}
      {/* </Head> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
