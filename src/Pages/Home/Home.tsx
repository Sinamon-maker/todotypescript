import React, { useEffect, useContext } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/userContext';

import { Header } from '../../Components/Header/header';

const Home = () => {
	const { isLoading, logoName } = useContext(UserContext);
	const navigate = useNavigate();
	console.log('Welcome', isLoading, logoName);
	useEffect(() => {
		if (logoName === null && !isLoading) {
			console.log('By from Home');
			navigate('/login');
		}
	}, [logoName, navigate, isLoading]);
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
