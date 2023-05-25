import React, { useState } from 'react';
import useChangeTaskQueryStore from '../../../../store/tasksStore';
import { TextTableElement } from '../TextTableElement/TextTableElement';
import { Task } from '../../../../globalTypes';

import { ActionsTableElement } from '../ActionsTableElement/ActionsTableElement';

import { styleType } from '../../../../styles/styles';
import { AppButton } from '../../../../Module/Button/Apbutton';

interface Props {
	item: Task;
	index: number;
	onClickChangeStatus: (id: number) => void;
}

export const TableRaw = ({ item, index, onClickChangeStatus }: Props) => {
	const [showDetailes, setShowDetailes] = useState(false);

	const setDelId = useChangeTaskQueryStore((s) => s.setTaskDel);
	const setTaskEdit = useChangeTaskQueryStore((s) => s.setTaskEdit);

	const handleClick = () => {
		console.log('show detailes');
		setShowDetailes(() => !showDetailes);
	};

	const onChangeStatus = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
		onClickChangeStatus(id);
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
				iconStyle="w-4 h-4 sm:w-4 sm:h-8 sm:w-8"
				ariaLabel="changeStatus"
				Icon={item.status ? 'done' : ''}
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
