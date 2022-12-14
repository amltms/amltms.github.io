import { useEffect, useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaFirefoxBrowser } from 'react-icons/fa';
import { BiX } from 'react-icons/bi';
import { projects } from '../api/projectApi';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { ProjectType } from '../types';
import { palette } from '../styles/palette';
import { Content } from '../components/shutter/Content';
import { Button } from '../components/utility/Button';
import { motion } from 'framer-motion';

type OverlayProps = {
	currentImg: null | number;
};
const Container = styled(motion.div)`
	padding: 0 4vw;
`;

const Main = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Buttons = styled.div`
	display: flex;
	a {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		margin: 1rem;
		padding: 1rem;
		p {
			font-weight: 500;
			font-size: 1.5rem;
		}
		svg {
			font-size: 2.5rem;
			margin-right: 1rem;
		}
	}
`;

const Details = styled.div`
	display: flex;
	justify-content: space-around;
	margin-bottom: 10rem;
	border-radius: 2rem;
	background: #f3f3f3;
	padding: 5rem;
	h3 {
		margin-bottom: 1.5rem;
		font-weight: bold;
		font-size: 5rem;
		font-family: Helvetica, sans-serif;
		color: #222222;
		text-transform: capitalize;
	}
	p {
		font-family: 'Roboto', sans-serif;
		font-size: 1.2rem;
		font-weight: 500;
	}
	@media only screen and (max-width: 1800px) {
		justify-content: space-between;
	}
`;

const Overview = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 4rem;
	button {
		transition: 0.5s;
		transform-origin: left;
	}
	img {
		width: 100%;
		transition: 0.5s;
	}
	@media only screen and (max-width: 1800px) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 2rem;
	}
	@media only screen and (max-width: 1000px) {
		grid-gap: 1rem;
		grid-template-columns: 1fr;
	}
`;

const ImgContainer = styled.button`
	img {
		width: 100%;
		transition: 0.3s;
		border-radius: 1rem;
		:hover {
			box-shadow: 5px 8px 9px -1px rgba(0, 0, 0, 0.4);
		}
	}
`;

const ImgOverlay = styled.div<OverlayProps>`
	svg {
		position: absolute;
		fill: white;
		color: white;
		font-size: 4rem;
		margin: 2rem;
		right: 0;
		z-index: 100;
		${({ currentImg }) => currentImg === null && 'display: none;'}
	}
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	transition: 0.3s;
	background-color: rgba(0, 0, 0, 1);
	z-index: 100;
	img {
		user-select: none;
		position: absolute;
		top: 50%;
		right: 50%;
		transform: translate(50%, -50%);
		width: 90%;
	}
	${({ currentImg }) => currentImg === null && 'height: 0;'}
`;

const SlideImg = styled(motion.img)`
	width: 100%;
	transition: 0.5s;
	z-index: -1;
	position: absolute;

	box-shadow: 10px 10px 20px 1px rgba(0, 0, 0, 0.5);
	width: 50vw;
	transform: scale(1.05);
`;

const MainText = styled(motion.div)`
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	h1 {
		color: white;
		font-size: 10rem;
	}
	p {
		color: ${palette.primaryTextColor} !important;
		font-size: 2.5rem;
	}
	svg {
		fill: white !important;
	}
`;

export const Project = () => {
	const [project, setProject] = useState<ProjectType>();
	const [currentImg, setCurrentImg] = useState<number | null>(null);
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
					<Main>
						<SlideImg
							animate={{
								filter: ' brightness(0.2)',
								y: 0,
								width: '70%',
							}}
							transition={{ duration: 0.1 }}
							src={`${process.env.PUBLIC_URL}/${project.backgroundImg}`}
						/>
						<MainText initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
							<h1>{project.title}</h1>
							<p>{project.tagline}</p>
							<Buttons>
								<Button url={`https://github.com/amltms/${project.github}`} title={'Github'} svg={<BsGithub />} />
								<Button url={project.url} title={'Website'} svg={<FaFirefoxBrowser />} />
							</Buttons>
						</MainText>
					</Main>
					<Details>
						{Object.keys(project.details).map((key: any, i: number) => (
							<div>
								<h3>{key}</h3>
								{project.details[key as keyof typeof project.details].map((i: string) => (
									<p>{i}</p>
								))}
							</div>
						))}
					</Details>
					<Overview>
						<ImgOverlay currentImg={currentImg}>
							<BiX onClick={() => setCurrentImg(null)} />
							{currentImg !== null && <img src={`${process.env.PUBLIC_URL}/${project.imgs[currentImg]}`} alt={project.imgs[currentImg]} />}
						</ImgOverlay>
						{project.imgs.map((img, i) => (
							<ImgContainer key={i} onClick={() => setCurrentImg(i)}>
								<img src={`${process.env.PUBLIC_URL}/${img}`} alt={img} />
							</ImgContainer>
						))}
					</Overview>
					{project.title === 'Shutter' && <Content />}
				</>
			)}
		</Container>
	);
};
