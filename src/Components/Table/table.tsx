import React, { useContext } from 'react';
import { TableHeading } from '../../Module/TableHeading/TableHeading';
import { TaskContext } from '../../Context/TaskContext';

import { TableBody } from '../TableBody/TableBody';
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
		style: 'w-1/4 sm:w-2/6 md:w-1/4 px-2 py-3 bg-fill-main',
	},
];

export const Table = () => {
	const { listOfTasks } = useContext(TaskContext);
	const list = listOfTasks === null ? [] : listOfTasks;

	if (list === null || list.length === 0) return <NotTasks />;
	return (
		<table className="table-fixed w-full sm:w-full min-w-fit  text-sm sm:text-base text-left  text-skin-base rounded shadow-lg">
			<TableHeading headings={headings} />
			<TableBody list={list} />
		</table>
	);
};
