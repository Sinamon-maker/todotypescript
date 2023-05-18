import React, { useState } from 'react';

import { ThemeButtons } from '../ThemeButtons/ThemeButtons';

const style = ['theme-red', 'theme-indigo', 'theme-yellow', '', 'theme-white'] as const;
type Props = { children: React.ReactNode };

export const ThemeComponent = ({ children }: Props) => {
	const [theme, setTheme] = useState('default');
	let them = '';
	let styl = '';
	if (theme === 'red') {
		them = style[0];
	}
	if (theme === 'yellow') {
		them = style[2];
	}
	if (theme === 'indigo') {
		them = style[1];
	}
	if (theme === 'white') {
		them = style[4];
	}

	styl = `h-screen ${them}`;

	return (
		<div className={`bg-fill-main ${styl}`}>
			<ThemeButtons setTheme={setTheme} />
			{children}
		</div>
	);
};
