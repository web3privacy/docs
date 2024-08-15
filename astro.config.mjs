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
						{ label: 'Manifesto', link: '/about-us/manifesto' },
						{ label: 'Roadmap', link: '/about-us/roadmap' },
						{ label: 'History', link: '/about-us/history' },
						{ label: 'Brand', link: '/about-us/brand' },
						{ label: 'Contact us', link: '/about-us/contact-us' },
						{ label: 'Follow us', link: '/about-us/follow-us' },
					],
				},
				{
					label: 'Research',
					collapsed: true,
					autogenerate: { directory: 'research' },
				},
				{
					label: 'Events',
					collapsed: true,
					autogenerate: { directory: 'events' },
				},
				{
					label: 'Projects',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Privacy Explorer 👁️', link: '/projects/privacy-explorer' },
						{ label: 'Week in the Privacy 📰', link: '/news/week-in-the-privacy' },
						{ label: 'Privacy Tech Awards 🏆', link: '/projects/privacy-tech-awards' },
						{ label: 'Privacy Academy 👩‍🏫', link: '/projects/privacy-academy' },
						{ label: 'Hackathon Use Cases Generator ✨', link: '/projects/hackathon-use-cases-generator' },
						{ label: 'Women in Privacy 💃', link: '/projects/women-in-privacy' },
						{ label: 'Privacy Cases 🗄️', link: '/projects/privacy-cases' },
					],
				},
				{
					label: 'Get Involved',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', link: '/get-involved/index' },
						{ label: 'Ecosystem', link: '/get-involved/partnership' },
						{ label: 'Code of Conduct', link: '/get-involved/code-of-conduct' },
						{ label: 'Membership x Organisations', link: '/get-involved/org-benefits' },
						{ label: 'Membership x Individuals', link: '/get-involved/personal-benefits' },
						{ label: 'Donate', link: '/get-involved/donate' },
					],
				},
				{
					label: 'For contributors',
					items: [
						{ label: 'Contributors guide', link: '/contributors/index' },			
						{ label: 'Workgroups', link: '/contributors/workgroups' },
						{ label: 'Git repositories', link: '/contributors/git' },
						{ label: 'Guide: how to deploy event website', link: '/contributors/deploy-event-website' },
						{ label: 'Code of conduct', link: '/get-involved/code-of-conduct' },
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
						{ label: 'Structure', link: '/governance/governance' },
						{ label: 'Core Team', link: '/governance/core-team' },
						{ label: 'Core Contributors', link: '/governance/core-contributors' },
						{ label: 'Communication tools', link: '/governance/communication' },
						{ label: 'Treasury', link: '/governance/treasury' },
					]
				},
				{
					label: 'News',
					collapsed: true,
					autogenerate: { directory: 'news' },
				},
			],
		}),
	],
});
