import React from 'react';

import { AppButton } from '../../../../Module/Button/Button';
import { Task } from '../../../../globalTypes';

interface Props {
	task: Task;
	handleClick: () => void;
}

export const TextTableElement = ({ task, handleClick }: Props) => {
	const doneStyle = task.status ? 'line-through' : '';

	return (
		<AppButton
			style={`grow h-full py-2 text-left text-base sm:text-lg hover:text-red-500 ${doneStyle}`}
			onClick={handleClick}
			title={task.text}
			nameValue="taskText"
		/>
	);
};
