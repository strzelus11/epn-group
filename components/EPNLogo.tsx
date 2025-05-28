import React from "react";

interface EpnLogoProps {
	className?: string;
}

const EpnLogo: React.FC<EpnLogoProps> = ({ className = "" }) => {
	return (
		<div
			className={`flex flex-col items-start text-gray-900 drop-shadow-[10px_15px_20px_rgba(0,0,0,0.5)] ${className}`}
		>
			<h1 className="text-8xl font-bold">EPN</h1>
			<h2 className="text-3xl leading-2 font-semibold ml-1 tracking-widest">
				GROUP
			</h2>
		</div>
	);
};

export default EpnLogo;
