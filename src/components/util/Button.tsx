import styled from 'styled-components';

type Props = {
	url: string;
	title: string;
	svg: any;
};

const Container = styled.a`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	margin: 1rem;
	padding: 1rem;
	transition: 0.3s;
	p {
		font-weight: 300;
		font-size: 1.2rem;
	}
	svg {
		fill: white;
		font-size: 2rem;
		margin-right: 1rem;
	}
	:hover {
		p {
			color: #1abc9c;
		}
		svg {
			fill: #1abc9c;
		}
	}
`;
export const Button = ({ url, title, svg }: Props) => {
	return (
		<Container href={url} target="_blank" rel="noreferrer">
			{svg}
			<p>{title}</p>
		</Container>
	);
};
