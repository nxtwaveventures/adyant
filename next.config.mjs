/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure proper image optimization
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Increase build timeout
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  // External packages setting
  serverExternalPackages: [],
  // Improve file serving
  poweredByHeader: false,
  compress: true,
  // Production settings
  output: 'export',  // Static site generation for GitHub Pages
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // Allow proper error handling
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  distDir: '.next',
};

export default nextConfig;
