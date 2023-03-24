import React from 'react';
import { createBrowserRouter, redirect } from 'react-router-dom';
import Main from './Main';
import { MainPage } from './Pages/MainPage/MainPage';
import { ErrorPage } from './Pages/ErrorPage/ErrorPage';
import { LoginForm } from './Pages/LoginForm/loginForm';
import { RegisterForm } from './Pages/RegisterForm/registerForm';
import TasksPage from './Pages/TaskPage/TasksPage';
import { findTasks } from './Utils';

const func = () => {
	const user = localStorage.getItem('currentUser') as string | null;
	if (user) {
		const destination = `/tasks/${user}`;

		return redirect(`${destination}`);
	}
	return 3;
};

const func2 = () => {
	const user = localStorage.getItem('currentUser') as string;
	const list = findTasks(user);
	return list;
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
				path: 'tasks/:userId',
				element: <TasksPage />,
				errorElement: <ErrorPage />,
				loader: func2,
			},
		],
	},
]);
