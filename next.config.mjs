/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // When using a custom domain, we don't need basePath or assetPrefix
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

export default nextConfig;
