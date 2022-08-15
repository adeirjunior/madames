/** @type {import('next').NextConfig} */

const withOffline = require("next-offline");

const nextConfig = {
  reactStrictMode: true,
  images: {
	  domains: ['cdn.sanity.io']
	},
  experimental: { images: { layoutRaw: true } }
}

module.exports = withOffline(nextConfig);
