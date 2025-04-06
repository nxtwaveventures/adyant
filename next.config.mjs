/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Get the repository name from env or use default name
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '/adyant',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '/adyant',
};

export default nextConfig;
