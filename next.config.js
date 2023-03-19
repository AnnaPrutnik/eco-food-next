/** @type {import('next').NextConfig} */
const { withSuperjson } = require('next-superjson');

const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.shopify.com/**',
			},
		],
	},
};

module.exports = withSuperjson()(nextConfig);
