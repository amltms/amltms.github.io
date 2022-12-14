import { FC } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Bar = styled.div`
	position: fixed;
	padding: 3vw 4vw;
	width: 100%;
	display: flex;
	justify-content: space-between;
	font-size: 1.5rem;
	z-index: 90;
`;

const NavLeft = styled.div`
	a {
		margin-left: 1rem;
	}
`;

const Link = styled(NavLink)`
	font-family: 'Roboto', sans-serif;
	font-weight: 300;
`;

const Logo = styled.div``;

export const Nav: FC = () => {
	return (
		<Bar>
			<Logo>
				<Link to="/" className={(navData) => (navData.isActive ? 'active' : '')}>
					Amal Thomas - Developer
				</Link>
			</Logo>
			<NavLeft>
				<Link to="/about">about</Link>
			</NavLeft>
		</Bar>
	);
};
