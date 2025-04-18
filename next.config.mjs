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
  // Production settings
  output: 'export',  // Static site generation for GitHub Pages
  trailingSlash: true, // Add trailing slashes to all URLs
  // Improve file serving
  poweredByHeader: false,
  compress: true,
  // Production settings
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // Avoid cache collisions
  generateBuildId: async () => {
    return `build-${new Date().getTime()}`;
  },
  // Allow proper error handling
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  distDir: '.next',
};

export default nextConfig;
