/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Enable React strict mode for improved error handling
  reactStrictMode: true,
  // Allow importing SVG files
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  // Improve image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        pathname: '/**',
      },
    ],
  },
  // Disable x-powered-by header for security
  poweredByHeader: false,
  // Note: swcMinify option has been removed as it's no longer supported in Next.js 15.2.3
}

export default nextConfig;