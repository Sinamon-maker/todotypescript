import React, { useContext } from 'react';

import { TaskContext } from '../../Context/taskContext';
import { TextTableElement } from '../TaskTableElements/TextTableElement/textTableElement';
import { TableElementContainer } from '../../Module/TableElementContainer/TableElementContainer';
import { ActionsTableElement } from '../TaskTableElements/ActionsTableElement/actionsTableElement';

interface Props<ObjectType> {
	item: ObjectType;
	index: number;
}

export const TaskTableRaw = <ObjectType extends { text: string; status: boolean; created: number }>({ item, index }: Props<ObjectType>) => {
	const { changeStatus, onSettingDeleteId, onSettingEditedId } = useContext(TaskContext);

	const onChangeStatus = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
		changeStatus(id);
	};
	const editClick = (e: React.MouseEvent<HTMLButtonElement>, val: number) => {
		onSettingEditedId(val);
	};

	const delClick = (e: React.MouseEvent<HTMLButtonElement>, val: number) => {
		onSettingDeleteId(val);
	};

	return (
		<tr key={item.created} className=" border-b border-gray-700 relative">
			<TableElementContainer style="w-6 sm: w-1/12  pl-2 sm:px-6 py-3 text-gray-400 text-center">{index + 1}</TableElementContainer>

			<TableElementContainer style="whitespace-normal pl-6 pr-2 pt-1 pb-0.5  sm:pt-2 sm:pr-2 md:pl-10 font-medium text-left  bg-fill-main rounded">
				<TextTableElement task={item} />
			</TableElementContainer>

			<TableElementContainer style="w-1/4 sm:2/4 md:w-1/4 px-2 py-2  sm:py-4 sm:px-6 w-fit text-center bg-fill-main">
				<ActionsTableElement task={item} onChangeStatus={onChangeStatus} delClick={delClick} editClick={editClick} />
			</TableElementContainer>
		</tr>
	);
};
