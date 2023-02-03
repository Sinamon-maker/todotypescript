import React from 'react';

import { TaskTableRaw } from '../TaskTableRaw/TaskTableRaw';

import { Process } from '../../globalTypes';

interface Items<ObjectType> {
	list: ObjectType[];
}

export const TableBody = <ObjectType extends { text: string; status: Process; created: number }>({ list }: Items<ObjectType>) => (
	<tbody>
		{list.map((item, index) => (
			<TaskTableRaw key={item.created} item={item} index={index} />
		))}
	</tbody>
);
