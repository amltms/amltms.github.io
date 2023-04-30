import styled from 'styled-components';
import { Button } from '../components/util/Button';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
	display: flex;
	justify-content: center;
	padding: 10% 15vw;
	position: relative;
	overflow-x: hidden;
	height: 100vh;
	p {
		color: white;
	}
	@media screen and (max-width: 900px) {
		padding: 0 5vw;
		align-items: center;
	}
`;

const Text = styled.div`
	h1 {
		font-weight: bold;
		font-size: 8vw;
	}
	p {
		font-size: 3rem;
		font-weight: 300;
	}
	@media screen and (max-width: 900px) {
		h1 {
			font-size: 4rem;
		}
		p {
			font-size: 2rem;
		}
	}
`;

const Contacts = styled.div`
	display: flex;
	position: absolute;
	bottom: 0;
	@media screen and (max-width: 900px) {
		p {
			display: none;
		}
	}
`;

export const About = () => {
	return (
		<Container initial={{ opacity: 0, x: 400 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 400 }} transition={{ duration: 0.3 }}>
			<Text>
				<h1>Hi,</h1>
				<p>I'm a software engineering graduate with more than a year of experience in the industry. Experienced in full-stack development, usually working with React and TypeScript.</p>
			</Text>
			<Contacts>
				<Button url={`https://github.com/amltms/`} title={'Github'} svg={<BsGithub />} />
				<Button url={`https://www.linkedin.com/in/amltms/`} title={'LinkedIn'} svg={<BsLinkedin />} />
				<Button url={`mailto:amalthomas587@gmail.com`} title={'Email'} svg={<MdOutlineAlternateEmail />} />
			</Contacts>
		</Container>
	);
};
