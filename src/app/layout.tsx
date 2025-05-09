import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import TanstackQueryProvider from '@/components/tanstack-query-provider';
import { Container } from '@mui/material';
import ReduxProvider from '@/components/redux-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Container maxWidth='md'>
          <ReduxProvider>
            <TanstackQueryProvider>{children}</TanstackQueryProvider>
          </ReduxProvider>
        </Container>
      </body>
    </html>
  );
}
