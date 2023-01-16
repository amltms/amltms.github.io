export type ProjectType = {
	id: number;
	title: string;
	tagline: string;
	github: string;
	url: string;
	backgroundImg: string;
	imgs: string[];
	mobileImgs?: string[];
	details: {
		year: string[];
		stack: string[];
		description: string;
	};
};
