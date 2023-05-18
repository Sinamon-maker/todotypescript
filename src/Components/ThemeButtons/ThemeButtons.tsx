import React from 'react';

type PropsBtn = {
	setTheme: (val: string) => void;
	value: string;
	style: string;
};

const ThemeBtn = ({ value, setTheme, style }: PropsBtn) => {
	const handleClick = () => {
		setTheme(value);
	};
	return <button aria-label="changeColors" className={`w-6 h-6 sm:w-8 sm:h-8 block border-2 mr-2 last:mr-0 rounded-full ${style}`} onClick={handleClick} />;
};

type Props = {
	setTheme: (val: string) => void;
};

export const ThemeButtons = ({ setTheme }: Props) => (
	<div className="absolute flex top top-1 right-4 sm:right-50">
		<ThemeBtn value="yellow" setTheme={setTheme} style="bg-black border-yellow-500 hover:bg-sky-500" />
		<ThemeBtn value="red" setTheme={setTheme} style="bg-indigo-900 border-rose-600 hover:bg-slate-400" />
		<ThemeBtn value="indigo" setTheme={setTheme} style="bg-indigo-900 border-gray-500 hover:bg-slate-400" />
		<ThemeBtn value="white" setTheme={setTheme} style="bg-indigo-900 border-gray-500 hover:bg-slate-400" />
	</div>
);
