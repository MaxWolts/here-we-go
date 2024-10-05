/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        port: '',
        pathname: '/**'
      }
    ]
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
