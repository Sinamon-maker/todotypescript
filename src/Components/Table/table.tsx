import React, { useContext } from 'react';
import { TableHeading } from '../../Module/TableHeading/TableHeading';
import { TaskContext } from '../../Context/TaskContext';

import { TableBody } from '../TableBody/TableBody';
import { TableHead } from '../../globalTypes';
import { NotTasks } from '../NotTasks/NotTasks';

const headings: TableHead[] = [
	{
		id: Math.floor(Math.random() * 100),
		text: '',
		style: 'w-1/12 sm: w-1/12  pl-2 sm:px-6 py-3',
	},
	{
		id: Math.floor(Math.random() * 100),
		text: 'Product name',
		style: 'px-6 py-3 bg-gray-50 dark:bg-gray-800',
	},
	{
		id: Math.floor(Math.random() * 100),
		text: 'Actions',
		style: 'w-1/4 sm:w-2/6 md:w-1/4 px-2 py-3 bg-gray-50 dark:bg-gray-800',
	},
];

export const Table = () => {
	const { listOfTasks } = useContext(TaskContext);
	const list = listOfTasks === null ? [] : listOfTasks;

	if (list === null || list.length === 0) return <NotTasks />;
	return (
		<table className="table-fixed w-full sm:w-full min-w-fit  text-sm text-left text-blue-600 dark:text-gray-400 rounded shadow-lg">
			<TableHeading headings={headings} />
			<TableBody list={list} />
		</table>
	);
};
