/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions:true
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
