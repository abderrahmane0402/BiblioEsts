/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // serverActions:true
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/signIn",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
