/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tells Next.js to produce a static site in an "out" folder
  output: 'export',

  // This is required for Next.js Image component to work with static exports
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
