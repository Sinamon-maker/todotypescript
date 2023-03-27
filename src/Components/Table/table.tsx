import React, { useContext } from 'react';
import { TableHeading } from '../../Module/TableHeading/tableHeading';
import { TaskContext } from '../../Context/taskContext';

import { TableBody } from '../TableBody/tableBody';
import { TableHead } from '../../globalTypes';
import { NotTasks } from '../NotTasks/NotTasks';

const headings: TableHead[] = [
	{
		text: '',
		style: 'w-1/12 sm: w-1/12  pl-2 sm:px-6 py-3 ',
	},
	{
		text: 'Product name',
		style: 'px-6 py-3 bg-fill-main',
	},
	{
		text: 'Actions',
		style: ' px-2 sm:px-6 py-3 bg-fill-main text-end',
	},
];

export const Table = () => {
	const { sortedList } = useContext(TaskContext);

	if (!sortedList.length) return <NotTasks />;
	return (
		<table className="table-auto w-full sm:w-full   text-sm sm:text-base text-left  text-skin-base overflow-hidden rounded-md shadow-md">
			<TableHeading headings={headings} />
			<TableBody list={sortedList} />
		</table>
	);
};
