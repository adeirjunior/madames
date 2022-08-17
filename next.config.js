/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");
const runtimeCaching = require('next-pwa/cache')

const nextConfig = {
  reactStrictMode: true,
  images: {
	  domains: ['cdn.sanity.io']
	},
  experimental: { images: { layoutRaw: true } },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    disable: process.env.NODE_ENV === 'development'
  }
}
  
module.exports = withPWA(nextConfig);
