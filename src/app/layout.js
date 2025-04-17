import { Inter } from 'next/font/google';
import "./globals.css";
import ClientContainer from './client-container';

// Import metadata from separate file
import { metadata } from './metadata';

// Export metadata for Next.js
export { metadata };

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

// Root layout (Server Component)
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#6200ea" />
      </head>
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        <ClientContainer>
          <div className="flex-grow">
            {children}
          </div>
        </ClientContainer>
      </body>
    </html>
  );
}
