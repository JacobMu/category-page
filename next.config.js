/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		typedRoutes: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "gymbeam.sk",
				pathname: "/media/catalog/**",
			},
		],
	},
	reactStrictMode: true,
	crossOrigin: "anonymous",
	swcMinify: true,
	rewrites: async () => {
		return [
			{
				source: "/:path*",
				destination: "/",
			},
		];
	},
};

module.exports = nextConfig;
