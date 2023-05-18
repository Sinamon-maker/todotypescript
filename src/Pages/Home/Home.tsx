import React, { useContext } from 'react';

import { Outlet, Navigate } from 'react-router-dom';
import { UserContext } from '../../Context/userContext';

import { Header } from '../../Components/Header/header';

const Home = () => {
	//const { isLoading, logoName } = useContext(UserContext);

	//console.log('Welcome', isLoading, logoName);

	//if (!logoName) return <Navigate to="/login" />;

	return (
		<div className="h-full flex flex-col">
			<Header />
			<main className="w-full h-full flex flex-col overflow-y-auto scroll-smooth m-auto grow   p-b-1">
				<Outlet />
			</main>
		</div>
	);
};

export default Home;
