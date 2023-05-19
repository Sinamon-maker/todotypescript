import React from 'react';

import { useParams } from 'react-router-dom';

import { TaskContainer } from '../../Components/Tasks/TaskContainer';
import { useGetDocument } from '../../api/useGetDocument';
import { ListTasks } from '../../Components/Tasks/ListTasks/ListTasks';
import { SortingButtons } from '../../Components/Tasks/SortingButtons/SortingButtons';
import { Container } from '../../Module/Container/Container';
import { NewTaskForm } from '../../Components/Tasks/NewTaskForm/NewTaskForm';
import { CatalogeHeading } from '../../Components/Tasks/CatalogeHeading/CatalogeHeading';
import { Loader } from '../../Components/Loader/loader';

const TasksPage = () => {
	//const loadData = useLoaderData() as serverDataTask;

	const { userId, catalogueId } = useParams();
	console.log('id', userId);
	const { error, newDoc, isLoading } = useGetDocument(catalogueId!);

	const loadData = { error, newDoc };

	if (loadData) {
		console.log('taskPage', loadData);
	}
	if (isLoading) return <Loader />;
	if (!newDoc) return <p>Could Not Retreive the data {error}</p>;

	return (
		<TaskContainer loadData={loadData}>
			<Container>
				<div className="flex flex-col justify-between items-end ssm:flex-row">
					<NewTaskForm />
					<SortingButtons />
				</div>
			</Container>

			<CatalogeHeading resultData={newDoc} />
			<ListTasks resultData={newDoc} />
		</TaskContainer>
	);
};

export default TasksPage;
