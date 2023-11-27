/** @type {import('next').NextConfig} */

const nextConfig = {
    async headers() {
      return [
        {
          // All api routes allowed
          source: "/api/(.*)",
          
          headers: [
            {
              key: "Access-Control-Allow-Origin",
              value: "*",
            },
            {
              key: "Access-Control-Allow-Methods",
              value: "GET, PUT, POST, PATCH, DELETE, OPTIONS",
            },
            {
              key: "Access-Control-Allow-Headers",
              value: "Content-Type, Authorization",
            },
          ],
        }
      ];
    },
};

module.exports = nextConfig
