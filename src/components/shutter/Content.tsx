import styled from 'styled-components';
import { palette } from '../../styles/palette';
import { Search } from './Search';
import Spinner from './Spinner';

const Info = styled.div`
	margin: 20% 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;

	p {
		font-weight: 500;
		font-size: 1.5rem;
	}
`;

const Button = styled.a`
	font-size: 1.5rem;
	background: ${palette.primary};
	padding: 1rem 2rem;
	border-radius: 2rem;
	margin: 1rem;
	display: inline-block;
`;

const Text = styled.div`
	margin-top: 2rem;
	width: 50%;
	h2 {
		font-size: 5rem;
		text-transform: capitalize;
		font-family: 'Roboto', sans-serif;
	}
	p {
		color: ${palette.secondaryTextColor};
	}
	@media only screen and (max-width: 1800px) {
		width: 80%;
	}

	@media only screen and (max-width: 900px) {
		width: 100%;
	}
`;
export const Content = () => {
	return (
		<>
			<Info>
				<Text>
					<h2>Update</h2>
					<p>Currently updating the MERN stack to use Nextjs.</p>
					<p>Previous MERN build can be found on:</p>
					<Button href="https://github.com/amltms/shutter">Github</Button>
				</Text>
			</Info>
			<Info>
				<Search />
				<Text>
					<h2>Debouncing</h2>
					<p>Reduces the number of API requests being made when searching by only making a request once the user has stopped typing. This resulted in less UI flickering of search results.</p>
				</Text>
			</Info>
			<Info>
				<Spinner />
				<Text>
					<h2>Redux Toolkit</h2>
					<p>State management and other features to help handle loading states and user data.</p>
				</Text>
			</Info>
			<Info>
				<Text>
					<h2>Authentication</h2>
					<p>A backend built to handle authentication and user data. Users can now login and save items to their account.</p>
				</Text>
			</Info>
		</>
	);
};
