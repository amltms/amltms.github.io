import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ProjectType } from '../../types';

interface Props {
	slide: ProjectType;
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
const Title = styled(Link)`
	transition: 0.5s;
	text-transform: uppercase;
	cursor: pointer;
	font-size: 8vw;
	font-weight: bold;
	color: #ffffff;
	@media (max-width: 900px) {
		font-size: 2.2rem;
	}
`;

const SlideImg = styled(motion.img)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: -1;
	filter: brightness(0.5);
	transition: 0.5s;
	transform: scale(0.7);
`;
const Container = styled(motion.div)``;

export const Slide = ({ slide }: Props) => {
	return (
		<SlideContainer>
			<Container>
				<Title to={`project/${slide.id}`}>{slide.title}</Title>
				<SlideImg initial={{ scale: 1 }} animate={{ scale: 0.7 }} transition={{ duration: 0.1 }} src={`${process.env.PUBLIC_URL}/${slide.backgroundImg}`} />
			</Container>
		</SlideContainer>
	);
};
