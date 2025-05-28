import { motion } from "framer-motion";
import PulsatingMouse from "@/components/PulsatingMouse";
import { ReactNode } from "react";
import EpnLogo from "./EPNLogo";

interface Item {
	icon: ReactNode;
	label: string;
	color: string;
}

interface IntroScreenProps {
	items: Item[];
	setShowForm: (show: boolean) => void;
	getRGB: (color: string) => string;
}

const colorClassMap: Record<string, string> = {
	red: "text-red-700",
	blue: "text-blue-700",
	gray: "text-gray-700",
	teal: "text-teal-700",
	purple: "text-purple-700",
};

export default function IntroScreen({
	items,
	setShowForm,
	getRGB,
}: IntroScreenProps) {
	console.log(items);
	return (
		<motion.div
			initial={{ scale: 1 }}
			exit={{ scale: 0, rotate: 90, translateY: -400 }}
			transition={{ duration: 1, ease: "backOut" }}
			onClick={() => setShowForm(true)}
			className="h-[100vh] flex justify-center items-center"
		>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: [0, 1, 1, 1, 1, 1, 1, 0] }}
				transition={{ duration: 6, ease: "easeInOut" }}
				className="absolute bottom-[50%]"
			>
				<EpnLogo />
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 6, duration: 1, ease: "easeInOut" }}
				className="absolute right-[30%] bottom-[30%] sm:top-[50%]"
			>
				<PulsatingMouse />
			</motion.div>

			{items.map((item, index) => (
				<motion.div
					key={index}
					initial={{ opacity: 0 }}
					animate={{
						x: [
							"-400px",
							"-300px",
							"-200px",
							"-150px",
							"-100px",
							"-50px",
							"0px",
							"50px",
							"100px",
							"150px",
							"200px",
							"300px",
							"400px",
						],
						scale: [0.6, 0.7, 0.8, 1, 1, 1, 0.8, 0.7, 0.6],
						opacity: [0, 0, 0, 0, 1, 0, 0, 0, 0],
					}}
					transition={{
						duration: 16,
						repeat: Infinity,
						ease: "linear",
						delay: index * 4,
					}}
					className={`absolute bottom-[50%] flex flex-col items-center ${
						colorClassMap[item.color]
					}`}
					style={{
						filter: `drop-shadow(10px 15px 20px rgba(${getRGB(
							item.color
						)}, 0.5))`,
					}}
				>
					{item.icon}
					<span className="absolute top-32 mt-2 text-center font-medium">
						{item.label}
					</span>
				</motion.div>
			))}
		</motion.div>
	);
}
