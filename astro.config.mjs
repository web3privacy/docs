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
				src: './public/logo.png',
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
					label: '🔬 Research',
					collapsed: true,
					autogenerate: { directory: 'research' },
				},
				{
					label: '📅 Events',
					collapsed: true,
					autogenerate: { directory: 'events' },
				},
				{
					label: 'Other projects',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '👁️ Privacy Explorer', link: '/projects/privacy-explorer' },
						{ label: '📰 Week in the Privacy', link: '/news/week-in-the-privacy' },
						{ label: '🏆 Privacy Tech Awards', link: '/projects/privacy-tech-awards' },
					],
				},
				{
					label: 'Community',
					items: [
						{ label: 'Follow us', link: '/follow-us' },
						{ label: 'Get involved', link: '/get-involved' },
						{ label: 'Donate', link: '/donate' },
						{
							label: 'Membership',
							link: '/membership',
							items: [
								{ label: 'Personal benefits', link: '/membership/personal-benefits' }
							]
						},
						{ label: 'Communication tools', link: '/communication' },
						{ label: 'Code of conduct', link: '/code-of-conduct' },
					]
				},
				{
					label: 'For contributors',
					items: [
						{ label: 'Contributors guide', link: '/contributors' },			
						{ label: 'Workgroups', link: '/workgroups' },
						{ label: 'Git repositories', link: '/git' },
					]
				},
				{
					label: 'Shared resources',
					collapsed: true,
					badge: { text: 'wip' },
					items: [
						{ label: 'Developers', link: '/resources/developers' },
						{ label: 'Community outreach', link: '/resources/outreach' },
						{ label: 'Funding', link: '/resources/funding' },
						{ label: 'Design', link: '/resources/design' },
						{ label: 'IT Infrastructure', link: '/resources/it-infrastructure' },
						{ label: 'Partners', link: '/resources/partners' },
						{ label: 'Training and Education', link: '/resources/training-education' },
						{ label: 'Legal assistance', link: '/resources/legal-assistance' },
					]
				},
				{
					label: 'Governance',
					items: [
						{ label: 'Governance structure', link: '/governance' },
						{ label: 'Congress', link: '/congress' },
						{ label: 'Core Team', link: '/core-team' },
						{ label: 'Association', link: '/association' },
						{ label: 'Treasury', link: '/treasury' },
						{ label: 'Contributors Guild', link: '/guild' },
					]
				}
			],
		}),
	],
});
