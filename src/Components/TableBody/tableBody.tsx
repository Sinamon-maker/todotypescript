import React from 'react';

import { TaskTableRaw } from '../TaskTableRaw/taskTableRaw';

interface Items<ObjectType> {
	list: ObjectType[];
}

export const TableBody = <ObjectType extends { text: string; status: boolean; created: number }>({ list }: Items<ObjectType>) => (
	<tbody>
		{list.map((item, index) => (
			<TaskTableRaw key={item.created} item={item} index={index} />
		))}
	</tbody>
);
