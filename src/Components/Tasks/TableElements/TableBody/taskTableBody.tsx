import React from 'react';

import { TableRaw } from '../TaskTableRaw/tableRaw';

interface Items<ObjectType> {
	list: ObjectType[];
}

export const TaskTableBody = <ObjectType extends { text: string; status: boolean; created: number }>({ list }: Items<ObjectType>) => (
	<tbody>
		{list.map((item, index) => (
			<TableRaw key={item.created} item={item} index={index} />
		))}
	</tbody>
);
