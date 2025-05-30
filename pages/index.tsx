import { IoHardwareChipOutline } from "react-icons/io5";
import { IoConstructOutline } from "react-icons/io5";
import { IoFlashOutline } from "react-icons/io5";
import { IoFlameOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import IntroScreen from "@/components/IntroScreen";

const items = [
	{
		icon: <IoConstructOutline className="size-32" />,
		label: "Budownictwo",
		color: "gray",
	},
	{
		icon: <IoFlashOutline className="size-32" />,
		label: "Instalacje elektryczne",
		color: "blue",
	},
	{
		icon: <IoHardwareChipOutline className="size-32" />,
		label: "Innowacje technologiczne",
		color: "teal",
	},
	{
		icon: <IoFlameOutline className="size-32" />,
		label: "PPOŻ i okablowanie specjalistyczne",
		color: "red",
	},
];

function getRGB(colorName: string) {
	const colors: Record<string, string> = {
		red: "255, 0, 0",
		blue: "0, 0, 255",
		green: "0, 128, 0",
		yellow: "255, 215, 0",
		purple: "128, 0, 128",
		teal: "0, 128, 128",
		gray: "0, 0, 0",
	};
	return colors[colorName] || "0, 0, 0";
}

export default function Home() {
	const [showForm, setShowForm] = useState(false);

	return (
		<div className="h-[100dvh] overflow-hidden flex justify-center items-center relative">
			<AnimatePresence>
				{!showForm && (
					<IntroScreen
						items={items}
						setShowForm={setShowForm}
						getRGB={getRGB}
					/>
				)}
			</AnimatePresence>
			<AnimatePresence>{showForm && <ContactForm />}</AnimatePresence>
		</div>
	);
}
