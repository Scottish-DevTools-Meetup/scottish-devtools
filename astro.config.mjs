// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	output: 'static',
  	base: '/scottish-devtools/',
	integrations: [
		starlight({
			title: 'DevTools Scotland',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Scottish-DevTools-Meetup/scottish-devtools' }],
			logo: {
				src: './src/assets/ScottishDevToolLogo.png',
				replacesTitle: true,

			},
			components: {
				
			},
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'What is DevTools Scotland?', slug: 'intro/what-is-devtools' },
						{ label: 'Our Vision', slug: 'intro/our-vision' },
						{ label: 'Market Overview', slug: 'intro/market-overview' },
					],
				},
				{
					label: 'Workshop Materials',
					items: [
						{ label: 'Fuzzy Books', slug: 'workshops/fuzzy-books' },
					],
				},
				{
					label: 'Team',
					items: [
						{ label: 'Alan Mathieson', slug: 'team/alan-mathieson' },
						{ label: 'Cameron Blackwood', slug: 'team/cameron-blackwood' },
					],
				},
			],
		}),
	],
});
