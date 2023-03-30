import React, { useContext } from 'react';

import { NewTaskForm } from '../Tasks/NewTaskForm/NewTaskForm';
import { Table } from '../Tasks/Table/table';

import { SortingButtons } from '../Tasks/SortingButtons/SortingButtons';
import { CatalogeHeading } from '../Tasks/CatalogeHeading/CatalogeHeading';
import { TaskContext } from '../../Context/taskContext';

export const ContentOfTasks = () => {
	const { taskResult } = useContext(TaskContext);
	return (
		<>
			<div className="w-full flex flex-col ssm:flex-row justify-between">
				<NewTaskForm />
				<SortingButtons />
			</div>
			<CatalogeHeading resultData={taskResult} />
			<Table />
		</>
	);
};
