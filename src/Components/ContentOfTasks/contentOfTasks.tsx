import React, { useContext } from 'react';

import { Container } from '../../Module/Container/Container';
import { NewTaskForm } from '../NewTaskForm/NewTaskForm';
import { Table } from '../Table/Table';
import { TaskProvider } from '../../Context/TaskProvider';

import { UserContext } from '../../Context/UserContext';

import { Task } from '../../globalTypes';

type Props = {
	loadData: Task[] | null;
};

export const ContentOfTasks = ({ loadData }: Props) => {
	const logoName = useContext(UserContext);
	return (
		<TaskProvider loadData={loadData}>
			<main className="w-full  m-auto grow overflow-y-auto scroll-smooth ">
				<Container>
					<NewTaskForm />
					<Table />
				</Container>
			</main>
		</TaskProvider>
	);
};
