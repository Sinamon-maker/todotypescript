import React from 'react';

import { Outlet } from 'react-router-dom';

import { Header } from '../../Components/Header/Header';

const Home = () => {
	//const { isLoading, logoName } = useContext(UserContext);

	//console.log('Welcome', isLoading, logoName);

	//if (!logoName) return <Navigate to="/login" />;

	return (
		<div className=" flex flex-col relative h-screen">
			<Header />
			<main className="w-full  h-full flex flex-col  m-auto grow   p-b-1">
				<Outlet />
			</main>
		</div>
	);
};

export default Home;
