import React from 'react';
import { createBrowserRouter, redirect, Router } from 'react-router-dom';
import Main from './Main';
import { MainPage } from './Pages/MainPage/MainPage';
import { ErrorPage } from './Pages/ErrorPage/ErrorPage';
import { LoginForm } from './Pages/LoginForm/loginForm';
import { RegisterForm } from './Pages/RegisterForm/registerForm';
import TasksPage from './Pages/TaskPage/tasksPage';
import { TasksCataloge } from './Pages/TasksCataloge/TasksCataloge';
import Home from './Pages/Home/Home';
import { auth } from './Firebase/Config';
import getCollection from './Hooks/getCollection';

import { User, onAuthStateChanged } from 'firebase/auth';

const func = async () => {
	const user = auth.currentUser;
	console.log('user', user);

	return 2;
};

const LoadData = () => {
	return 50;
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
						path: '/login',
						element: <LoginForm />,
						errorElement: <ErrorPage />,
					},
					{
						path: '/register',
						element: <RegisterForm />,
						errorElement: <ErrorPage />,
					},
				],
			},
			{
				path: '/tasks',
				element: <Home />,
				errorElement: <ErrorPage />,
				loader: LoadData,
				children: [
					{
						path: '/tasks',
						element: <TasksCataloge />,
						errorElement: <ErrorPage />,
						loader: LoadData,
					},
					{
						path: '/tasks/:userId',
						element: <TasksPage />,
						errorElement: <ErrorPage />,
						loader: LoadData,
					},
				],
			},
		],
	},
]);
