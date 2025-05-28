import { GiClick } from "react-icons/gi";
import { motion } from "framer-motion";
import React from "react";

const PulsatingMouse: React.FC = () => {
	return (
		<motion.div
			initial={{ scale: 1, opacity: 1 }}
			animate={{ scale: [1, 1.2, 1], opacity: [1, 0.6, 1] }}
			transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
		>
			<GiClick className="size-10 text-gray-700" />
		</motion.div>
	);
};

export default PulsatingMouse;
