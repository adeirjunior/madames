/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: true,
  images: {
	  domains: ['cdn.sanity.io']
	},
  experimental: { images: { layoutRaw: true } },
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === 'development'
  }
}
  
module.exports = withPWA(nextConfig);
