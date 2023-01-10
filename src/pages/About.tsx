import styled from 'styled-components';
import { Button } from '../components/util/Button';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
	display: flex;
	justify-content: center;
	padding: 10% 15vw;
	height: 100vh;
	p {
		color: white;
	}
`;

const Text = styled.div`
	h1 {
		color: white;
		font-weight: bold;
		font-size: 8vw;
	}
	p {
		font-size: 4rem;
		font-weight: 300;
	}
`;

const Contacts = styled.div`
	display: flex;
	position: absolute;
	bottom: 0;
`;

export const About = () => {
	return (
		<Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			<Text>
				<h1>Hi,</h1>
				<p>I'm a software engineering graduate with more than a year of experience in the industry. Experienced in full-stack development, usually working with React and TypeScript.</p>
			</Text>
			<Contacts>
				<Button url={`https://github.com/amltms/`} title={'Github'} svg={<BsGithub />} />
				<Button url={`https://www.linkedin.com/in/amltms/`} title={'LinkedIn'} svg={<BsLinkedin />} />
				<Button url={`https://www.instagram.com/amltms/`} title={'Instagram'} svg={<BsInstagram />} />
			</Contacts>
		</Container>
	);
};
