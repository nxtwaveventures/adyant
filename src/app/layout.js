'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { CartProvider } from '../components/CartContext';
import Navbar from '../components/Navbar';
import CookieConsent from '../components/CookieConsent';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#312e81" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Adyant's World - Ocean Conservation through Minecraft</title>
        <meta name="description" content="Join Adyant on fun Minecraft adventures while learning about ocean conservation!" />
      </head>
      <body>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <CookieConsent />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
