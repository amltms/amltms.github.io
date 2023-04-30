import { Nav } from './components/Nav';
import { Project } from './pages/Project';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { AnimatePresence } from 'framer-motion';
import { createContext, useState } from 'react';
import styled from 'styled-components';

export type GlobalContent = {
	currentSlide: number;
	setCurrentSlide: (c: number) => void;
};

const Container = styled.div`
	overflow-x: hidden;
`;

export const MyGlobalContext = createContext<GlobalContent>({ currentSlide: 0, setCurrentSlide: () => {} });

function App() {
	const location = useLocation();
	const [currentSlide, setCurrentSlide] = useState(0);

	return (
		<MyGlobalContext.Provider value={{ currentSlide, setCurrentSlide }}>
			<div className="App">
				<Container>
					<Nav />
					<AnimatePresence mode="wait" initial={true}>
						<Routes location={location} key={location.pathname}>
							<Route path="/" element={<Home />} />
							<Route path="/project/:id" element={<Project />} />
							<Route path="/about" element={<About />} />
						</Routes>
					</AnimatePresence>
				</Container>
			</div>
		</MyGlobalContext.Provider>
	);
}

export default App;
