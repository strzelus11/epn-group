import { AnimatePresence, motion } from "framer-motion";
import ErrorMessage from "@/components/ErrorMessage";
import React, { useEffect, useState } from "react";
import EpnLogo from "./EPNLogo";

const ContactForm: React.FC = () => {
	const [firstName, setFirstName] = useState<string>("");
	const [lastName, setLastName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [emailError, setEmailError] = useState<boolean | null>(null);
	const [message, setMessage] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (email !== "") {
			if (!regex.test(email)) {
				setEmailError(true);
			} else {
				setEmailError(false);
			}
		} else {
			setEmailError(null);
		}
	}, [email]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		// Placeholder email validation
		const isValid = /\S+@\S+\.\S+/.test(email);
		setEmailError(!isValid);

		// Simulate form submission
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	};

	return (
		<>
			<motion.div
				initial={{ opacity: 0.5, translateY: -400 }}
				animate={{ opacity: 1, translateY: 0 }}
				transition={{ delay: 0.5, duration: 2, type: "spring" }}
				className="fixed -top-4 -left-4 sm:-top-2 sm:-left-2"
			>
				<EpnLogo className="scale-50" />
			</motion.div>
			<motion.div
				initial={{ scale: 0.5, opacity: 0.5, translateY: -400 }}
				animate={{ scale: 1, opacity: 1, translateY: 0 }}
				transition={{ duration: 1, type: "spring" }}
            >
				<div className="relative p-4 overflow-hidden sm:p-5 rounded-xl backdrop-blur-md bg-white/60 shadow-2xl max-w-xl mx-5">
					<div className="absolute -top-10 -left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-overlay filter opacity-100 blur-2xl -z-2"></div>
					<div className="absolute -right-5 top-[30%] w-40 h-40 bg-indigo-300 rounded-full mix-blend-overlay filter opacity-100 blur-xl -z-2"></div>
					<div className="absolute -bottom-10 -left-10 w-72 h-72 bg-indigo-400 rounded-full mix-blend-overlay filter opacity-100 blur-lg -z-2"></div>
					<div className="font-semibold text-3xl mb-3">
						Skontaktuj się z nami!
					</div>
					<form
						onSubmit={handleSubmit}
						className="flex flex-col sm:items-start gap-2 relative z-2"
					>
						<label htmlFor="firstName">Imię i nazwisko:</label>
						<div className="w-full flex gap-2 items-center">
							<input
								id="firstName"
								value={firstName}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									setFirstName(e.target.value)
								}
								type="text"
								placeholder="Imię"
							/>
							<input
								id="lastName"
								value={lastName}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									setLastName(e.target.value)
								}
								type="text"
								placeholder="Nazwisko"
							/>
						</div>

						<div className="w-full flex justify-between items-center">
							<label htmlFor="email">Email:</label>
							<AnimatePresence>
								{emailError !== null && (
									<ErrorMessage
										message={
											emailError
												? "Your email is invalid."
												: "Your email is correct!"
										}
										error={emailError}
									/>
								)}
							</AnimatePresence>
						</div>
						<input
							id="email"
							value={email}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setEmail(e.target.value)
							}
							type="email"
                            placeholder="you@example.com"
                            className="bg-white"
						/>

						<label htmlFor="message">Wiadomość:</label>
						<textarea
							id="message"
							value={message}
							onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
								setMessage(e.target.value)
							}
							className="min-h-[10rem]"
							placeholder="Twoja wiadomość..."
						/>

						<button
							className="disabled:opacity-50 w-full mt-2"
							type="submit"
							disabled={loading}
						>
							{loading ? "Sending..." : "Submit"}
						</button>
					</form>
				</div>
			</motion.div>
		</>
	);
};

export default ContactForm;
