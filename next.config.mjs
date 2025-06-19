/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
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
	experimental: {
		reactCompiler: true,
		ppr: "incremental",
	},
};

export default nextConfig;
