import React, { useContext } from 'react';

import { sortList } from '../../../Utils';
import { NotTasks } from '../../NotTasks/notTasks';
import { Container } from '../../../Module/Container/Container';
import useChangeTaskQueryStore from '../../../store/tasksStore';
import { TableRaw } from '../TableElements/TaskTableRaw/tableRaw';

import { Data } from '../../../globalTypes';

interface Props {
	resultData: Data | null;
}

export const ListTasks = ({ resultData }: Props) => {
	const sorted = useChangeTaskQueryStore((s) => s.sorted);
	console.log('listTasks', resultData);
	const sortedList = resultData ? sortList(resultData?.tasks, sorted) : [];

	if (!resultData?.tasks?.length) return <NotTasks />;
	return (
		<div className="w-full grow  grid">
			<Container>
				<ul className=" w-full sm:w-full p-2  overflow-y-auto  scroll-smooth bg-fill-main tracking-normal   font-normal text-base ssm:text-lg text-left  text-skin-base overflow-hidden rounded-md shadow-md">
					{sortedList.map((item, index) => (
						<TableRaw key={item.created} item={item} index={index} />
					))}
				</ul>
			</Container>
		</div>
	);
};
