import React from 'react';

import { Task } from '../../../../globalTypes';

interface Props {
	task: Task;
}

export const TextTableElement = ({ task }: Props) => {
	const doneStyle = task.status ? 'line-through' : '';

	return <span className={`grow h-full py-1 text-left   ${doneStyle}`}>{task.text}</span>;
};
