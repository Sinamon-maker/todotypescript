import React from 'react';

import { useLoaderData } from 'react-router-dom';

import { ContentOfTasks } from '../../Components/ContentOfTasks/contentOfTasks';

import { serverDataTask } from '../../globalTypes';
import { TaskProvider } from '../../Context/taskProvider';

const TasksPage = () => {
	const loadData = useLoaderData() as serverDataTask;
	console.log('taskPage', loadData);

	return (
		<TaskProvider loadData={loadData}>
			<ContentOfTasks />
		</TaskProvider>
	);
};

export default TasksPage;
