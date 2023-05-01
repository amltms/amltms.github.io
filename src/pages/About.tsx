import styled from 'styled-components';
import { Button } from '../components/util/Button';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
	display: flex;
	justify-content: center;
	padding: 0 15vw;
	align-items: center;
	position: relative;
	overflow: hidden;
	height: 100vh;
	p {
		color: white;
	}
	@media screen and (max-width: 900px) {
		padding: 0 5vw;
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
			font-size: 1.5rem;
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
				<p>I'm a software engineering graduate with a passion for web development. Over the past year, I've had the chance to work on a variety of interesting projects in the industry. But my love for web development doesn't stop at work - I'm always tinkering with something new in my free time.</p>
			</Text>
			<Contacts>
				<Button url={`https://github.com/amltms/`} title={'Github'} svg={<BsGithub />} />
				<Button url={`https://www.linkedin.com/in/amltms/`} title={'LinkedIn'} svg={<BsLinkedin />} />
				<Button url={`mailto:amalthomas587@gmail.com`} title={'Email'} svg={<MdOutlineAlternateEmail />} />
			</Contacts>
		</Container>
	);
};
