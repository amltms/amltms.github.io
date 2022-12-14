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
	p {
		font-weight: 500;
		font-size: 1.5rem;
	}
	svg {
		font-size: 2.5rem;
		margin-right: 1rem;
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
