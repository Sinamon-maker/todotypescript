import React from 'react';
import { Outlet } from 'react-router-dom';

import { ThemeComponent } from './Components/ThemeComponent/ThemeComponent';

function Main() {
	return (
		<ThemeComponent>
			<div className="forth   w-full h-screen m-auto grow bg-gradient-to-tr from-blue-800  to-red-800  ">
				<Outlet />
			</div>
		</ThemeComponent>
	);
}

export default Main;
