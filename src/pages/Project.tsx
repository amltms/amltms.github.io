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
		fontsize: 8vw;
		text-transform: uppercase;
	}
	@media (max-width: 900px) {
		h1 {
			font-size: 2.2rem;
		}
	}
`;

const Backdrop = styled(motion.img)`
	transition: 0.01s;
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
	padding: 5vw 20vw;
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
		font-size: 1.2rem;
		font-weight: 400;
		letter-spacing: 2px;
		display: inline-block;
		text-transform: uppercase;
		margin-right: 1.5rem;
		:hover {
			color: #797979;
		}
	}

	@media (max-width: 1200px) {
		padding: 2rem;
		a {
			font-size: 1.2rem;
		}
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
		margin-top: 4px;
		color: #6a6a6a;
	}
	p {
		font-size: 1.2rem;
		font-weight: 300;
	}
	div > p {
		margin-bottom: 1rem;
	}

	@media (max-width: 1200px) {
		grid-template-columns: 1fr;
		row-gap: 1rem;
		div > p {
			margin-bottom: 0.2rem;
		}
	}
`;

const Imgs = styled.div`
	padding: 5rem 20vw;
	box-shadow: 0px -6px 15px -3px rgba(0, 0, 0, 0.8);
	> img {
		width: 100%;
		margin: 5rem 0;
	}
	@media (max-width: 1200px) {
		padding: 2rem;
		> img {
			margin: 1rem 0;
		}
	}
`;

const Mobile = styled(motion.div)`
	width: 100%;
	margin: 5rem 0;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 1rem;
	img {
		max-width: 100%;
		height: auto;
		border-radius: 2rem;
		box-shadow: 9px 10px 8px -3px rgba(0, 0, 0, 0.4);
	}

	@media (max-width: 1200px) {
		display: flex;
		flex-direction: column;
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
						<Backdrop style={{ scale: scale }} initial={{ scale: 0.7 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} src={`${process.env.PUBLIC_URL}/${project.backgroundImg}`} alt="Backdrop" />
						<h1>{project.title}</h1>
					</Header>
					<Content initial={{ opacity: 0, y: 400 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 400 }} transition={{ duration: 0.2 }}>
						<DetailsContainer>
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
						</DetailsContainer>

						<Imgs>
							{project.imgs.map((img, index) => (
								<motion.img initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} src={`${process.env.PUBLIC_URL}/${img}`} alt="Shutter" key={index} />
							))}
							{project.mobileImgs && (
								<Mobile initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
									{project.mobileImgs?.map((img, index) => (
										<img src={`${process.env.PUBLIC_URL}/${img}`} alt={project.title} key={index} />
									))}
								</Mobile>
							)}
						</Imgs>
					</Content>
				</>
			)}
		</Container>
	);
};
