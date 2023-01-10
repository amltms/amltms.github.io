import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
interface Scroll {
	scrolled: boolean;
}
const NavBar = styled.div<Scroll>`
	z-index: 100;
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	position: fixed;
	width: 100%;
	font-size: calc(10px + 2vmin);
	padding: 4vw;
	a {
		${({ scrolled }) => scrolled && 'color:black;'};
	}
`;

const NavLink = styled(Link)`
	font-weight: 400;
	color: white;
	font-size: 1.2rem;
	font-family: 'Roboto', sans-serif;
	:hover {
		letter-spacing: 5px;
	}
`;

export const Nav = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const show = window.scrollY > (120 * window.innerHeight) / 100;
			show ? setScrolled(true) : setScrolled(false);
		};

		document.addEventListener('scroll', handleScroll);
		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<NavBar scrolled={scrolled}>
			<NavLink to="/">AMAL THOMAS</NavLink>
			<NavLink to="/about">About</NavLink>
		</NavBar>
	);
};
