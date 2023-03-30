import React, { useEffect, useState } from 'react';

import { useParams, useNavigate, useLoaderData } from 'react-router-dom';

import { UserContext } from '../../Context/UserContext';

import { ContentOfTasks } from '../../Components/ContentOfTasks/contentOfTasks';

import { Data, serverDataTask } from '../../globalTypes';
import { TaskProvider } from '../../Context/taskProvider';

const TasksPage = () => {
	const loadData = useLoaderData() as serverDataTask;
	console.log(loadData);
	return (
		<TaskProvider loadData={loadData}>
			<ContentOfTasks />
		</TaskProvider>
	);
};

export default TasksPage;
