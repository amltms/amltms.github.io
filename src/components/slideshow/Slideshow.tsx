import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { Slide } from './Slide';
import { ProjectType } from '../../types';

interface Props {
	slidesArr: ProjectType[];
}

interface SliderProps {
	currentSlide: number;
	scale: number;
}

const Container = styled.div`
	height: auto;
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
		fill: #dddddd;
		transition: 0.5s;
		:hover {
			fill: #414141;
		}
	}
	&:hover {
		opacity: 1;
	}
`;

const Slider = styled.div<SliderProps>`
	scrollbar-width: none;
	width: 100%;
	display: flex;
	transition: 1s;
	transform: scale(${(props) => props.scale}) translateX(${(props) => -props.currentSlide * 100}%);
`;

export const SlideShow = ({ slidesArr }: Props) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [scale, setScale] = useState(1);

	useEffect(() => {
		if (currentSlide > slidesArr.length - 1) {
			setCurrentSlide(0);
		} else if (currentSlide < 0) {
			setCurrentSlide(slidesArr.length - 1);
		}
	}, [currentSlide, slidesArr.length]);

	const changeScale = () => {
		setScale(0.8);
		setTimeout(function () {
			setScale(1);
		}, 1000);
	};

	return (
		<Container>
			<NavBtn
				style={{ right: 0 }}
				onClick={() => {
					setCurrentSlide(currentSlide + 1);
					changeScale();
				}}
			>
				<MdNavigateNext />
			</NavBtn>

			<NavBtn
				onClick={() => {
					setCurrentSlide(currentSlide - 1);
					changeScale();
				}}
			>
				<MdNavigateBefore />
			</NavBtn>
			<Slider currentSlide={currentSlide} scale={scale}>
				{slidesArr.map((i) => (
					<Slide slide={i} scale={scale} />
				))}
			</Slider>
		</Container>
	);
};
