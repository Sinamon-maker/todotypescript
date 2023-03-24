import React from 'react';

import { Container } from '../../Module/Container/Container';
import { NewTaskForm } from '../NewTaskForm/MewTaskForm';
import { Table } from '../Table/table';
import { TaskProvider } from '../../Context/taskProvider';

import { Task } from '../../globalTypes';

type Props = {
	loadData: Task[] | null;
};

export const ContentOfTasks = ({ loadData }: Props) => (
	<TaskProvider loadData={loadData}>
		<main className="w-full  m-auto grow overflow-y-auto scroll-smooth ">
			<Container>
				<NewTaskForm />
				<Table />
			</Container>
		</main>
	</TaskProvider>
);
