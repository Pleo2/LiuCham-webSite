
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
			},
			{
				protocol: 'https',
				hostname: 'www.artic.edu',
				pathname: '/iiif/2/**',
			},
			{
				protocol: 'https',
				hostname: 'shop-images.imgix.net',
			},
		],
	},
}

module.exports = nextConfig
