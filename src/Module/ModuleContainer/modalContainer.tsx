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
	const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			console.log('lol');
			close();
		}
	};
	return (
		<div
			tabIndex={0}
			onKeyDown={handleKeyDown}
			role="button"
			onClick={handleClick}
			className="bg-slate-100/[0.5] absolute z-50 bottom-0 left-0 flex justify-center items-center h-screen w-screen "
		>
			{children}
		</div>
	);
};
