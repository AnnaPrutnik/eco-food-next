/** @type {import('next').NextConfig} */

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
			{
				protocol: 'https',
				hostname: 'www.pexels.com//**',
			},
		],
	},
};

module.exports = nextConfig;
