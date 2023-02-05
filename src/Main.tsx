import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { ThemeButtons } from './Components/ThemeButtons/ThemeButtons';

function Main() {
	const [theme, setTheme] = useState('');
	return (
		<div className={`theme-${theme}`}>
			<div className="forth   w-full h-screen m-auto grow bg-gradient-to-tr from-blue-800  to-red-800  ">
				<ThemeButtons setTheme={setTheme} />
				<Outlet />
			</div>
		</div>
	);
}

export default Main;
