import React, { ReactNode } from 'react';

type Props = {
	children: ReactNode;
	close: () => void;
};

export const ModalContainer = ({ children, close }: Props) => {
	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		if (e.target === e.currentTarget) {
			console.log('lol');
			close();
		}
	};
	return (
		<div onClick={handleClick} className="bg-slate-100/[0.5] absolute bottom-0 left-0 flex justify-center items-center h-screen w-screen ">
			{children}
		</div>
	);
};
