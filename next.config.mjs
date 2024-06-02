/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8000/api/path*",
      },

      {
        source: "/next-bandf-connect/api/:path*",
        destination: "http://localhost:8000/",
      },
    ];
  },
};

export default nextConfig;
