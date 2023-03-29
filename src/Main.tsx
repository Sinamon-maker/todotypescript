import React, { useContext, useState } from 'react';

import { RouterProvider, Outlet } from 'react-router-dom';
import { Root } from './root';
import { auth } from './Firebase/Config';
import { User, onAuthStateChanged } from 'firebase/auth';

import { ThemeComponent } from './Components/ThemeComponent/ThemeComponent';
import { UserProvider } from './Context/UserProvider';
import { UserContext } from './Context/UserContext';

function Main() {
	const [isInit, setInit] = useState(true);

	//onAuthStateChanged(auth, (firebaseUser) => {
	//	console.log('main', firebaseUser);
	//	if (isInit) {
	//		setInit(false);
	///	}
	//});

	const { isLoading } = useContext(UserContext);
	console.log('main2', isLoading, auth.currentUser);

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
