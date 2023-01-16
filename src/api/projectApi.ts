export const projects = [
	{
		id: 1,
		title: 'Shutter',
		tagline: 'Shutter offers a user-friendly platform for searching and accessing information on films and TV shows',
		backgroundImg: 'shutter-bg.jpg',
		github: 'shutternext',
		details: {
			year: ['2022'],
			stack: ['TypeScript', 'NextJS', 'React', 'Styled-Components', 'Framer-Motion'],
			description: 'Shutter is a web application that allows users to view information on films and TV shows. It uses the The Movie Database API to fetch data. The application is built with React and Next.js and deployed on Vercel.',
		},
		url: 'https://shutteraml.vercel.app/',
		imgs: ['shutter-home.png', 'shutter-search.png', 'shutter-overview.png', 'shutter-genre.png'],
		mobileImgs: ['shutter-home-m.png', 'shutter-nav-m.png', 'shutter-genre-m.png'],
	},
	{
		id: 2,
		title: 'RefinedBuilds',
		tagline: 'Recommenedation System',
		description: "Recommends computer components based on the users' chosen software and budget.",
		backgroundImg: 'refinedbuilds-bg.jpg',
		github: 'refinedbuilds',
		details: {
			year: ['2021'],
			stack: ['React', 'Node', 'MongoDB'],
			description: "Recommends computer components based on the users' chosen software and budget.",
		},
		url: '',
		imgs: ['refinedbuilds-home.jpg', 'refinedbuilds-software.jpg', 'refinedbuilds-budget.jpg', 'refinedbuilds-suggestions-2.jpg', 'refinedbuilds-suggestions-hover.jpg'],
	},
];
