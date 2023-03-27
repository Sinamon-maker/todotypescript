import React from 'react';

import { Container } from '../../Module/Container/Container';
import { NewTaskForm } from '../NewTaskForm/MewTaskForm';
import { Table } from '../Table/table';
import { TaskProvider } from '../../Context/taskProvider';

import { Task } from '../../globalTypes';
import { SortingButtons } from '../SortingButtons/SortingButtons';

type Props = {
	loadData: Task[] | [];
};

export const ContentOfTasks = ({ loadData }: Props) => (
	<TaskProvider loadData={loadData}>
		<main className="w-full  m-auto grow overflow-y-auto scroll-smooth ">
			<Container>
				<div className="w-full flex flex-col ssm:flex-row justify-between">
					<NewTaskForm />
					<SortingButtons />
				</div>

				<Table />
			</Container>
		</main>
	</TaskProvider>
);
