import { fadeIn } from "@/motion";
import { motion } from "framer-motion";

interface ErrorMessageProps {
	message: string;
	error: boolean;
}

export default function ErrorMessage({ message, error }: ErrorMessageProps) {
	return (
		<motion.span
			variants={fadeIn("right", "spring", 0, 1)}
			initial="hidden"
			whileInView="show"
			exit="exit"
			className={`text-sm -mb-2 ${
				error ? "text-red-500" : "text-green-500"
			} text-right`}
		>
			{message}
		</motion.span>
	);
}
