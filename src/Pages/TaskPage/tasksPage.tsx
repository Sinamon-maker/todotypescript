import React, { useEffect, useState } from 'react';

import { useParams, useNavigate, useLoaderData } from 'react-router-dom';

import { UserContext } from '../../Context/userContext';

import { Header } from '../../Components/Header/header';
import { ContentOfTasks } from '../../Components/ContentOfTasks/contentOfTasks';
import { removeCurrentUserFromStore } from '../../utils';
import { Task } from '../../globalTypes';

type QuizParams = {
	userId: string;
};

const TasksPage = () => {
	const navigate = useNavigate();

	const [logoName, setLogoName] = useState('');

	const loadData = useLoaderData() as Task[] | null;

	const params = useParams<QuizParams>();

	if (!params.userId) navigate('/login');

	useEffect(() => {
		const user = localStorage.getItem('currentUser');
		if (!user) {
			navigate('/login');
		} else {
			setLogoName(user);
		}
	}, [navigate]);

	const logout = () => {
		setLogoName('');
		removeCurrentUserFromStore();
		navigate('/');
	};

	return (
		<UserContext.Provider value={logoName}>
			<div className="flex flex-col h-screen">
				<Header handleClick={logout} />
				<ContentOfTasks loadData={loadData} />
			</div>
		</UserContext.Provider>
	);
};

export default TasksPage;
