import React from 'react';

import { AppButton } from '../../../../Module/Button/Button';
import { Task } from '../../../../globalTypes';

interface Props {
	task: Task;
}

export const TextTableElement = ({ task }: Props) => {
	const doneStyle = task.status ? 'line-through' : '';

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>, sth: Task) => {
		console.log(sth);
	};

	return (
		<AppButton
			style={`block w-full h-full py-2 text-left hover:text-red-500 ${doneStyle}`}
			onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e, task)}
			title={task.text}
			nameValue="taskText"
		/>
	);
};
