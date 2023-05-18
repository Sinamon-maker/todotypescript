import React from 'react';

import { useParams } from 'react-router-dom';

import { ContentOfTasks } from '../../Components/ContentOfTasks/contentOfTasks';

import { Data, serverDataTask } from '../../globalTypes';
import { TaskProvider } from '../../Context/taskProvider';
import { useGetDocument } from '../../api/useGetDocument';

const TasksPage = () => {
	//const loadData = useLoaderData() as serverDataTask;

	const { userId } = useParams();
	console.log('id', userId);
	const { error, newDoc } = useGetDocument(userId!);

	const loadData = { error, newDoc };

	if (loadData) {
		console.log('taskPage', loadData);
	}

	return (
		<TaskProvider loadData={loadData}>
			<ContentOfTasks />
		</TaskProvider>
	);
};

export default TasksPage;
