import React from 'react';

import { AppButton } from '../../../../Module/Button/Button';
import { Task } from '../../../../globalTypes';

interface Props {
	task: Task;
	handleClick: () => void;
	disabled: boolean;
}

export const TextTableElement = ({ task, handleClick, disabled }: Props) => {
	const doneStyle = task.status ? 'line-through' : '';
	if (!task.detailes) {
		return <span className={`grow h-full py-2 text-left font-normal text-sm relative text-base sm:text-lg  ${doneStyle}`}>{task.text}</span>;
	}

	return (
		<AppButton
			style={`grow h-full py-2 text-left relative font-normal text-sm text-base sm:text-lg hover:text-red-500 ${doneStyle}`}
			onClick={handleClick}
			title={task.text}
			nameValue="taskText"
			disabled={disabled}
		/>
	);
};
