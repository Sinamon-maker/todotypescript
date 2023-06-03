import React from 'react';

import { TaskContainer } from '../../Components/Tasks/TasksContainer/TaskContainer';
import { useGetDocument } from '../../api/useGetDocument';
import { ListTasks } from '../../Components/Tasks/ListTasks/ListTasks';
import { SortingButtons } from '../../Components/Tasks/SortingButtons/SortingButtons';
import { Container } from '../../Module/Container/Container';
import { NewTaskForm } from '../../Components/Tasks/NewTaskForm/NewTaskForm';

import { Loader } from '../../Components/Loader/Loader';
import { Search, serverDataTask } from '../../globalTypes';

type Props = {
	currentParams: Search;
};

const TasksPage = ({ currentParams }: Props) => {
	const catalogueId = currentParams.ctlg;

	const { error, newDoc, isLoading } = useGetDocument<serverDataTask>(catalogueId, 'tasks') as serverDataTask;

	if (isLoading) return <Loader />;
	if (!newDoc || error) return <p>Could Not Retreive the data {error}</p>;

	return (
		<div className="w-full">
			<TaskContainer newDoc={newDoc}>
				<Container>
					<div className="flex flex-col justify-between items-end ssm:flex-row">
						<NewTaskForm catalogue={newDoc} />
						<SortingButtons />
					</div>
				</Container>

				<ListTasks resultData={newDoc} />
			</TaskContainer>
		</div>
	);
};

export default TasksPage;
