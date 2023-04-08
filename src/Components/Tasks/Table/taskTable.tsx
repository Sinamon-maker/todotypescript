import React, { useContext } from 'react';
import { TaskContext } from '../../../Context/taskContext';

import { TaskTableBody } from '../TableElements/TableBody/taskTableBody';
import { NotTasks } from '../../NotTasks/notTasks';
import { Container } from '../../../Module/Container/Container';

export const TaskTable = () => {
	const { sortedList, listOfTasks } = useContext(TaskContext);

	if (!listOfTasks?.length) return <NotTasks />;
	return (
		<div className="w-full grow  overflow-y-auto scroll-smooth">
			<Container>
				<table className="table-auto w-full sm:w-full tracking-normal  bg-fill-main font-normal text-sm sm:text-base lg:text-lg text-left  text-skin-base overflow-hidden rounded-md shadow-md">
					<TaskTableBody list={sortedList} />
				</table>
			</Container>
		</div>
	);
};
