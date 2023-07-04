/** @type {import('next').NextConfig} */
const nextConfig = {
 reactStrictMode: true,
 compiler: {
  styledComponents: true,
  relay: {
   src: './',
   language: 'typescript',
  },
 },
}

module.exports = nextConfig
