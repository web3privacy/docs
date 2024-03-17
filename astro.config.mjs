import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.web3privacy.info',
	integrations: [
		starlight({
			title: 'Web3Privacy Now Docs',
			social: {
				github: 'https://github.com/web3privacy',
				twitter: 'https://twitter.com/web3privacy',
			},
			logo: {
				src: './public/logo.svg',
				replacesTitle: true
			},
			editLink: {
				baseUrl: 'https://github.com/web3privacy/docs/tree/main/',
			},
			lastUpdated: true,
			favicon: '/favicon.ico',
			customCss: [
				'./src/styles/custom.css'
			],
			sidebar: [
				{ label: 'Introduction', link: '/' },
				{
					label: 'About us',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Manifesto', link: '/manifesto' },
						{ label: 'Roadmap', link: '/roadmap' },
						{ label: 'History', link: '/history' },
						{ label: 'Brand', link: '/brand' },
						{ label: 'Contact us', link: '/contacts' },
					],
				},
				{
					label: 'Projects',
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: '🔬 Research',
							collapsed: true,
							autogenerate: { directory: 'research' },
						},
						{
							label: '📅 Events',
							collapsed: true,
							autogenerate: { directory: 'events' },
						},
						{ label: '👁️ Privacy Explorer', link: '/projects/privacy-explorer' },
						{ label: '📰 Week in the Privacy', link: '/news/week-in-the-privacy' },
						{ label: '🏆 Privacy Tech Awards', link: '/projects/privacy-tech-awards' },
					],
				},
				/*{
					label: 'Future concepts',
					items: [
						{ label: 'Privacy Tech Awards', link: '/projects/privacy-tech-awards' }
					]
				},*/
				{
					label: 'Community',
					items: [
						{ label: 'Follow us', link: '/follow-us' },
						{ label: 'Get involved', link: '/get-involved' },
						{ label: 'Contributors guide', link: '/contributors' },
						{
							label: 'Membership',
							link: '/membership',
							items: [
								{ label: 'Personal benefits', link: '/membership/personal-benefits' }
							]
						},
						{ label: 'Donate', link: '/donate' },
						{ label: 'Code of conduct', link: '/code-of-conduct' },
					]
				},
				{
					label: 'Tools',
					items: [
						{ label: 'Git repositories', link: '/git' },
						{ label: 'Communication tools', link: '/communication' },
						{ label: 'Workgroups', link: '/workgroups' }
					]
				},
				{
					label: 'Governance',
					items: [
						{ label: 'Governance overview', link: '/governance' },
						{ label: 'Congress', link: '/congress' },
						{ label: 'Core Team', link: '/core-team' },
						{ label: 'Association', link: '/association' },
						{ label: 'Contributors Guild', link: '/guild' },
					]
				}
			],
		}),
	],
});
