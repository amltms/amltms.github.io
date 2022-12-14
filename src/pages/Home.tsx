import { SlideShow } from '../components/slideshow/Slideshow';
import { projects } from '../api/projectApi';
import { motion } from 'framer-motion';
export const Home = () => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
			<SlideShow slidesArr={projects} />
		</motion.div>
	);
};
