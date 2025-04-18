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
  // Performance optimizations
  reactStrictMode: true,
  swcMinify: true,
  // Increase build timeout
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
    // Optimize memory usage
    memoryBasedWorkersCount: true,
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
  // Avoid cache collisions
  generateBuildId: async () => {
    return `build-${new Date().getTime()}`;
  },
  // Note: with output: 'export', redirects won't automatically work
  // Adding this for development mode and documentation
  async redirects() {
    return [
      {
        source: '/shop',
        destination: '/art/t-shirt-catalogue',
        permanent: true,
      },
    ];
  },
  // Allow proper error handling
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  distDir: '.next',
};

export default nextConfig;
