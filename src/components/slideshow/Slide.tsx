import { FC } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ProjectType } from '../../types';

interface Props {
	slide: ProjectType;
	scale: number;
}

interface SlideProps {
	scale: number;
}

const SlideContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 100%;
	height: 100vh;
	position: relative;
	cursor: pointer;
`;

const SlideImg = styled.img<SlideProps>`
	width: 50vw;
	transition: 0.5s;
	:hover {
		${({ scale }) => scale === 1 && 'transform: scale(1.05);'};
		box-shadow: 10px 10px 20px 1px rgba(0, 0, 0, 0.5);
	}
`;

export const Slide: FC<Props> = ({ slide, scale }) => {
	let navigate = useNavigate();

	return (
		<SlideContainer onClick={() => navigate(`/projects/${slide.id}`)}>
			<SlideImg scale={scale} src={`${process.env.PUBLIC_URL}/${slide.backgroundImg}`} />
		</SlideContainer>
	);
};
