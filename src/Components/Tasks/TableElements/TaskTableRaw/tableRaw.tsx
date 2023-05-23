import React, { useState } from 'react';
import useChangeTaskQueryStore from '../../../../store/tasksStore';
import { TextTableElement } from '../TextTableElement/textTableElement';
import { Task } from '../../../../globalTypes';

import { ActionsTableElement } from '../ActionsTableElement/actionsTableElement';

import { styleType } from '../../../../styles/styles';
import { AppButton } from '../../../../Module/Button/Button';

interface Props {
	item: Task;
	index: number;
}

export const TableRaw = ({ item, index }: Props) => {
	const [showDetailes, setShowDetailes] = useState(false);

	const setDelId = useChangeTaskQueryStore((s) => s.setTaskDel);
	const setTaskComplete = useChangeTaskQueryStore((s) => s.setTaskComplete);
	const setTaskEdit = useChangeTaskQueryStore((s) => s.setTaskEdit);

	const handleClick = () => {
		console.log('show detailes');
		setShowDetailes(() => !showDetailes);
	};

	const onChangeStatus = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
		setTaskComplete(id);
	};
	const editClick = (e: React.MouseEvent<HTMLButtonElement>, val: Task) => {
		setTaskEdit(val);
	};

	const delClick = (e: React.MouseEvent<HTMLButtonElement>, val: number) => {
		setDelId(val);
	};

	return (
		<li key={item.created} className="  flex items-center">
			<div className="w-6 sm: w-1/12  pl-2 sm:px-6 py-1 shrink-0 text-gray-400 ">{index + 1}</div>

			<AppButton
				title=""
				style={styleType.iconWithBorder}
				nameValue="inProcess"
				onClick={(e) => onChangeStatus(e, item.created)}
				iconStyle=""
				ariaLabel="changeStatus"
				Icon={item.status ? '' : 'done'}
			/>

			<div className="whitespace-normal grow px-2 py-1  sm:pt-2 sm:pr-2 md:pl-6 font-medium text-left  rounded items-center">
				<div className="grow ml-4">
					<TextTableElement task={item} />
					{showDetailes && <p className="rounded py-2 border-b text-rose-600 border-gray-700 leading-relaxed md:w-3/4 lg:4/5">{item.detailes}</p>}
				</div>
			</div>
			<ActionsTableElement task={item} delClick={delClick} editClick={editClick} toggleDetailes={handleClick} />
		</li>
	);
};
