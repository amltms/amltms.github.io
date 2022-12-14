import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import styled from 'styled-components';
import { Button } from '../components/utility/Button';
import { palette } from '../styles/palette';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 0 10vw;
	height: 100vh;
	overflow: hidden;
`;

const Text = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	h2 {
		font-size: 5rem;
		text-transform: capitalize;
		font-weight: 900;
		font-family: 'Roboto', sans-serif;
	}
	> p {
		font-weight: 500;
		font-size: 1.7rem;
		color: ${palette.secondaryTextColor};
	}
	@media only screen and (max-width: 1800px) {
		width: 80%;
	}

	@media only screen and (max-width: 900px) {
		width: 100%;
	}
`;

const Contacts = styled.div`
	display: flex;
`;

export const About = () => {
	return (
		<Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
			<Text>
				<h2>ABOUT ME</h2>
				<p>A software engineering graduate with a year experience in the industry. Experienced in full-stack development, usually working with React and TypeScript.</p>
				<Contacts>
					<Button url={`https://github.com/amltms/`} title={'Github'} svg={<BsGithub />} />
					<Button url={`https://www.linkedin.com/in/amltms/`} title={'LinkedIn'} svg={<BsLinkedin />} />
					<Button url={`https://www.instagram.com/amltms/`} title={'Instagram'} svg={<BsInstagram />} />
				</Contacts>
			</Text>
		</Container>
	);
};
