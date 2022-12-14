import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { palette } from '../../styles/palette';

const SearchInput = styled.input`
	background: none;
	font-size: 1.2rem;
	border: none;
	transition: 0.4s;
	width: 20rem;
	transform-origin: left;
	margin-left: 0.5rem;
	::placeholder {
		color: ${palette.secondaryTextColor};
		opacity: 1;
	}
`;

const SearchBox = styled.div`
	transition: 1s;
	border: 2.5px solid;
	padding: 1rem;
	padding-right: 0;
	border-color: #cfcece;
	border-radius: 2rem;
	display: flex;
	svg {
		transition: 0.5s;
		fill: #cfcece;
	}
	@media screen and (max-width: 900px) {
		padding: 1rem;
	}
`;

export const Search = () => {
	return (
		<>
			<SearchBox>
				<MdSearch size={30} />
				<SearchInput placeholder="Search" />
			</SearchBox>
		</>
	);
};
