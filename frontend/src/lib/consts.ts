export const navItems: Array<NavItem> = [
	{
		text: 'Portfolio',
		url: '/'
	},
	{
		text: 'About',
		url: '/about'
	},
	{
		text: 'Blog',
		url: '/blog'
	}
];

export type NavItem = {
	text: string,
	url: string
}

export const talks = [
	[
		{
			title: 'Mpls Jr Devs: Animation with Framer Motion',
			date: 'March 10, 2020',
			url: 'https://www.figma.com/file/2LMuWuJhVHVUxNb3b5Kbz5/Slide-Guides?node-id=0%3A1'
		},
		{
			title: 'Javascript MN: Using Intersection Observer with React Hooks',
			date: 'October 23, 2019',
			url: '/files/lightningtalk.key'
		}
	]
];
