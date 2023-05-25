import React from 'react';

import { Outlet } from 'react-router-dom';

import { Header } from '../../Components/Header/Header';

const Home = () => (
	<div className="   h-screen flex flex-col">
		<Header />
		<main className="w-full h-full  grow  overflow-y-auto  scroll-smooth  p-b-1">
			<Outlet />
		</main>
	</div>
);

export default Home;
