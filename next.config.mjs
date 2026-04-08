/** @type {import("next").NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
				port: "",
				pathname: "**",
			},
		],
	},
	async redirects() {
		return [
			{
				source: "/:path*",
				has: [
					{
						type: "host",
						value: "norm-atlas.no",
					},
				],
				destination: "https://pathogens.no/dashboards/norm-atlas",
				permanent: true,
			},
		];
	},
	experimental: {
		reactCompiler: true,
	},
};

export default nextConfig;
