import React, { useContext } from 'react';
import { TaskContext } from '../../../Context/taskContext';

import { TaskTableBody } from '../TableElements/TableBody/taskTableBody';
import { NotTasks } from '../../NotTasks/notTasks';

export const TaskTable = () => {
	const { sortedList, listOfTasks } = useContext(TaskContext);

	if (!listOfTasks?.length) return <NotTasks />;
	return (
		<table className="table-auto w-full sm:w-full  bg-fill-main text-sm sm:text-base text-left  text-skin-base overflow-hidden rounded-md shadow-md">
			<TaskTableBody list={sortedList} />
		</table>
	);
};
