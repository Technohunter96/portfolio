import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './provider';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Michal's Portfolio",
  description: 'Modern & Minimal Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/favicone.svg' sizes='any' />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Script
            id='google-analytics'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-BKRKW9YDV0"></script>
                <script>
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-BKRKW9YDV0');
                </script>
              `,
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
