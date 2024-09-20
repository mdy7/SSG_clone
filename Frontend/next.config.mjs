/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['simg.ssgcdn.com', 'sitem.ssgcdn.com', 'sui.ssgcdn.com', 'img.icons8.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.ssgcdn.com',
      }
    ]
  },

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/:path*`,
      },
    ]
  },
  
  env: {
    API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    AWS_S3_REGION: process.env.NEXT_PUBLIC_AWS_S3_REGION,
    AWS_ACCESS_KEY_ID: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    AWS_S3_BUCKET_NAME: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME
  }
};

export default nextConfig;
