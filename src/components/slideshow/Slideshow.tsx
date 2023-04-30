import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { Slide } from './Slide';
import { ProjectType } from '../../types';
import { useContext } from 'react';
import { MyGlobalContext } from '../../App';

interface Props {
	slidesArr: ProjectType[];
}

interface SliderProps {
	currentSlide: number;
	scale: number;
}

const Container = styled.div`
	height: 100%;
	position: relative;
	overflow: hidden;
`;

const NavBtn = styled.button`
	position: absolute;
	z-index: 80;
	font-size: 5rem;
	padding: 1rem;
	height: 100%;
	svg {
		fill: #414141;
		transition: 0.5s;
		:hover {
			fill: #dddddd;
		}
	}
	&:hover {
		opacity: 1;
	}
	@media (max-width: 900px) {
		font-size: 4rem;
		padding: 0rem;
	}
`;

const Slider = styled.div<SliderProps>`
	scrollbar-width: none;
	width: 100%;
	display: flex;
	transition: 1s;
	transform: translateX(${(props) => -props.currentSlide * 100}%);
	transition-delay: 0.6s;
`;

const SliderContainer = styled.div<SliderProps>`
	scale: ${(props) => props.scale};
	transition: 0.6s;
`;

export const SlideShow = ({ slidesArr }: Props) => {
	const [scale, setScale] = useState(1);
	const useGlobalContext = () => useContext(MyGlobalContext);
	const { currentSlide, setCurrentSlide } = useGlobalContext();

	useEffect(() => {
		if (currentSlide > slidesArr.length - 1) {
			setCurrentSlide(0);
		} else if (currentSlide < 0) {
			setCurrentSlide(slidesArr.length - 1);
		}
	}, [currentSlide, setCurrentSlide, slidesArr.length]);

	const handleClick = (slide: number) => {
		setCurrentSlide(slide);
		setScale(0.5);
		setTimeout(function () {
			setScale(1);
		}, 1500);
	};

	return (
		<Container>
			<NavBtn style={{ right: 0 }} onClick={() => handleClick(currentSlide + 1)}>
				<MdNavigateNext />
			</NavBtn>

			<NavBtn onClick={() => handleClick(currentSlide - 1)}>
				<MdNavigateBefore />
			</NavBtn>
			<SliderContainer currentSlide={currentSlide} scale={scale}>
				<Slider currentSlide={currentSlide} scale={scale}>
					{slidesArr.map((i) => (
						<Slide slide={i} />
					))}
				</Slider>
			</SliderContainer>
		</Container>
	);
};
