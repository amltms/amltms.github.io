import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ProjectType } from '../types';
import { projects } from '../api/projectApi';
import { motion, useScroll, useTransform } from 'framer-motion';

const Container = styled(motion.div)``;

const Header = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	position: relative;
	overflow: hidden;
	h1 {
		text-transform: uppercase;
	}
`;

const Backdrop = styled(motion.img)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: -1;
	filter: brightness(0.5);
`;

const Content = styled(motion.div)`
	background-color: #fff;
	width: 100%;
	position: absolute;
	top: 80vh;
	left: 0;
`;

const DetailsContainer = styled.div`
	background-color: #242424;
	padding: 10rem 20vw;
	* {
		color: #fff;
	}
	hr {
		margin-top: 3rem;
		border: none;
		height: 1px;
		background: #4a4a4a;
	}
	a {
		margin-top: 1rem;
		font-size: 1.5rem;
		width: 15rem;
		font-weight: 500;
		letter-spacing: 1.5px;
		display: inline-block;
		text-transform: uppercase;
	}
`;

const Details = styled.div`
	display: grid;
	grid-template-columns: 15rem auto;
	align-items: start;
	margin-bottom: 1rem;
	row-gap: 2rem;
	h3 {
		font-size: 1rem;
		text-transform: uppercase;
		font-weight: 500;
	}
	p {
		font-size: 1.2rem;
		font-weight: 300;
	}
	div {
		p {
			margin-bottom: 0.5rem;
		}
	}
`;

const Imgs = styled.div`
	padding: 5rem 20vw;
	box-shadow: 0px -6px 15px -3px rgba(0, 0, 0, 0.8);
	img {
		margin: 5rem 0;
	}
`;

const Mobile = styled(motion.div)`
	display: flex;
	width: 100%;
	justify-content: space-between;
	img {
		width: auto;
		border-radius: 2rem;
		box-shadow: 9px 10px 8px -3px rgba(0, 0, 0, 0.4);
	}
`;

export const Project = () => {
	const { scrollYProgress } = useScroll();
	const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);

	const [project, setProject] = useState<ProjectType>();
	let { id } = useParams();

	useEffect(() => {
		if (id) {
			const n: number = parseInt(id);
			setProject(projects.filter((project) => project.id === n)[0]);
		}
	}, [id]);

	return (
		<Container>
			{project && (
				<>
					<Header>
						<Backdrop style={{ scale: scale }} src={`${process.env.PUBLIC_URL}/${project.backgroundImg}`} alt="Backdrop" />
						<h1>{project.title}</h1>
					</Header>
					<Content initial={{ opacity: 0, y: 400 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 400 }} transition={{ duration: 0.5 }}>
						<DetailsContainer>
							<motion.div initial={{ opacity: 0, y: 400 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 400 }} transition={{ duration: 0.5 }}>
								<Details>
									<h3>Year</h3>
									<p>{project.details.year}</p>
									<h3>Stack</h3>
									<div>
										{project.details.stack.map((i) => (
											<p>{i}</p>
										))}
									</div>
									<h3>Description</h3>
									<p>{project.details.description}</p>
								</Details>
								<hr />
								<a href={project.url} target="_blank" rel="noreferrer">
									Website
								</a>
								<a href={`https://github.com/amltms/${project.github}`} target="_blank" rel="noreferrer">
									Github
								</a>
							</motion.div>
						</DetailsContainer>

						<Imgs>
							{project.imgs.map((img, index) => (
								<motion.img initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} src={`${process.env.PUBLIC_URL}/${img}`} alt="Shutter" key={index} />
							))}
							<Mobile initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
								<img src={`${process.env.PUBLIC_URL}/shutter-home-m.png`} alt="Shutter" />
								<img src={`${process.env.PUBLIC_URL}/shutter-overview-m.png`} alt="Shutter" />
								<img src={`${process.env.PUBLIC_URL}/shutter-genre-m.png`} alt="Shutter" />
							</Mobile>
						</Imgs>
					</Content>
				</>
			)}
		</Container>
	);
};
