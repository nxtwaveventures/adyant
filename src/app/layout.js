import './globals.css';
import { Montserrat } from 'next/font/google';
import ClientContainer from './client-container';
import { CartProvider } from '../components/CartContext';
import Navbar from '../components/Navbar';

// Import metadata from separate file
import { metadata } from './metadata';

// Export metadata for Next.js
export { metadata };

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

// Root layout (Server Component)
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#6200ea" />
      </head>
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        <CartProvider>
          <ClientContainer>
            <Navbar />
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
          </ClientContainer>
        </CartProvider>
      </body>
    </html>
  );
}
