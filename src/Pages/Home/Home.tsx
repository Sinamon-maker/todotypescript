import React from 'react';

import { Outlet, useLoaderData } from 'react-router-dom';

import { TaskProvider } from '../../Context/taskProvider';

import { Header } from '../../Components/Header/header';
import { Container } from '../../Module/Container/Container';
import { UserProvider } from '../../Context/UserProvider';

import { Task } from '../../globalTypes';
import getCollection from '../../Hooks/getCollection';

const Home = () => {
	//const { documents, error } = getCollection('tasks');
	//	const loadData = useLoaderData() as Task[] | [];
	//console.log('home', documents, error);

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
