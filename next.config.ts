/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  webpack: (config, { isServer }) => {
    // Only apply these optimizations on the client-side
    if (!isServer) {
      // Configure chunk splitting
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          cacheGroups: {
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name(module: any, chunks: any, cacheGroupKey: string) {
                const moduleFileName = module
                  .identifier()
                  .split('/')
                  .reduceRight((item: string) => item);
                return `${cacheGroupKey}-${moduleFileName}`;
              },
              chunks: 'all',
            },
          },
        },
      };
    }
    return config;
  },

  // Enable compression
  compress: true,

  // Enable production source maps (optional, might increase bundle size)
  productionBrowserSourceMaps: false,
};

export default nextConfig;
