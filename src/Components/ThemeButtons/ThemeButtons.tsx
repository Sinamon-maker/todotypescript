import React from 'react';

type Props = {
	setTheme: (val: string) => void;
};

export const ThemeButtons = ({ setTheme }: Props) => {
	return (
		<div className="absolute flex top top-2 right-50">
			<ThemeBtn value="yellow" setTheme={setTheme} style="bg-red-800" />
			<ThemeBtn value="red" setTheme={setTheme} style="bg-red-800" />
			<ThemeBtn value="indigo" setTheme={setTheme} style="bg-red-800" />
		</div>
	);
};

type PropsBtn = {
	setTheme: (val: string) => void;
	value: string;
	style: string;
};

const ThemeBtn = ({ value, setTheme, style }: PropsBtn) => {
	const onClick = () => {
		setTheme(value);
	};
	return <button className={`block w-20 h-10 mr-4 last:mr-0 rounded-10 ${style}`} onClick={onClick}></button>;
};
