import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from './Main';
import { MainPage } from './Pages/MainPage/MainPage';
import { ErrorPage } from './Pages/ErrorPage/ErrorPage';
import { LoginForm } from './Pages/LoginForm/LoginForm';
import { RegisterForm } from './Pages/RegisterForm/RegisterForm';
import { TasksCataloge } from './Pages/TasksCataloge/TasksCataloge';
import { MyTasksCataloge } from './Pages/MyTasksCatalogue/MyTasksCatalogue';
import Home from './Pages/Home/Home';
import { auth } from './Firebase/Config';

import { PrivateRoutes } from './Pages/PrivateRoutes/PrivateRoutes';
import { HomeTasksPage } from './Pages/HomeTaskPage/HomeTasksPage';

const func = async () => {
	const user = auth.currentUser;
	console.log('user', user);

	return 2;
};

export const Root = createBrowserRouter([
	{
		element: <Main />,
		children: [
			{
				path: '/',
				element: <MainPage />,
				errorElement: <ErrorPage />,
				loader: func,
				children: [
					{
						path: 'login',
						element: <LoginForm />,
						errorElement: <ErrorPage />,
					},
					{
						path: 'register',
						element: <RegisterForm />,
						errorElement: <ErrorPage />,
					},
				],
			},
			{
				element: <PrivateRoutes />,
				children: [
					{
						path: '/catalogue',
						element: <Home />,
						errorElement: <ErrorPage />,

						children: [
							{
								path: '',
								element: <TasksCataloge />,
								errorElement: <ErrorPage />,
							},
							{
								path: ':userId/tasks',
								element: <HomeTasksPage />,
								errorElement: <ErrorPage />,
							},

							{
								path: ':userId',
								element: <MyTasksCataloge />,
								errorElement: <ErrorPage />,
							},
						],
					},
				],
			},
		],
	},
]);
