import React, { useContext } from 'react';

import { NewTaskForm } from '../Tasks/NewTaskForm/NewTaskForm';

import { SortingButtons } from '../Tasks/SortingButtons/SortingButtons';
import { CatalogeHeading } from '../Tasks/CatalogeHeading/CatalogeHeading';
import { TaskContext } from '../../Context/taskContext';
import { Container } from '../../Module/Container/Container';
import { ListTasks } from '../Tasks/ListTasks/ListTasks';

export const ContentOfTasks = () => {
	const { taskResult, errorLoadData } = useContext(TaskContext);
	if (errorLoadData) return <div className="mb-4 text-skin-base">Could not retreive document {errorLoadData}</div>;
	return (
		<>
			<div className="w-full flex flex-col ssm:flex-row justify-betweens">
				<Container>
					<div className="flex flex-col justify-between items-end ssm:flex-row">
						<NewTaskForm />
						<SortingButtons />
					</div>
				</Container>
			</div>
			<CatalogeHeading resultData={taskResult} />
			<ListTasks />
		</>
	);
};
