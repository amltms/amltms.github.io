import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 15rem 15vw;
	overflow: hidden;
`;

const Backdrop = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: -1;
	filter: brightness(0.5);
`;

const Content = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	:hover ${Backdrop} {
		display: none;
	}
`;

const Title = styled(Link)`
	transition: 0.5s;
	text-transform: uppercase;
	cursor: pointer;
`;

export const Home = () => {
	return (
		<Container>
			<Backdrop src="./Shutter-bg.jpg" alt="Shutter" />
			<Content>
				<Title to="/project/1">
					<h1>SHUTTER</h1>
				</Title>
			</Content>
		</Container>
	);
};
