import React from 'react';

import { Outlet } from 'react-router-dom';

import { ThemeComponent } from './Components/ThemeComponent/ThemeComponent';
import { UserProvider } from './Context/UserProvider';

function Main() {
	return (
		<div className="forth  w-full h-screen  bg-fixed bg-gradient-to-tr from-blue-800  to-red-800  ">
			<UserProvider>
				<ThemeComponent>
					<Outlet />
				</ThemeComponent>
			</UserProvider>
		</div>
	);
}

export default Main;
