/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'utfs.io',
            port: '',        // Leave empty if no specific port is required
            pathname: '/**', // Allows all paths under utfs.io
          },
        ],
    },
    experimental: {
      optimizePackageImports: ['@uiw/react-md-editor'],
    },
};

const withBundleAnalyzer = (await import("@next/bundle-analyzer")).default({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(nextConfig);
