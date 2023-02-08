import React, { useState } from 'react';

import { ThemeButtons } from '../ThemeButtons/ThemeButtons';

const style = ['theme-red', 'theme-indigo', 'theme-yellow', ''] as const;
type Props = { children: React.ReactNode };

export const ThemeComponent = ({ children }: Props) => {
	const [theme, setTheme] = useState('default');
	let styl = '';
	if (theme === 'red') {
		styl = style[0];
	}
	if (theme === 'yellow') {
		styl = style[2];
	}
	if (theme === 'indigo') {
		styl = style[1];
	}

	return (
		<div className={styl}>
			<ThemeButtons setTheme={setTheme} />
			{children}
		</div>
	);
};
