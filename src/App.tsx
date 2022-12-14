import { Nav } from './components/nav/Nav';
import { Project } from './pages/Project';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { AnimatePresence } from 'framer-motion';

function App() {
	const location = useLocation();

	return (
		<div className="App">
			<Nav />
			<AnimatePresence exitBeforeEnter initial={false}>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home />} />
					<Route path="/projects/:id" element={<Project />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;
