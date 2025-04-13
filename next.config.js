/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true, // This ensures images work properly in static export
  },
};

module.exports = nextConfig; 