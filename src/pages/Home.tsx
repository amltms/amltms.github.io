import { motion } from 'framer-motion';
import styled from 'styled-components';
import { projects } from '../api/projectApi';
import { SlideShow } from '../components/slideshow/Slideshow';

const Container = styled(motion.div)`
	height: 100vh;
`;

export const Home = () => {
	return (
		<Container>
			<SlideShow slidesArr={projects} />
		</Container>
	);
};
