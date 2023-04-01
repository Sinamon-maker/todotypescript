import React from 'react';

import { Outlet } from 'react-router-dom';

import { ThemeComponent } from './Components/ThemeComponent/ThemeComponent';
import { UserProvider } from './Context/UserProvider';

function Main() {
	return (
		<ThemeComponent>
			<UserProvider>
				<div className="forth  w-full h-screen m-auto  bg-gradient-to-tr from-blue-800  to-red-800  ">
					{' '}
					<Outlet />
				</div>
			</UserProvider>
		</ThemeComponent>
	);
}

export default Main;
