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
};


export default nextConfig;
