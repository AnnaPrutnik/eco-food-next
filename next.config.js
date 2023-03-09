/** @type {import('next').NextConfig} */
const { withSuperjson } = require('next-superjson');

const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
};

module.exports = withSuperjson()(nextConfig);

// module.exports = nextConfig
