import React, { useEffect, useState } from 'react';

import { useParams, useNavigate, useLoaderData } from 'react-router-dom';

import { UserContext } from '../../Context/UserContext';

import { Header } from '../../Components/Header/header';
import { ContentOfTasks } from '../../Components/ContentOfTasks/contentOfTasks';
import { removeCurrentUserFromStore } from '../../Utils';
import { Task } from '../../globalTypes';

type QuizParams = {
	userId: string;
};

const TasksPage = () => {
	const navigate = useNavigate();

	const [logoName, setLogoName] = useState('');

	const loadData = useLoaderData() as Task[] | [];

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

	return <ContentOfTasks loadData={loadData} />;
};

export default TasksPage;
