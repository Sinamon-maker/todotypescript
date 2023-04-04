import React, { useContext, useState } from 'react';

import { TaskContext } from '../../../../Context/taskContext';
import { TextTableElement } from '../TextTableElement/textTableElement';
import { TableElementContainer } from '../../../../Module/TableElementContainer/TableElementContainer';
import { ActionsTableElement } from '../ActionsTableElement/actionsTableElement';
import { Task } from '../../../../globalTypes';

interface Props {
	item: Task;
	index: number;
}

export const TableRaw = ({ item, index }: Props) => {
	const [showDetailes, setShowDetailes] = useState(false);
	const { changeStatus, onSettingDeleteId, onSettingEditedId } = useContext(TaskContext);

	const handleClick = () => {
		console.log('show detailes');
		setShowDetailes(() => !showDetailes);
		console.log(showDetailes);
	};

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

			<TableElementContainer style="whitespace-normal pl-6 px-2 py-2  sm:pt-2 sm:pr-2 md:pl-10 font-medium text-left  bg-fill-main rounded">
				<div className="flex justify-between items-center">
					<TextTableElement task={item} handleClick={handleClick} />
					<ActionsTableElement task={item} onChangeStatus={onChangeStatus} delClick={delClick} editClick={editClick} />
				</div>

				{showDetailes && (
					<p className="rounded py-2 border border-gray-700 leading-relaxed md:w-3/4 lg:4/5">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto qui, sequi pariatur odit quis non, ab, praesentium quidem repudiandae nisi ea! Omnis
						dolorem delectus nisi quae debitis perspiciatis minus doloremque?
					</p>
				)}
			</TableElementContainer>
		</tr>
	);
};
