import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const LoadingSpinner = styled.div`
	width: 64px;
	height: 64px;
	border: 8px solid;
	border-color: #cacaca transparent;
	border-radius: 50%;
	animation: ${rotate} 1.2s linear infinite;
`;
function Spinner() {
	return <LoadingSpinner />;
}

export default Spinner;
