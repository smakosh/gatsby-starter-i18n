const config = require('./data/config');

module.exports = {
	siteMetadata: {
		site_url: config.url
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		'gatsby-plugin-netlify',
		'gatsby-plugin-catch-links',
		{
			resolve: 'gatsby-plugin-google-fonts',
			options: {
				fonts: ['Cairo', 'Roboto']
			}
		},
		{
			resolve: 'gatsby-plugin-canonical-urls',
			options: {
				siteUrl: config.url
			}
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: config.googleAnalyticsID,
				head: true
			}
		},
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				color: config.themeColor,
				showSpinner: false
			}
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Gatsby',
				short_name: 'Gatsby',
				start_url: '/',
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: 'minimal-ui',
				icons: [
					{
						src: '/favicon/logo-192x192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: '/favicon/logo-512x512.png',
						sizes: '512x512',
						type: 'image/png'
					}
				]
			}
		}
		// 'gatsby-plugin-offline'
	]
};
