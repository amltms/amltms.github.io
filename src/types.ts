export type ProjectType = {
	id: number;
	title: string;
	tagline: string;
	color: string;
	github: string;
	url: string;
	backgroundImg: string;
	imgs: string[];
	mobileImgs?: string[];
	details: {
		year: number;
		stack: string[];
		description: string;
	};
};
