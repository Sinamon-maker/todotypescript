import React, { useEffect, useContext } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';

import { Header } from '../../Components/Header/header';
import { Container } from '../../Module/Container/Container';

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
			<main className="w-full h-full border border-white  m-auto grow overflow-y-auto scroll-smooth ">
				<Container>
					<Outlet />
				</Container>
			</main>
		</div>
	);
};

export default Home;
