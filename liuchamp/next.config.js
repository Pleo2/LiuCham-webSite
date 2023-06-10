
/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'artic-web.imgix.net',
			},
			{
				protocol: 'http',
				hostname: 'aic-mobile-tours.artic.edu',
				pathname: '/sites/default/files/tour-images/**',
			}
		],
	},
}

module.exports = nextConfig
