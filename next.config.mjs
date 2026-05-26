/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/products/trainer",
        destination: "/products",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
