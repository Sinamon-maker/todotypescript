import React, { useContext } from 'react';
import { TaskContext } from '../../../Context/taskContext';
import { sortList } from '../../../Utils';
import { NotTasks } from '../../NotTasks/notTasks';
import { Container } from '../../../Module/Container/Container';
import useChangeTaskQueryStore from '../../../store/tasksStore';
import { TableRaw } from '../TableElements/TaskTableRaw/tableRaw';
import { Loader } from '../../Loader/loader';

export const ListTasks = () => {
	const { taskResult } = useContext(TaskContext);
	const sorted = useChangeTaskQueryStore((s) => s.sorted);

	const sortedList = taskResult ? sortList(taskResult?.tasks, sorted) : [];

	if (!taskResult?.tasks?.length) return <NotTasks />;
	return (
		<div className="w-full grow  overflow-y-auto  scroll-smooth grid">
			<Container>
				<ul className=" w-full sm:w-full p-2 border-2 border-fill-weak tracking-normal  bg-fill-main font-normal text-base ssm:text-lg text-left  text-skin-base overflow-hidden rounded-md shadow-md">
					{sortedList.map((item, index) => (
						<TableRaw key={item.created} item={item} index={index} />
					))}
				</ul>
			</Container>
		</div>
	);
};
