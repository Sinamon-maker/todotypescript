import React from 'react';

import { NewTaskForm } from '../NewTaskForm/NewTaskForm';
import { Table } from '../Table/table';

import { SortingButtons } from '../SortingButtons/SortingButtons';

export const ContentOfTasks = () => (
	<>
		<div className="w-full flex flex-col ssm:flex-row justify-between">
			<NewTaskForm />
			<SortingButtons />
		</div>
		<Table />
	</>
);
